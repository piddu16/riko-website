"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const bulletPoints = [
  { text: "Customizable widgets for every metric" },
  { text: "Automated data refresh from Tally" },
  { text: "Mobile-responsive design" },
  { text: "Export reports in one click" },
];

const barHeights = [55, 75, 45, 85, 65, 90, 70];
const vp = { once: true, amount: 0.2 as const };

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (suffix === "k") return `₹${v.toFixed(1)}k`;
    return `${Math.round(v)}`;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function DashboardMockup() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-wider text-[#22C55E]"
          >
            See Your Business at a Glance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
          >
            Smart Dashboard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            Beautiful, intuitive dashboards that show exactly what matters
          </motion.p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {bulletPoints.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#22C55E]/10">
                    <CheckCircle className="h-5 w-5 text-[#22C55E]" />
                  </div>
                  <div className="flex items-center">
                    <p className="font-medium text-[#0F172A]">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#0F172A]">Business Overview</h3>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
                  </span>
                  <span className="text-xs font-medium text-[#22C55E]">Live</span>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Revenue</p>
                  <p className="mt-1 text-2xl font-bold text-[#0F172A]">
                    <AnimatedNumber value={24.9} suffix="k" />
                  </p>
                  <span className="mt-1 inline-block text-xs font-medium text-[#22C55E]">+32%</span>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Profit</p>
                  <p className="mt-1 text-2xl font-bold text-[#0F172A]">
                    <AnimatedNumber value={8.2} suffix="k" />
                  </p>
                  <span className="mt-1 inline-block text-xs font-medium text-[#22C55E]">+18%</span>
                </div>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <p className="mb-3 text-xs font-medium text-slate-500">Monthly Trend</p>
                <div className="flex items-end gap-2" style={{ height: 100 }}>
                  {barHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-md"
                      style={{ background: "linear-gradient(to top, #16A34A, #22C55E)" }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -left-4 top-6 rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-lg"
            >
              <p className="text-xs text-slate-500">GST Status</p>
              <p className="text-lg font-bold text-[#22C55E]">100%</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -bottom-3 -right-3 rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-lg"
            >
              <p className="text-xs text-slate-500">Updates</p>
              <p className="text-sm font-bold text-[#22C55E]">Real-time</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
