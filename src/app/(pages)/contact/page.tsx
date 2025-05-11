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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (response.ok) {
        // Assuming the API returns a success message
        const data = await response.json();
        console.log("Success:", data);
        // Optionally, you can reset the form or show a success message
        setSubmitted(true);
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        // Handle error response
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
      <div className="min-h-screen max-w-2xl mx-auto flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-6 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-regular text-center">Contact Le Fog</h1>

          {submitted ? (
            <div className="p-4 rounded">
              <p className="font-medium mb-2">Thank you!</p>
              <p>Your message has been sent. We’ll be in touch soon.</p>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
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
