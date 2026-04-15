"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const vp = { once: true, amount: 0.2 as const };

const outcomes = [
  {
    stat: "75%",
    statLabel: "reduction in month-end close time",
    company: "Patel Textiles",
    sector: "Manufacturing · Surat",
    accent: "from-[#22C55E] to-[#16A34A]",
  },
  {
    stat: "₹42L",
    statLabel: "recovered in overdue receivables",
    company: "Mumbai Distributors",
    sector: "FMCG · Mumbai",
    accent: "from-[#16A34A] to-[#065F46]",
  },
  {
    stat: "12 hrs",
    statLabel: "saved per week on Tally reporting",
    company: "Kothari Traders",
    sector: "Retail · Ahmedabad",
    accent: "from-[#22C55E] to-[#065F46]",
  },
];

export default function Outcomes() {
  return (
    <section className="bg-[#F8FAF9] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
            Customer outcomes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
            Real results from real Indian businesses
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See how finance teams are using Riko to save time, recover money,
            and sleep better at night.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${o.accent} p-8 text-white shadow-lg`}
            >
              <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white/60 transition group-hover:text-white" />

              <p className="text-6xl font-semibold tracking-tight">{o.stat}</p>
              <p className="mt-3 text-base leading-relaxed text-white/90">
                {o.statLabel}
              </p>

              <div className="mt-8 border-t border-white/20 pt-5">
                <p className="text-sm font-semibold text-white">{o.company}</p>
                <p className="text-xs text-white/70">{o.sector}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
