"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ContactType } from "@/_types/about-page";
import "@/_styles/contact-form.css";

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState<ContactType>({
    email: "",
    firstname: "",
    lastname: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        router.push("/"); // ✅ successful submission
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error("Error submitting contact form:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 rounded shadow"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          required
          value={form.firstname}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          required
          value={form.lastname}
          onChange={handleChange}
          className="input"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          value={form.message}
          onChange={handleChange}
          className="textarea"
        />
        <button type="submit" className="btn" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}
