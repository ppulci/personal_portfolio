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

    const res = await fetch("http://localhost:8080/api/contact", { // TODO: ADD BACKEND
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
    <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center text-gray-800">
        Reach <span className="text-peter-yellow">Out</span>
      </h2>
      <p className="text-gray-600 text-center mb-10 max-w-xl sm:max-w-2xl text-sm sm:text-base">
        Interested in what I&apos;m building? Let&apos;s connect and see how we can collaborate.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-lg sm:max-w-2xl flex flex-col gap-6">
        {/* Name + Email */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col">
            <label htmlFor="name" className="mb-2 text-left font-medium text-gray-700 text-sm sm:text-base">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              className="border-2 border-gray-300 rounded-md px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-peter-yellow focus:outline-none transition-colors text-sm sm:text-base"
              placeholder="Peter Parker"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label htmlFor="email" className="mb-2 text-left font-medium text-gray-700 text-sm sm:text-base">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="border-2 border-gray-300 rounded-md px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-peter-yellow focus:outline-none transition-colors text-sm sm:text-base"
              placeholder="name@example.com"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-left font-medium text-gray-700 text-sm sm:text-base">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="border-2 border-gray-300 rounded-md px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-peter-yellow focus:outline-none transition-colors resize-none text-sm sm:text-base"
            placeholder="What can I do for you?"
            rows={5}
          />
        </div>

        {/* Send Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-peter-yellow hover:bg-yellow-500 text-gray-800 font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* Status Messages */}
        <div className="flex justify-center mt-4">
          {status === "sent" && (
            <div className="px-4 py-2 bg-green-100 text-green-700 rounded-md border border-green-300 text-sm sm:text-base">
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}
          {status === "rate-limited" && (
            <div className="px-4 py-2 bg-red-100 text-red-700 rounded-md border border-red-300 text-sm sm:text-base">
              Too many requests. Please wait a moment before trying again.
            </div>
          )}
          {status === "error" && (
            <div className="px-4 py-2 bg-red-100 text-red-700 rounded-md border border-red-300 text-sm sm:text-base">
              Something went wrong. Please try again later.
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
