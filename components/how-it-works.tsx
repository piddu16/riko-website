"use client";

import { motion } from "framer-motion";
import { Database, MessageSquare, Zap, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = { Database, MessageSquare, Zap };
const vp = { once: true, amount: 0.2 as const };

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            Get started in three simple steps. No technical skills required.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {siteConfig.steps.map((step, i) => {
            const Icon = iconMap[step.icon] || Database;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                className="relative rounded-xl border border-slate-200 bg-white p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#22C55E] text-xl font-bold text-white">
                  {step.number}
                </div>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#22C55E]/10">
                  <Icon className="h-6 w-6 text-[#22C55E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                {i < siteConfig.steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-full bg-slate-300 md:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
