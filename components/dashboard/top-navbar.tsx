"use client";

import { Bell, ChevronDown, Search, Settings } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Connectors", href: "/connectors" },
  { label: "Logs", href: "/logs" },
  { label: "Accounts", href: "/accounts" },
];

const user = {
  avatar: "/avatar.jpg",
  fullName: "Damien Murphy",
  role: "Manager",
};

export default function TopNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <div
            className="flex cursor-pointer items-center gap-3 whitespace-nowrap"
            onClick={() => router.push("/")}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-xl"
            />

            <div className="text-[15px] font-semibold text-slate-900 whitespace-nowrap">
              API for Hospitality
            </div>
          </div>

          <nav className="mr-8 flex items-center gap-2 rounded-full bg-slate-100 p-1">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <button
                  key={item.label}
                  onClick={() => router.push(item.href)}
                  className={
                    active
                      ? "rounded-full bg-slate-900 px-4 py-1.5 text-sm font-medium text-white"
                      : "rounded-full px-4 py-1.5 text-sm font-medium text-slate-500 transition hover:text-slate-900"
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-10">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className="h-10 w-[280px] rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-slate-300"
              placeholder="Search logs or connectors..."
            />
          </div>

          <div className="flex items-center gap-1">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-slate-900">
              <Bell className="h-4 w-4" />
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-slate-900">
              <Settings className="h-4 w-4" />
            </button>

            <div className="mx-1 h-6 w-px bg-slate-200"></div>

            <button className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-1.5 whitespace-nowrap">
              <Image
                src={user.avatar}
                alt={user.fullName}
                width={32}
                height={32}
                className="rounded-full"
              />

              <div className="hidden text-left md:block">
                <div className="text-sm font-medium leading-none text-slate-900">
                  {user.fullName}
                </div>
                <div className="mt-1 text-xs text-slate-500">{user.role}</div>
              </div>

              <ChevronDown className="h-4 w-4 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
