"use client";

import Albums from "@/_components/albums";
import { House } from "@phosphor-icons/react";
import Link from "next/link";

export default function CollectionsPage() {
  return (
    <main
      className={`
      container h-screen
      w-full max-w-screen-lg
      mx-auto px-4 py-10
      text-center
    `}
    >
      <div className="relative max-w-screen-md mx-auto w-full h-screen">
        <Link href="/" className="absolute top-4 left-4">
          <House />
        </Link>
        <h1 className="text-2xl font-medium mb-6">Le Fog Collections</h1>
        <Albums />
      </div>
    </main>
  );
}
