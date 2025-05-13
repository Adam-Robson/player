"use client";

import { useState } from "react";
import PageLayout from "@/_components/layout/page-layout";
import "@/_styles/contact-form.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://app.lefog.xyz/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        // assume API returns a success
        const data = await response.json();
        console.log("Success:", data);
        // optionally reset the form or show a success message
        setSubmitted(true);
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        // handle error response
        const errorData = await response.json();
        console.error("Error:", errorData);
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <div
        className="flex flex-col justify-start items-center
      w-full text-center p-2"
      >
        <h1 className="text-3xl font-light text-center">Contact Le Fog</h1>
        <div className="w-full max-w-2xl space-y-6 p-8 rounded-2xl shadow-lg">
          {submitted ? (
            <div className="p-4 rounded">
              <p className="font-medium mb-2">Thank you!</p>
              <p>Your message has been sent. We’ll be in touch soon.</p>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md shadow-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md shadow-sm"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`
                  submit
                w-full flex justify-center py-2 
                px-4 border border-transparent 
                rounded-md focus:outline-none
                focus:ring-2 focus:ring-offset-2
              `}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {error && (
                  <p className="mt-2 text-sm text-red-200 text-center">
                    {error}
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
