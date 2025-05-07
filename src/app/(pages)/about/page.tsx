"use client";

import Link from "next/link";
import { House } from "@phosphor-icons/react";

export default function AboutPage() {
  return (
    <div
      className={`
        max-w-4xl mx-auto p-6 relative
        space-y-8 text-lg leading-relaxed
        h-screen px-4 py-8 flex flex-col
        justify-between items-center
        w-full text-center container
      `}
    >
      <div className="absolute top-4 left-4">
        <Link href="/">
          <House />
        </Link>
      </div>
      <section>
        <h1 className="text-4xl font-bold mb-4">About Le Fog</h1>
        <p>
          Le Fog is a music project created by Adam Robson—blending poetic
          songwriting, minimalist production, and immersive soundscapes.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Vision</h2>
        <p>
          The mission is to create honest, frictionless sound environments that
          elevate mood, deepen introspection, and evoke atmosphere.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p>
          With four albums released since 2020, Adam handles all conceptual
          design, recording, production, and distribution under Le Fog.
        </p>
      </section>
    </div>
  );
}
