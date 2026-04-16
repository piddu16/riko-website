"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const barHeights = [40, 65, 50, 80, 60, 90, 75];

// Words that cycle in the headline
const cyclingPhrases = [
  "talk back.",
  "chase dues.",
  "file GST.",
  "spot risks.",
  "send nudges.",
  "save hours.",
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % cyclingPhrases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#E8F5EC]">
      {/* Soft gradient haze */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 text-center lg:pt-36">
        {/* Eyebrow — stagger 1 */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm font-medium text-[#166534]"
        >
          Riko Intelligence · The AI operating layer above Tally
        </motion.p>

        {/* Headline with cycling word — stagger 2 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-4xl text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-[#0B1F12] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Your books, but they{" "}
          <span className="relative inline-block overflow-hidden whitespace-nowrap align-bottom text-[#16A34A]" style={{ minWidth: "5ch" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={cyclingPhrases[currentPhrase]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {cyclingPhrases[currentPhrase]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subhead — stagger 3 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl"
        >
          Riko sits above Tally and turns your ledgers, invoices, and
          ageing into next-best actions — in Hindi, English, or WhatsApp
          voice notes.
        </motion.p>

        {/* CTA row — stagger 4 */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your work email"
            className="flex-1 rounded-full border border-slate-300 bg-white px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-500 shadow-sm outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B1F12] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16A34A]"
          >
            Get started free <ArrowRight className="h-4 w-4" />
          </button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-4 text-xs text-slate-500"
        >
          Free 14-day trial. No credit card. Setup in 5 minutes.
        </motion.p>

        {/* Social proof — stagger 5 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex items-center justify-center gap-2"
        >
          <div className="flex -space-x-2">
            {["#22C55E", "#16A34A", "#065F46", "#22C55E"].map((c, i) => (
              <div
                key={i}
                className="h-7 w-7 rounded-full border-2 border-[#E8F5EC]"
                style={{ backgroundColor: c, opacity: 0.85 - i * 0.1 }}
              />
            ))}
          </div>
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-[#0B1F12]">500+ finance teams</span> across India run on Riko
          </p>
        </motion.div>
      </div>

      {/* Dashboard product mockup — scales in like Ramp */}
      <div className="relative mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-20px_rgba(16,185,129,0.3)] sm:p-8"
        >
          {/* Chrome bar */}
          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="ml-3 text-xs font-medium text-slate-500">
                Riko · Business Overview
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs font-medium text-[#16A34A]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
              </span>
              Live · Synced with Tally
            </div>
          </div>

          {/* Stat cards — stagger in */}
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Revenue (Oct)", value: "₹24.9L", change: "+32%", delay: 1.3 },
              { label: "Profit margin", value: "18.4%", change: "+4.2%", delay: 1.4 },
              { label: "GST status", value: "Filed", change: "On time", delay: 1.5 },
            ].map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: s.delay }}
                className="rounded-xl bg-slate-50 p-4 text-left"
              >
                <p className="text-xs font-medium text-slate-500">{s.label}</p>
                <p className="mt-1 text-2xl font-semibold text-[#0B1F12]">{s.value}</p>
                <p className="mt-0.5 text-xs font-medium text-[#16A34A]">{s.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Bar chart with stagger */}
          <div className="rounded-xl bg-slate-50 p-5 text-left">
            <div className="mb-4 flex items-baseline justify-between">
              <p className="text-sm font-semibold text-[#0B1F12]">Monthly revenue</p>
              <p className="text-xs text-slate-500">Last 7 months</p>
            </div>
            <div className="flex items-end gap-3" style={{ height: 120 }}>
              {barHeights.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-md"
                  style={{
                    background: "linear-gradient(to top, #16A34A, #22C55E)",
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{
                    duration: 0.5,
                    delay: 1.6 + i * 0.08,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between text-[10px] text-slate-500">
              {["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
