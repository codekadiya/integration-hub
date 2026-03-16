// components/dashboard/ActiveConnectors.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MoreVertical, Play, Pause, AlertCircle } from "lucide-react";

const connectors = [
  {
    name: "Opera PMS → Salesforce",
    type: "Guest Profiles",
    status: "active",
    lastSync: "2 mins ago",
  },
  {
    name: "Mews → QuickBooks",
    type: "Invoicing",
    status: "active",
    lastSync: "2 mins ago",
  },
  {
    name: "HubSpot → Zendesk",
    type: "Support Tickets",
    status: "paused",
    lastSync: "2 days ago",
  },
  {
    name: "Stripe → Mailchimp",
    type: "Payments",
    status: "error",
    lastSync: "1 hour ago",
  },
];

const statusColors = {
  active: "bg-secondary text-white",
  paused: "bg-muted text-primary",
  error: "bg-destructive text-white",
};

export function ActiveConnectors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Active Connectors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Filter systems..." className="pl-8" />
          </div>

          <div className="grid grid-cols-4 gap-4 text-xs font-medium text-muted-foreground mb-2">
            <div>SYSTEM PAIR</div>
            <div>STATUS</div>
            <div>LAST SYNC</div>
            <div>ACTIONS</div>
          </div>

          {connectors.map((connector) => (
            <div
              key={connector.name}
              className="grid grid-cols-4 gap-4 items-center py-2 border-b last:border-0"
            >
              <div>
                <div className="font-medium">{connector.name}</div>
                <div className="text-sm text-muted-foreground">
                  {connector.type}
                </div>
              </div>
              <div>
                <Badge
                  className={
                    statusColors[connector.status as keyof typeof statusColors]
                  }
                >
                  {connector.status.charAt(0).toUpperCase() +
                    connector.status.slice(1)}
                </Badge>
              </div>
              <div className="text-sm">{connector.lastSync}</div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Play className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Pause className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
