"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const vp = { once: true, amount: 0.3 as const };

export default function Testimonial() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-[#0B1F12] p-10 text-white sm:p-14"
        >
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#22C55E]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#22C55E]/10 blur-3xl" />

          <div className="relative">
            <Quote className="h-10 w-10 text-[#22C55E]" />

            <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-white sm:text-3xl sm:leading-relaxed">
              Riko replaced the four hours I spent every week pulling reports
              from Tally. Now I ask a question on WhatsApp and get the answer
              before my chai goes cold.
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              {/* Avatar placeholder — initials in a circle */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-lg font-semibold text-[#0B1F12]">
                RP
              </div>
              <div>
                <p className="text-base font-semibold text-white">Rajesh Patel</p>
                <p className="text-sm text-slate-400">
                  CFO, Patel Textiles · Surat · ₹180Cr revenue
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
