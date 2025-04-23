"use client";

import { useState } from "react";
import { ContactType } from "@/_types/about-page";
import "@/_styles/contact-form.css";
export default function ContactForm() {
  const [form, setForm] = useState<ContactType>({
    email: "",
    firstname: "",
    lastname: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setForm({
      email: "",
      firstname: "",
      lastname: "",
      message: "",
    });
  }

  return (
    <div className="container max-w-xs flex flex-col justify-end">
      <form
        action="/api/contact"
        className="flex flex-col justify-center items-center max-w-md w-full mx-auto"
      >
        <span className="w-full flex justify-between items-center p-2">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            id="email"
            className="form-input email"
            onChange={handleChange}
          />
        </span>

        <span className="w-full flex justify-between items-center p-2">
          <label htmlFor="firstname" className="form-label">
            first name
          </label>
          <input
            type="text"
            id="firstname"
            className="form-input firstname"
            onChange={handleChange}
          />
        </span>

        <span className="w-full flex justify-between items-center p-2">
          <label htmlFor="lastname" className="form-label">
            last name
          </label>
          <input
            type="text"
            id="lastname"
            className="form-input lastname"
            onChange={handleChange}
          />
        </span>

        <span className="w-full flex justify-between items-center p-2">
          <label htmlFor="message" className="form-label">
            message
          </label>
          <textarea
            name="message"
            id="message"
            className="form-input message"
            onChange={handleChange}
          />
        </span>

        <button className="submit" onSubmit={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
}
