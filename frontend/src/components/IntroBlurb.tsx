"use client"
import { motion } from "framer-motion";

export default function IntroBlurb() {
  return (
    <motion.div
      className="w-full h-full flex flex-col mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full h-full flex flex-col mx-auto">
        <h1 className="text-2xl font-bold mb-3">Let me introduce myself...</h1>
        <p className="text-xl text-slate-700 leading-relaxed mb-4">
          I was born and raised in Toronto, Canada, where my passion for
          technology began at a young age. Whether it was playing with tech or
          spending hours gaming with friends, I was always drawn to exploring
          complex systems. That same drive led me into software development,
          where I get to use my problem-solving skills and creativity to tackle
          technical challenges. Professionally, I work across the stack, but I
          also love drawing up new ideas for the games I mod in my spare time.
          When creating projects, I always strive to use my time to develop
          software that others can use and enjoy.
        </p>
        <p className="text-xl text-slate-700 leading-relaxed mb-6">
          My approach to building is simple: I create things I&apos;d want to
          use myself. That mindset has given me the chance to give back to the
          online communities that have allowed me to experience all that
          technology has to offer. If you&apos;re interested, you can see some
          of what I&apos;ve built below! Currently, I work heavily with
          TypeScript, Java, and Python, bringing ideas to life through code and
          turning concepts into real, usable products. If you&apos;ve got a cool
          idea or just want to talk tech, feel free to reach out!
        </p>

        <p className="text-lg italic">
          TLDR: I played games, learned to code, and now I&apos;m a tech guy.
        </p>
      </div>
    </motion.div>
  );
}
