'use client';
import { useMemo, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, Tag } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
// import { Calendar } from "./ui/calendar"; // ← shadcn/ui 的 Calendar 组件（react-day-picker）
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";
// import { cn } from "./lib/utils"; // 如果没有 cn，直接用字符串拼 class 也行

export const HeaderWidget = () => {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState({
    from: new Date(), // 2025-10-07
    to:   new Date() + 2, // 2025-10-08
  });

  // 展示在输入框里的文本
  const rangeLabel = useMemo(() => {
    if (range?.from && range?.to) {
      return `${format(range.from, "LLL dd, yyyy")} → ${format(range.to, "LLL dd, yyyy")}`;
    }
    if (range?.from && !range?.to) {
      return `${format(range.from, "LLL dd, yyyy")} → …`;
    }
    return "Select dates";
  }, [range]);

  // 当选择完成（from + to 都有）时自动关闭弹层
  const handleSelect = (r) => {
    if (!r) return;
    setRange(r);
    if (r.from && r.to) setOpen(false);
  };

  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 z-10 w-[80%] max-w-4xl -translate-x-1/2 p-2 opacity-100 md:p-3">
      <div className="grid gap-4 md:grid-cols-3 items-end">

        {/* Dates（一次选择起止日期，弹出两个月面板） */}
        <div className="md:col-span-1 flex flex-col gap-2">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg bg-background px-3 py-2 text-left",
                  "border border-transparent hover:border-border focus:outline-none"
                )}
              >
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                <span className={cn("text-sm", !range?.from && "text-muted-foreground")}>
                  {rangeLabel}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 bg-white" align="start">
              <Calendar
                mode="range"
                numberOfMonths={2}              // ← 两个月并排显示
                selected={range}
                onSelect={handleSelect}
                defaultMonth={range?.from}      // 起始月份聚焦到 from
                disabled={{ before: new Date() }} // 可选：禁用今天之前
                initialFocus
              />
              <div className="flex items-center justify-end gap-2 px-3 py-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setRange({})}
                >
                  Clear
                </Button>
                <Button
                  size="sm"
                  onClick={() => setOpen(false)}
                  disabled={!range?.from || !range?.to}
                >
                  Select dates
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 rounded-lg bg-background px-3 py-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <select className="w-full border-0 bg-transparent text-sm focus:outline-none">
              <option>2 Adults</option>
              <option>1 Adult</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
            </select>
          </div>
        </div>

        {/* CTA */}
        <div>
          <Button
            variant="destructive"
            size="lg"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
            onClick={() => {
              // 这里提交时拿到 from/to： range.from / range.to
              // 例如：console.log(range)
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderWidget;
