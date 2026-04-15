"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const barHeights = [40, 65, 50, 80, 60, 90, 75];

// Trusted-by companies (placeholder for now — swap with real logos when available)
const trustedBy = ["Zoho", "Bajaj", "Infosys", "Flipkart", "Paytm", "Razorpay"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#E8F5EC]">
      {/* Soft gradient haze */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 text-center lg:pt-32">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-[#166534]"
        >
          Riko Intelligence · For Indian SMEs
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#0B1F12] sm:text-6xl lg:text-7xl"
        >
          Your books, but <span className="text-[#16A34A]">they talk back.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl"
        >
          Ask Riko anything about your Tally data — in Hindi, English, or
          WhatsApp voice notes. Cash flow, GST, receivables, overdue invoices.
          Answers before your chai goes cold.
        </motion.p>

        {/* CTA row: email + button */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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
            Get started for free <ArrowRight className="h-4 w-4" />
          </button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-xs text-slate-500"
        >
          Free forever. No credit card. Setup in 5 minutes.
        </motion.p>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
            Trusted by finance teams at 500+ Indian businesses
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-slate-400 grayscale transition hover:text-slate-600"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Dashboard preview */}
      <div className="relative mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.25)] sm:p-8"
        >
          {/* Chrome bar */}
          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="ml-3 text-xs font-medium text-slate-500">Riko · Business Overview</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs font-medium text-[#16A34A]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
              </span>
              Live · Synced with Tally
            </div>
          </div>

          {/* Stat cards */}
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Revenue (Oct)", value: "₹24.9L", change: "+32%" },
              { label: "Profit margin", value: "18.4%", change: "+4.2%" },
              { label: "GST status", value: "Filed", change: "On time" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-slate-50 p-4 text-left">
                <p className="text-xs font-medium text-slate-500">{s.label}</p>
                <p className="mt-1 text-2xl font-semibold text-[#0B1F12]">{s.value}</p>
                <p className="mt-0.5 text-xs font-medium text-[#16A34A]">{s.change}</p>
              </div>
            ))}
          </div>

          {/* Bar chart + caption */}
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
                  style={{ background: "linear-gradient(to top, #16A34A, #22C55E)" }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.08, ease: "easeOut" }}
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
