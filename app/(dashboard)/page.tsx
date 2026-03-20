"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/dashboard/dashboard-header";

export default function DashboardPage() {
  const [token, setToken] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    setToken(storedToken);
    setIsChecked(true);
  }, []);

  if (!isChecked) return null;

  if (!token) return null;

  return (
    <div className="space-y-8">
      <DashboardHeader title="Dashboard" />

      <div className="grid grid-cols-6 gap-6 mt-4">
        Placeholder page here...
      </div>
    </div>
  );
}
