"use client";

import Link from "next/link";
import ContactForm from "@/_components/contact-form";
import { House } from "@phosphor-icons/react";

export default function AboutPage() {
  return (
    <main
      className={`
        relative max-w-screen-lg mx-auto
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
      <div className="relative max-w-screen-md mx-auto w-full h-screen">
        <h1 className="text-center text-2xl font-medium mb-6">About</h1>
        <div className="container text-base font-normal max-w-md mx-auto p-4 mb-4 w-full">
          Le Fog is an independent music project founded in 2020 by Adam Robson
          that combines raw recording techniques, aphoristic lyrics, electrified
          rock, contemporary folk, and electronic music. Made with dust in
          Portland, Oregon.
        </div>

        <div className="h-1/2 flex flex-col justify-end items-center">
          <p className="pt-4 mt-6 mb-4 font-medium">
            Feel free to get in touch using the form below.
          </p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
