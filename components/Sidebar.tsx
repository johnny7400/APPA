"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { Role } from "@prisma/client";

const ROLE_LABELS: Record<Role, string> = {
  ADMIN: "Administrator",
  SEF_DC: "Šef DC",
  SUPERVIZOR: "Supervizor",
  KURIR: "Kurir",
  VOZAC_KAMIONA: "Vozač kamiona",
  ISPOMOĆ: "Ispomoć",
};

const NAV_ITEMS: { href: string; label: string; roles: Role[] }[] = [
  { href: "/dashboard", label: "Početna", roles: ["ADMIN", "SEF_DC", "KURIR", "VOZAC_KAMIONA", "SUPERVIZOR", "ISPOMOĆ"] },
  { href: "/dashboard/kvalitet-dostave", label: "Kvalitet dostave", roles: ["ADMIN", "SEF_DC", "SUPERVIZOR"] },
  { href: "/dashboard/admin", label: "Admin Dashboard", roles: ["ADMIN"] },
];

interface SidebarProps {
  userName: string;
  userRole: Role;
}

export default function Sidebar({ userName, userRole }: SidebarProps) {
  const pathname = usePathname();

  const visibleItems = NAV_ITEMS.filter((item) =>
    item.roles.includes(userRole)
  );

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h1 className="text-gray-900 font-bold text-lg">SpectraLog</h1>
      </div>

      {/* Navigacija */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {visibleItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              pathname === item.href
                ? "bg-orange-500 text-white"
                : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Korisnik */}
      <div className="px-3 py-4 border-t border-gray-100">
        <div className="flex items-center gap-3 px-3 mb-3">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
            <span className="text-orange-600 text-xs font-bold">
              {userName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-gray-900 text-sm font-semibold truncate">{userName}</p>
            <p className="text-gray-400 text-xs">{ROLE_LABELS[userRole]}</p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full text-left px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          Odjavi se
        </button>
      </div>
    </aside>
  );
}
