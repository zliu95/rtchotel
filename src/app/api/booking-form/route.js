import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function getEnvConfig() {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.BOOKING_FROM_EMAIL;
    const to = process.env.BOOKING_TO_EMAIL;

    if (!host || !user || !pass || !from || !to) {
        return null;
    }

    return { host, port, secure, user, pass, from, to };
}

export async function POST(req) {
    try {
        const body = await req.json();
        const fields = body?.fields || {};
        const labels = body?.labels || {};

        const fullName = (fields["full-name"] || "").trim();
        const email = (fields["email-address"] || "").trim();

        if (!fullName || !email) {
            return NextResponse.json(
                { ok: false, message: "Full name and email are required." },
                { status: 400 }
            );
        }

        const config = getEnvConfig();
        if (!config) {
            return NextResponse.json(
                { ok: false, message: "Mail server is not configured." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            secure: config.secure,
            auth: {
                user: config.user,
                pass: config.pass,
            },
        });

        const rows = Object.entries(fields).map(([key, value]) => {
            const label = labels[key] || key;
            return { label, value: `${value || ""}`.trim() || "-" };
        });

        const textBody = rows.map((row) => `${row.label}: ${row.value}`).join("\n");
        const htmlBody = `
            <div>
                <h2>New Booking Form Submission</h2>
                <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
                    <tbody>
                        ${rows
                            .map(
                                (row) =>
                                    `<tr><td><strong>${escapeHtml(row.label)}</strong></td><td>${escapeHtml(row.value)}</td></tr>`
                            )
                            .join("")}
                    </tbody>
                </table>
            </div>
        `;

        await transporter.sendMail({
            from: config.from,
            to: config.to,
            replyTo: email,
            subject: `Booking Form - ${fullName}`,
            text: textBody,
            html: htmlBody,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Booking form mail error:", error);
        return NextResponse.json(
            { ok: false, message: "Failed to submit booking form." },
            { status: 500 }
        );
    }
}
