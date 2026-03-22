# 同一服务器复用部署说明（SSH + Nginx + PM2）

本文档用于在同一台服务器（`66.179.8.171`）上部署新的 Next.js 项目，并复用当前已验证的连接与 Nginx 反向代理方式。

## 1. 服务器连接方式

本机 `~/.ssh/config` 已配置：

```sshconfig
Host 66.179.8.171
    Port 20023
    IdentityFile ~/.ssh/id_rsa
    User root
```

连接命令：

```bash
ssh 66.179.8.171
```

快速检查（连接后）：

```bash
hostname
pm2 ls
nginx -t
systemctl is-active nginx
```

## 2. 服务器目录约定（推荐统一）

- 项目工作目录：`/www/wwwroot/<domain>`
- 私有裸仓库目录：`/www/wwwroot/git_repo/<repo>.git`
- Nginx 站点配置：`/www/server/panel/vhost/nginx/<domain>.conf`
- SSL 证书目录：`/www/server/panel/vhost/cert/<domain>/`
- 日志目录：`/www/wwwlogs/`

当前站点示例：

- 代码目录：`/www/wwwroot/tropicalcasalaguna.com`
- 裸仓库：`/www/wwwroot/git_repo/tropicalcasalaguna.git`
- PM2 进程：`tropicalcasalaguna`
- 反向代理端口：`3001`

## 3. 多个 Next.js 项目共存规则（关键）

同机部署多个 Next.js 时，每个域名必须绑定**独立端口**，避免串站和接口冲突。

- `rewardsholiday.com` 使用 `3000`
- `tropicalcasalaguna.com` 使用 `3001`

新增项目时，按顺序分配新端口（如 `3002`、`3003`...），并在 PM2 与 Nginx 中保持一致。

## 4. 新项目部署步骤（通用）

### 4.1 创建目录与裸仓库

```bash
# 服务器上执行
mkdir -p /www/wwwroot/git_repo
mkdir -p /www/wwwroot/<domain>
cd /www/wwwroot/git_repo
git init --bare <repo>.git
```

### 4.2 本地推送到服务器私有仓

```bash
# 本地项目目录执行
git remote add prod ssh://root@66.179.8.171:20023/www/wwwroot/git_repo/<repo>.git
git push prod main
```

### 4.3 服务器拉取代码并安装依赖

```bash
# 服务器上执行
cd /www/wwwroot/<domain>
git init
git remote add origin /www/wwwroot/git_repo/<repo>.git
git fetch origin
git checkout -B main origin/main
npm ci
```

### 4.4 同步环境变量

```bash
# 本地 -> 服务器
scp -P 20023 .env.local root@66.179.8.171:/www/wwwroot/<domain>/.env.local

# 服务器上建议设置权限
chmod 600 /www/wwwroot/<domain>/.env.local
```

### 4.5 构建并启动 PM2

```bash
# 服务器上执行
cd /www/wwwroot/<domain>
npm run build
pm2 start npm --name <pm2-app-name> -- start -- -p <port>
pm2 save
pm2 ls
```

查看进程详情：

```bash
pm2 show <pm2-app-name>
pm2 logs <pm2-app-name> --lines 200
```

## 5. Nginx 配置模板（HTTP 跳转 HTTPS + 反代 Next.js）

文件：`/www/server/panel/vhost/nginx/<domain>.conf`

```nginx
server {
    listen 80;
    server_name <domain> www.<domain>;

    location /.well-known/acme-challenge/ {
        root /www/wwwroot/<domain>;
    }

    location / {
        return 301 https://<domain>$request_uri;
    }
}

server {
    listen 443 ssl http2;
    server_name <domain>;

    ssl_certificate     /www/server/panel/vhost/cert/<domain>/fullchain.pem;
    ssl_certificate_key /www/server/panel/vhost/cert/<domain>/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+AES128:EECDH+AES256:!MD5:!aNULL:!EDH;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
        proxy_pass http://127.0.0.1:<port>;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 120s;
    }

    access_log /www/wwwlogs/<domain>.log;
    error_log  /www/wwwlogs/<domain>.error.log;
}
```

应用配置：

```bash
nginx -t
systemctl reload nginx
```

## 6. SSL 证书（acme.sh）

```bash
# 如未安装 acme.sh，请先安装（按官方方式）

# 申请证书（Nginx/Webroot 模式二选一，以下为 webroot 示例）
~/.acme.sh/acme.sh --issue -d <domain> -d www.<domain> -w /www/wwwroot/<domain>

# 安装到 BT 面板证书目录
mkdir -p /www/server/panel/vhost/cert/<domain>
~/.acme.sh/acme.sh --install-cert -d <domain> \
  --key-file       /www/server/panel/vhost/cert/<domain>/privkey.pem \
  --fullchain-file /www/server/panel/vhost/cert/<domain>/fullchain.pem

nginx -t && systemctl reload nginx
```

## 7. 常用运维检查命令

```bash
# 端口占用（确认 Next.js 监听端口）
ss -lntp | rg ':3000|:3001|:3002'

# 检查域名配置是否命中预期站点
nginx -T | rg -n "server_name|proxy_pass|tropicalcasalaguna.com|rewardsholiday.com"

# PM2 自启动（必要时）
pm2 startup
pm2 save
```

## 8. 故障排查要点

### 8.1 访问到其他站点内容

常见原因是 `server_name` 或 `proxy_pass` 指向错误端口。  
处理顺序：

1. `nginx -T` 检查域名命中的 `server_name`。
2. 核对该站点 `proxy_pass` 端口是否与 `pm2 show <app>` 的启动参数一致。
3. `nginx -t && systemctl reload nginx`。
4. `pm2 restart <app>` 后再次测试。

### 8.2 出现 502/504

- Next.js 进程未启动：`pm2 ls` / `pm2 logs`
- 端口未监听：`ss -lntp | rg ':<port>'`
- Nginx 配置错误：`nginx -t`

### 8.3 系统进不了正常启动（fsck 提示）

若出现 `UNEXPECTED INCONSISTENCY; RUN fsck MANUALLY`，需要在恢复模式完成 `fsck` 修复后再启动系统；修复后再继续执行上述部署步骤。

## 9. 当前已落地配置（供复用）

- 域名：`tropicalcasalaguna.com`
- Nginx 配置：`/www/server/panel/vhost/nginx/tropicalcasalaguna.com.conf`
- 代理端口：`3001`
- PM2：`tropicalcasalaguna`（启动命令：`npm start -- -p 3001`）

后续其他项目复用本流程时，只需替换：

- `<domain>`
- `<repo>`
- `<pm2-app-name>`
- `<port>`
