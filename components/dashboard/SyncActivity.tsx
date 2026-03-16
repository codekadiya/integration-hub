// components/dashboard/SyncActivity.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SyncActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Sync Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Average daily syncs</span>
              <span className="text-sm text-secondary">98% success</span>
            </div>
            <Progress value={98} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">142</div>
              <div className="text-sm text-muted-foreground">Syncs today</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-secondary">381</div>
              <div className="text-sm text-muted-foreground">
                Guest Profiles
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <div className="text-sm font-medium">Pending Syncs</div>
              <div className="text-2xl font-bold text-accent">12</div>
            </div>
            <div className="text-xs text-muted-foreground">Nov 25</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
