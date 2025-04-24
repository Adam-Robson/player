import { House } from "@phosphor-icons/react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h3 className="text-3xl font-bold mb-4">Thanks for reaching out!</h3>
      <p className="text-lg text-gray-600">
        We&apos;ll get back to you as soon as we can.
      </p>
      <Link href="/" className="mt-6 text-blue-950 hover:scale-105">
        return <House />
      </Link>
    </main>
  );
}
