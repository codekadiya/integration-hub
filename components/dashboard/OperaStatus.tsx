// components/dashboard/OperaStatus.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function OperaStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Opera PMS Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Last heartbeat
            </span>
            <span className="text-sm font-medium">2 mins ago</span>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
            <Progress value={99.9} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
