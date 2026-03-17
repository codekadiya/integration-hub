import { RefreshCw } from "lucide-react";
import SectionCard from "./section-card";

export default function SyncActivity() {
  const stats = [
    { label: "Reservations", value: 452, color: "bg-blue-400" },
    { label: "Guest Profiles", value: 381, color: "bg-yellow-400" },
    { label: "Pending", value: 12, color: "bg-slate-300" },
  ];

  return (
    <SectionCard
      title={
        <div className="flex items-center gap-2">
          <RefreshCw size={16} className="text-slate-500" />
          Sync Activity
        </div>
      }
      action={
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium">
          +12%
        </span>
      }
    >
      <div className="flex flex-col min-h-[360px] pt-1">
        {/* Subtitle */}
        <div className="text-xs text-slate-500 mb-6">
          Average daily syncs: <span className="font-medium">98% success</span>
        </div>

        {/* Stat card */}
        <div className="flex justify-center items-center flex-1">
          <div className="bg-white border rounded-xl shadow-md px-4 py-2 text-left text-xs">
            <div className="text-slate-400">Nov 25</div>
            <div className="font-semibold text-slate-900 flex gap-2">
              <span>Syncs</span>
              <span>142</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3 mt-auto">
          {stats.map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <div className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                {item.label}
              </div>

              <div className="font-medium text-slate-900">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
