"use client";

import Link from "next/link";
import Albums from "@/_components/albums";
import { House } from "@phosphor-icons/react";
import PageLayout from "@/_components/layout/page-layout";

export default function CollectionsPage() {
  return (
    <PageLayout>
      <h1 className="text-center text-2xl font-medium mb-6">
        Le Fog Collections
      </h1>
      <section
        className={`
        relative flex justify-center
        items-center max-w-screen-lg mx-auto
        h-screen px-4 w-full
      `}
      >
        <Albums />
      </section>
    </PageLayout>
  );
}
