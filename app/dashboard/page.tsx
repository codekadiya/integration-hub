// app/dashboard/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ActiveConnectors } from "@/components/dashboard/ActiveConnectors";
import { RecentLogs } from "@/components/dashboard/RecentLogs";
import { SyncActivity } from "@/components/dashboard/SyncActivity";
import { IntegrationCoPilot } from "@/components/dashboard/IntegrationCoPilot";
import { OperaStatus } from "@/components/dashboard/OperaStatus";
import { Header } from "@/components/dashboard/Header";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Active Connectors - spans 8 columns */}
          <div className="col-span-8">
            <ActiveConnectors />
          </div>

          {/* Recent Logs - spans 4 columns */}
          <div className="col-span-4">
            <RecentLogs />
          </div>

          {/* Sync Activity - spans 3 columns */}
          <div className="col-span-3">
            <SyncActivity />
          </div>

          {/* Integration CoPilot - spans 3 columns */}
          <div className="col-span-3">
            <IntegrationCoPilot />
          </div>

          {/* Opera Status - spans 3 columns */}
          <div className="col-span-3">
            <OperaStatus />
          </div>

          {/* Help Card - spans 3 columns */}
          <div className="col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Help</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Need assistance with your integrations? Check our
                  documentation or contact support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
