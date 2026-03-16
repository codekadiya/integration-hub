import SectionCard from "./section-card";

export default function OperaStatus() {
  return (
    <SectionCard title="Opera PMS Status">
      <div className="space-y-5">
        <div>
          <div className="text-4xl font-semibold">99.9%</div>

          <div className="text-sm text-slate-500">
            Uptime over the last 30 days
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>API Response Time</span>
            <span className="font-medium">148ms</span>
          </div>

          <div className="h-2 bg-slate-200 rounded-full">
            <div className="h-2 w-[85%] bg-green-500 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="border rounded-xl p-3">
            <div className="text-xs text-slate-500">Incidents</div>

            <div className="text-xl font-semibold">1</div>
          </div>

          <div className="border rounded-xl p-3">
            <div className="text-xs text-slate-500">Retries</div>

            <div className="text-xl font-semibold">24</div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
