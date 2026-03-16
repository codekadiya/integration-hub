import { CircleHelp, Bot, Send, MoreHorizontal } from "lucide-react";
import SectionCard from "./section-card";

export default function IntegrationCopilot() {
  return (
    <SectionCard
      title={
        <div className="flex items-center gap-2 text-purple-600 font-semibold">
          <CircleHelp size={18} strokeWidth={1.8} />
          Integration CoPilot
        </div>
      }
      action={<MoreHorizontal size={18} className="text-slate-400" />}
    >
      <div className="flex flex-col min-h-[420px]">
        {/* Message */}
        <div className="flex gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600">
            <Bot size={16} fill="currentColor" strokeWidth={1.25} />
          </div>

          <div className="max-w-[230px] rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-600">
            I noticed recurring errors in the Opera Connector. Would you like
            more information?
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Suggestions */}
        <div className="flex gap-2 mb-2">
          <button className="px-3 py-1.5 text-xs bg-slate-100 rounded-md text-slate-600">
            Fix Schema
          </button>

          <button className="px-3 py-1.5 text-xs bg-slate-100 rounded-md text-slate-600">
            Retry Sync
          </button>
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 border rounded-md px-3 py-1">
          <input
            className="flex-1 bg-transparent text-sm outline-none"
            placeholder="Type a request..."
          />

          <button className="h-8 w-8 flex items-center justify-center rounded-md bg-black text-white">
            <Send size={14} />
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
