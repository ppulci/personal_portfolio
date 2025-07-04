"use client";
import { useState } from "react";

export default function ContactMe() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "rate-limited">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const res = await fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else if (res.status === 429) {
      setStatus("rate-limited");
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-5xl font-bold mb-8 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-6">
        {/* Name and Email side by side */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col">
            <label htmlFor="name" className="mb-1 text-left font-semibold">Your Name</label>
            <input
              id="name"
              name="name"
              required
              className="border rounded px-3 py-2"
              placeholder="John Doe"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="email" className="mb-1 text-left font-semibold">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="border rounded px-3 py-2"
              placeholder="name@email.com"
            />
          </div>
        </div>

        {/* Message below, centered */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 text-left font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="border rounded px-3 py-2 resize-none"
            placeholder="What can I do for you?"
            rows={5}
          />
        </div>

        {/* Send Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-white text-black rounded px-6 py-2 font-semibold hover:bg-green-500 hover:text-white transition-colors duration-200"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
        </div>

        {/* Status Messages */}
        {/* TODO: this implementation for the message status can be improved */}
        <div className="flex justify-center">
          {status === "sent" && <p className="text-green-600">Message sent!</p>}
          {status === "rate-limited" && <p className="text-red-600">Rate limited. Please wait.</p>}
          {status === "error" && <p className="text-red-600">Something went wrong.</p>}
        </div>
      </form>
    </div>
  );
}