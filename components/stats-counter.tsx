"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Clock, TrendingUp, Zap, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Clock, numericValue: 15, suffix: "+", label: "Hours", sublabel: "Saved Weekly" },
  { icon: TrendingUp, numericValue: 30, suffix: "%", label: "", sublabel: "Better Cash Flow" },
  { icon: Zap, numericValue: 87, suffix: "%", label: "", sublabel: "Faster Decisions" },
  { icon: ShieldCheck, numericValue: 99.9, suffix: "%", label: "", sublabel: "Data Accuracy" },
];

function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => {
    const num = value % 1 !== 0 ? v.toFixed(1) : Math.round(v).toString();
    return label ? `${num}${suffix} ${label}` : `${num}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <motion.span ref={ref} className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
      {display}
    </motion.span>
  );
}

const vp = { once: true, amount: 0.2 as const };

export default function StatsCounter() {
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
            Proven Results for Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            Join 500+ businesses already transforming how they work
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.sublabel}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E]/10">
                <stat.icon className="h-6 w-6 text-[#22C55E]" />
              </div>
              <div className="mb-2">
                <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} label={stat.label} />
              </div>
              <p className="text-sm font-medium text-slate-600">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
