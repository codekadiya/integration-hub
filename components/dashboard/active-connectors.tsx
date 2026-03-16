import { MoreHorizontal, Funnel } from "lucide-react";

const connectors = [
  {
    source: {
      icon: "O",
      name: "Opera PMS",
    },
    target: {
      icon: "S",
      name: "Salesforce",
    },
    type: "Guest Profiles",
    status: "active",
    lastSync: "2 mins ago",
  },
  {
    source: {
      icon: "O",
      name: "Mews",
    },
    target: {
      icon: "Q",
      name: "QuickBooks",
    },
    type: "Invoicing",
    status: "active",
    lastSync: "15 mins ago",
  },
  {
    source: {
      icon: "H",
      name: "HubSpot",
    },
    target: {
      icon: "Z",
      name: "Zendesk",
    },
    type: "Support Tickets",
    status: "paused",
    lastSync: "2 days ago",
  },
  {
    source: {
      icon: "S",
      name: "Stripe",
    },
    target: {
      icon: "M",
      name: "Mailchimp",
    },
    type: "Payments",
    status: "error",
    lastSync: "1 hour ago",
  },
];

const statusStyles = {
  active: "bg-green-100 text-green-700",
  paused: "bg-yellow-100 text-yellow-700",
  error: "bg-red-100 text-red-700",
};

export default function ActiveConnectors() {
  return (
    <div className="bg-white rounded-xl border p-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Active Connectors</h2>

        <div className="flex gap-3">
          <div className="relative">
            <Funnel
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              placeholder="Filter systems..."
              className="border rounded-md pl-9 pr-3 py-2 text-sm w-[200px]"
            />
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
            + Add New
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[1.5fr_120px_140px_40px] text-xs text-gray-500 pb-3 border-b">
        <span>SYSTEM PAIR</span>
        <span>STATUS</span>
        <span>LAST SYNC</span>
        <span className="text-right">ACTIONS</span>
      </div>

      {/* Rows */}
      <div className="divide-y max-h-[320px] overflow-y-auto">
        {connectors.map((c, i) => (
          <div
            key={i}
            className="grid grid-cols-[1.5fr_120px_140px_40px] items-center py-4"
          >
            {/* System Pair */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center border">
                  {c.source.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-500 text-white text-xs flex items-center justify-center border">
                  {c.target.icon}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">
                  {c.source.name} <span className="text-gray-400">↔</span>{" "}
                  {c.target.name}
                </p>
                <p className="text-xs text-gray-500">{c.type}</p>
              </div>
            </div>

            {/* Status */}
            <div>
              <span
                className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full font-medium ${statusStyles[c.status]}`}
              >
                <span className="w-2 h-2 rounded-full bg-current opacity-70"></span>
                {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
              </span>
            </div>

            {/* Last Sync */}
            <span className="text-sm text-gray-600">{c.lastSync}</span>

            {/* Actions */}
            <button className="text-gray-500 flex justify-end">
              <MoreHorizontal size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
