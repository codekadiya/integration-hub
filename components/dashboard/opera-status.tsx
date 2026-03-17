import { Activity, ExternalLink } from "lucide-react";
import SectionCard from "./section-card";

export default function OperaStatus() {
  const uptimeData = [
    1, 1, 0.95, 1, 0.9, 1, 1, 0.92, 1, 1, 0.85, 1, 1, 1, 0.4, 0.5, 0.8, 1, 1, 1,
    0.95, 1, 1, 1,
  ];

  return (
    <SectionCard
      title={
        <div className="flex items-center gap-2 text-slate-800 font-semibold">
          <Activity size={18} strokeWidth={1.8} />
          Opera PMS Status
        </div>
      }
      action={
        <ExternalLink size={16} className="text-slate-400 cursor-pointer" />
      }
    >
      <div className="flex flex-col h-full">
        {/* Top */}
        <div>
          <div className="text-xs text-slate-500 mb-6">
            Last heartbeat: 2 mins ago
          </div>

          <div className="flex items-center gap-2">
            <div className="text-4xl font-semibold tracking-tight">99.9%</div>
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Push chart to bottom */}
        <div className="flex-1" />

        {/* Bottom section */}
        <div>
          {/* Uptime + Target row */}
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Uptime</span>
            <span>Target: 99.0%</span>
          </div>

          {/* Bars */}
          <div className="flex items-end gap-[4px] h-10">
            {uptimeData.map((value, i) => {
              const isLow = value < 0.6;

              return (
                <div
                  key={i}
                  className={`w-[4px] rounded-sm ${
                    isLow ? "bg-red-400" : "bg-green-400"
                  }`}
                  style={{
                    height: `${Math.max(value * 100, 15)}%`,
                  }}
                />
              );
            })}
          </div>

          {/* Timeline */}
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>24h ago</span>
            <span>Now</span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
