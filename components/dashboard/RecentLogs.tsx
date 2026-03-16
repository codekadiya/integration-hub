// components/dashboard/RecentLogs.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

const logs = [
  {
    type: "success",
    message: "Opera PMS updated guest profile ID #88239 in Salesforce.",
    time: "2 mins ago",
  },
  {
    type: "success",
    message: "Mews invoice #INV-2025 created in QuickBooks.",
    time: "15 mins ago",
  },
  {
    type: "error",
    message: "Stripe API timeout. Retrying in 5 mins.",
    time: "1 hour ago",
  },
  {
    type: "info",
    message: 'New integration flow "VIP Alerts" activated by Albert Flores.',
    time: "2 hours ago",
  },
  {
    type: "warning",
    message: "Rate limit approaching for HubSpot API (85%).",
    time: "3 hours ago",
  },
];

const typeIcons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

const typeColors = {
  success: "text-secondary",
  error: "text-destructive",
  warning: "text-accent",
  info: "text-primary",
};

export function RecentLogs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Recent Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {logs.map((log, index) => {
            const Icon = typeIcons[log.type as keyof typeof typeIcons];
            return (
              <div
                key={index}
                className="flex items-start gap-3 border-b last:border-0 pb-3 last:pb-0"
              >
                <Icon
                  className={`h-5 w-5 ${typeColors[log.type as keyof typeof typeColors]} mt-0.5`}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="capitalize">
                      {log.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {log.time}
                    </span>
                  </div>
                  <p className="text-sm">{log.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
