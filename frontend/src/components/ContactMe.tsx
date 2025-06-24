"use client";
import { useState } from "react";

export default function ContactMe() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "rate-limited">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const res = await fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
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
    <>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Your Email</span>
          <input
            type="email"
            name="email"
            required
            className="border rounded px-3 py-2"
            placeholder="your_name@email.com"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Message</span>
          <textarea
            name="message"
            required
            className="border rounded px-3 py-2"
            placeholder="What can I do for you?"
            rows={5}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>
        {status === "sent" && <p className="text-green-600">Message sent!</p>}
        {status === "rate-limited" && <p className="text-red-600">Rate limited. Please wait.</p>}
        {status === "error" && <p className="text-red-600">Something went wrong.</p>}
      </form>
    </>
  );
}