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
      <h2 className="text-5xl font-bold mb-4 text-center text-gray-800">
        Reach <span className="text-yellow-500">Out</span>
      </h2>
      <p className="text-gray-600 text-center mb-10 max-w-2xl">
        Interested in what I'm building? Let's connect and see how we can collaborate.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-6">
        {/* Name and Email side by side */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col">
            <label htmlFor="name" className="mb-2 text-left font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              className="border-2 border-gray-300 rounded-md px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="Peter Parker"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="email" className="mb-2 text-left font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="border-2 border-gray-300 rounded-md px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="name@example.com"
            />
          </div>
        </div>

        {/* Message below, full width */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-left font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="border-2 border-gray-300 rounded-md px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
            placeholder="What can I do for you?"
            rows={6}
          />
        </div>

        {/* Send Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* Status Messages */}
        <div className="flex justify-center mt-4">
          {status === "sent" && (
            <div className="px-4 py-2 bg-green-100 text-green-700 rounded-md border border-green-300">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === "rate-limited" && (
            <div className="px-4 py-2 bg-red-100 text-red-700 rounded-md border border-red-300">
              Too many requests. Please wait a moment before trying again.
            </div>
          )}
          {status === "error" && (
            <div className="px-4 py-2 bg-red-100 text-red-700 rounded-md border border-red-300">
              Something went wrong. Please try again later.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}