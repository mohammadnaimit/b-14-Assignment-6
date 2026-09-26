
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
  className?: string;
}

export const ActiveLink = ({ href, children, exact, className }: ActiveLinkProps) => {
  const pathname = usePathname();

  const isActive = exact
    ? pathname === href
    : pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`transition-colors font-bold ${
        isActive
          ? "text-[#ccff00]"
          : "text-gray-300 hover:text-[#ccff00]"
      } ${className ?? ""}`}
    >
      {children}
    </Link>
  );
};