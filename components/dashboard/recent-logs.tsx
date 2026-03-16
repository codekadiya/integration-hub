import SectionCard from "./section-card";

type LogType = "success" | "error" | "warning";

interface Log {
  title: string;
  message: string;
  time: string;
  type: LogType;
}

const logs: Log[] = [
  {
    title: "Sync Success",
    message: "Opera PMS updated guest profile ID #88239 in Salesforce.",
    time: "10:42 AM",
    type: "success",
  },
  {
    title: "Sync Success",
    message: "Mews invoice #INV-2025 created in QuickBooks.",
    time: "10:40 AM",
    type: "success",
  },
  {
    title: "Connection Failed",
    message: "Stripe API timeout. Retrying in 5 mins.",
    time: "10:35 AM",
    type: "error",
  },
  {
    title: "Connector Deployed",
    message: "New integration flow 'VIP Alerts' activated by Albert Flores.",
    time: "09:15 AM",
    type: "success",
  },
  {
    title: "Warning",
    message: "Rate limit approaching for HubSpot API (85%).",
    time: "08:50 AM",
    type: "warning",
  },
];

const logStyles = {
  success: {
    dot: "bg-green-500",
    title: "text-slate-900",
    message: "text-slate-500",
    time: "text-slate-400",
    container: "",
  },
  error: {
    dot: "bg-red-500",
    title: "text-red-600",
    message: "text-red-500",
    time: "text-red-500",
    container: "bg-red-50",
  },
  warning: {
    dot: "bg-yellow-500",
    title: "text-slate-900",
    message: "text-slate-500",
    time: "text-slate-400",
    container: "",
  },
};

export default function RecentLogs() {
  return (
    <SectionCard
      title="Recent Logs"
      action={
        <button className="text-sm text-purple-600 hover:underline">
          View All
        </button>
      }
    >
      <div className="space-y-4">
        {logs.map((log, i) => {
          const style = logStyles[log.type];

          return (
            <div
              key={i}
              className={`flex justify-between items-start p-2 rounded-lg hover:bg-slate-50 transition ${style.container}`}
            >
              <div className="flex gap-3">
                <div
                  className={`mt-[6px] h-2.5 w-2.5 rounded-full ${style.dot}`}
                />

                <div>
                  <div className={`text-sm font-medium ${style.title}`}>
                    {log.title}
                  </div>

                  <div className={`text-xs leading-snug ${style.message}`}>
                    {log.message}
                  </div>
                </div>
              </div>

              <div className={`text-xs whitespace-nowrap ${style.time}`}>
                {log.time}
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
