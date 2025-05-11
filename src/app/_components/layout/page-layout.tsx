"use client";

import Link from "next/link";
import { ReactNode } from "react";
import ThemeToggle from "@/_components/theme-toggle";
import { House } from "@phosphor-icons/react";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="max-w-screen-lg mx-auto min-h-screen flex flex-col p-2 relative">
      <header className="flex justify-between items-center px-6 py-4 w-full">
        <Link href="/" className="">
          <House size={32} />
        </Link>
        <ThemeToggle />
      </header>

      {/* Page Content */}
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
