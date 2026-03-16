"use client";

import { ChevronDown } from "lucide-react";
import { DateRangePicker } from "./date-range-picker";

export default function DashboardHeader() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-slate-500">System Integration Overview</p>
        <h1 className="mt-2 text-4xl font-semibold">Integration Hub</h1>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
        <DateRangePicker />

        <button className="flex h-10 items-center gap-2 rounded-full bg-slate-900 px-4 text-sm font-medium text-white">
          All Systems
          <ChevronDown className="h-4 w-4 text-white/80" />
        </button>
      </div>
    </div>
  );
}
