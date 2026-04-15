"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  BarChart3,
  Zap,
  FileText,
  TrendingUp,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  BarChart3,
  Zap,
  FileText,
  TrendingUp,
  Shield,
};

const vp = { once: true, amount: 0.2 as const };

export default function FeaturesGrid() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
          >
            Everything You Need to Run Your Business Smarter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            Riko combines AI-powered analytics with deep Tally integration to
            give you a complete business command center.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || MessageSquare;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#22C55E]/10">
                  <Icon className="h-6 w-6 text-[#22C55E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
