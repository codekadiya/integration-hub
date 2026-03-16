import TopNavbar from "@/components/dashboard/top-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex flex-col">
      <TopNavbar />

      <main className="mx-auto max-w-7xl px-6 py-8 flex-1">{children}</main>

      <footer className="border-t bg-white text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <div>© 2025 Kanto Integrations. All rights reserved.</div>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-slate-900">
              Documentation
            </span>
            <span className="cursor-pointer hover:text-slate-900">Support</span>
            <span className="cursor-pointer hover:text-slate-900">
              API Status
            </span>
            <span className="cursor-pointer hover:text-slate-900">
              Privacy Policy
            </span>
          </div>
        </div>
      </footer>

      <button className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-indigo-700">
        Help
      </button>
    </div>
  );
}
