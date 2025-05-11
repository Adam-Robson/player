"use client";
import { House } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import "@/_styles/about.css";
import Image from "next/image";
import PageLayout from "@/_components/layout/page-layout";

export default function AboutPage() {
  return (
    <PageLayout>
      <main
        className={`
      relative min-h-screen max-w-screen-lg mx-auto 
      flex flex-col justify-start items-center
      w-full text-center
      p-2
    `}
      >
        <h1 className="title text-4xl font-bold leading-tight mb-20">
          About Le Fog
        </h1>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div className="w-full">
            <Image
              src="/images/roaddogs.jpg"
              alt="Portrait or relevant graphic"
              width={400}
              height={200}
              className="rounded-2xl shadow-lg w-full object-cover dark:grayscale"
            />
          </div>

          <div className="space-y-6">
            <p className="text leading-relaxed">
              Le Fog is a music project - created by Adam Robson - blending
              poetic songwriting, minimalist production, and immersive
              soundscapes.
            </p>
            <p className="text leading-relaxed">
              The mission is to create honest, frictionless sound environments
              that elevate mood, deepen introspection, and evoke atmosphere.
            </p>
            <p className="text leading-relaxed">
              Since 2020, Adam Robson has handled all conceptual design,
              recording, production, and distribution under the Le Fog name,
              releasing four albums to date.
            </p>
          </div>
        </motion.section>
      </main>
    </PageLayout>
  );
}
