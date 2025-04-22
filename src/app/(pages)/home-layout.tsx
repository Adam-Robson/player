"use client";

import Image from "next/image";
import Header from "@/_components/layout/header";
import Footer from "@/_components/layout/footer";

export default function HomeLayout() {
  return (
    <div
      className={`
      h-full max-w-screen-lg w-full mx-auto
      relative flex flex-col justify-between items-center
    `}
    >
      <Header />
      <Image
        src="/images/hert.svg"
        alt="logo for le fog"
        width={400}
        height={400}
        className="absolute opacity-65 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg"
      />
      <Footer />
    </div>
  );
}
