"use client";

import * as React from "react";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DateRangePicker() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 10, 22),
    to: new Date(2025, 10, 29),
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-3 rounded-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
          <CalendarIcon className="h-4 w-4 text-slate-500" />
          <span>{date?.from ? format(date.from, "dd.MM.yyyy") : ""}</span>
          <span className="text-slate-400">–</span>
          <span>{date?.to ? format(date.to, "dd.MM.yyyy") : ""}</span>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-lg"
      >
        <div className="rounded-xl bg-white p-2">
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            defaultMonth={date?.from}
            className="p-2"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
