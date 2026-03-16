// components/dashboard/IntegrationCoPilot.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, AlertCircle } from "lucide-react";

export function IntegrationCoPilot() {
  return (
    <Card className="bg-primary text-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Bot className="h-5 w-5" />
          Integration CoPilot
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm">
              I noticed recurring errors in the Opera Connector. Would you like
              more information?
            </p>
          </div>
          <Button
            variant="secondary"
            className="w-full bg-white text-primary hover:bg-white/90"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
