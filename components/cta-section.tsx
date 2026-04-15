"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const trustPoints = ["14-day free trial", "No credit card required", "Setup in 5 minutes", "Cancel anytime"];
const vp = { once: true, amount: 0.2 as const };

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)" }}
    >
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Ready to Transform Your Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-white/90"
        >
          Join hundreds of Indian businesses already using Riko to make smarter, faster decisions with AI-powered insights from Tally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg bg-white/20 px-4 py-3 text-sm text-white placeholder-white/70 outline-none backdrop-blur-sm transition-colors focus:bg-white/30"
          />
          <button className="whitespace-nowrap rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#16A34A] transition-colors hover:bg-white/90">
            Start Free Trial &rarr;
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2 text-sm text-white/90">
              <CheckCircle className="h-4 w-4 text-white" />
              <span>{point}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-wrap justify-center gap-6"
        >
          <a href="#" className="text-sm font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80">
            Or try the live demo &rarr;
          </a>
          <a href="#" className="text-sm font-medium text-white underline underline-offset-4 transition-colors hover:text-white/80">
            Book a Demo &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
