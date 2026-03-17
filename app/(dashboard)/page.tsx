import DashboardHeader from "@/components/dashboard/dashboard-header";
import ActiveConnectors from "@/components/dashboard/active-connectors";
import IntegrationCopilot from "@/components/dashboard/integration-copilot";
import RecentLogs from "@/components/dashboard/recent-logs";
import SyncActivity from "@/components/dashboard/sync-activity";
import OperaStatus from "@/components/dashboard/opera-status";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Integration Hub"
        subtitle="System Integration Overview"
        filters={true}
      />

      <div className="grid grid-cols-12 gap-6 mt-4 items-stretch">
        <div className="col-span-8">
          <ActiveConnectors />
        </div>

        <div className="col-span-4">
          <IntegrationCopilot />
        </div>

        <div className="col-span-4">
          <RecentLogs />
        </div>

        <div className="col-span-4">
          <SyncActivity />
        </div>

        <div className="col-span-4">
          <OperaStatus />
        </div>
      </div>
    </div>
  );
}
