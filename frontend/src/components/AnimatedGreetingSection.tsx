"use client";
import { motion } from "framer-motion";
import GreetingMessage from "@/components/GreetingMessage";

export default function AnimatedGreetingSection() {
  return (
    <section className="relative h-[calc(100vh-3.125rem)] bg-gray-100 flex items-center justify-center overflow-hidden">
      <motion.img
        src="/blob_background.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <GreetingMessage />
      </div>
    </section>
  );
}