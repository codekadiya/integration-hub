import TopNavbar from "@/components/dashboard/top-navbar";
import AuthGuard from "@/components/auth/auth-guard";
import { CircleHelp } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-[#f5f7fb] flex flex-col">
        <TopNavbar />
        <main className="mx-auto max-w-7xl px-6 py-8 flex-1">{children}</main>
        <footer className="border-t bg-white text-sm text-slate-500">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
            <div>
              © {new Date().getFullYear()} Stayware Inc. All rights reserved.
            </div>

            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-slate-900">
                Documentation
              </span>
              <span className="cursor-pointer hover:text-slate-900">
                Support
              </span>
              <span className="cursor-pointer hover:text-slate-900">
                API Status
              </span>
              <span className="cursor-pointer hover:text-slate-900">
                Privacy Policy
              </span>
            </div>
          </div>
        </footer>
        <button className="fixed bottom-6 right-6 flex items-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-indigo-700">
          <CircleHelp size={18} strokeWidth={2} />
          <span className="font-medium">Help</span>
        </button>
      </div>
    </AuthGuard>
  );
}
