"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { Role } from "@prisma/client";

const ROLE_LABELS: Record<Role, string> = {
  ADMIN: "Administrator",
  SEF_DC: "Šef DC",
  KURIR: "Kurir",
  VOZAC_KAMIONA: "Vozač kamiona",
  SUPERVIZOR: "Supervizor",
};

const NAV_ITEMS: { href: string; label: string; roles: Role[] }[] = [
  { href: "/dashboard", label: "Početna", roles: ["ADMIN", "SEF_DC", "KURIR", "VOZAC_KAMIONA", "SUPERVIZOR"] },
  { href: "/dashboard/izvjestaji", label: "Izvještaji", roles: ["ADMIN", "SEF_DC", "SUPERVIZOR"] },
  { href: "/dashboard/korisnici", label: "Korisnici", roles: ["ADMIN"] },
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
    <aside className="w-64 bg-gray-900 min-h-screen flex flex-col">
      <div className="px-6 py-5 border-b border-gray-700">
        <h1 className="text-white font-bold text-lg">DC Aplikacija</h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {visibleItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-gray-700">
        <div className="px-3 mb-3">
          <p className="text-white text-sm font-medium">{userName}</p>
          <p className="text-gray-400 text-xs">{ROLE_LABELS[userRole]}</p>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
        >
          Odjavi se
        </button>
      </div>
    </aside>
  );
}
