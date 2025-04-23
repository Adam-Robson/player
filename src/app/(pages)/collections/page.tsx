"use client";

import Link from "next/link";
import Albums from "@/_components/albums";
import { House } from "@phosphor-icons/react";

export default function CollectionsPage() {
  return (
    <main
      className={`
        relative max-w-screen-lg mx-auto
        h-screen px-4 py-8 
        w-full text-center container
      `}
    >
      <div className="absolute top-4 left-4">
        <Link href="/">
          <House />
        </Link>
      </div>
      <div className="relative max-w-screen-md mx-auto w-full h-screen">
        <h1 className="text-center text-2xl font-medium mb-6">
          Le Fog Collections
        </h1>
        <Albums />
      </div>
    </main>
  );
}
