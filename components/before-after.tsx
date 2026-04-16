"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const transformations = [
  {
    before: "₹45L stuck in receivables",
    after: "Riko chases it automatically",
  },
  {
    before: "4 hours pulling Tally reports",
    after: "Ask a question, get the answer",
  },
  {
    before: "GST filing panic every month",
    after: "One-click GSTR-3B, on time",
  },
];

const vp = { once: true, amount: 0.3 as const };

export default function BeforeAfter() {
  return (
    <section className="bg-[#0B1F12] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-[#22C55E]"
        >
          Before &amp; after Riko
        </motion.p>

        <div className="grid gap-4 md:grid-cols-3">
          {transformations.map((t, i) => (
            <motion.div
              key={t.before}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-sm text-red-400 line-through decoration-red-400/40">
                {t.before}
              </p>
              <div className="my-3 flex items-center gap-2">
                <ArrowRight className="h-3.5 w-3.5 text-[#22C55E]" />
                <div className="h-px flex-1 bg-gradient-to-r from-[#22C55E]/40 to-transparent" />
              </div>
              <p className="text-base font-semibold text-white">
                {t.after}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
