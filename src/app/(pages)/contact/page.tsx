"use client";
import { div } from "framer-motion/client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      {submitted ? (
        <div className="p-4 border border-green-200 rounded text-green-900 bg-green-100">
          <p className="text-2xl font-semibold mb-4">Thank you!</p>
          <p>Your message has been sent.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="message"
            required
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded h-32"
          />
          <button type="submit" disabled={loading} className="...">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      )}
      {error && <p className="text-red-200">{error}</p>}
    </div>
  );
}
