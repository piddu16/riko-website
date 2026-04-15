"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  BarChart3,
  Brain,
  Clock,
  Send,
} from "lucide-react";

const bulletPoints = [
  {
    icon: MessageSquare,
    title: "Natural Language Queries",
    desc: "Ask in English, Hindi, or 7 regional languages",
  },
  {
    icon: BarChart3,
    title: "Real-time Insights",
    desc: "Instant answers pulled directly from your Tally data",
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    desc: "AI-powered forecasts for cash flow and revenue trends",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Your AI assistant never sleeps, always ready to help",
  },
];

const vp = { once: true, amount: 0.2 as const };

export default function ChatMockup() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-wider text-[#22C55E]"
          >
            Your AI Business Partner
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl"
          >
            Conversational Analytics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={vp}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-lg text-slate-600"
          >
            Chat with your business data like you&apos;re talking to a CFO
          </motion.p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: chat interface */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl">
              <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#22C55E]">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">Riko AI Assistant</p>
                  <p className="text-xs text-slate-500">Always ready to help</p>
                </div>
                <div className="ml-auto flex h-2 w-2 rounded-full bg-[#22C55E]" />
              </div>

              <div className="space-y-4 p-6">
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-br-md bg-[#22C55E] px-4 py-3 text-sm text-white">
                    What&apos;s my revenue this month?
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 text-sm text-[#0F172A]">
                    Your revenue for October 2025 is{" "}
                    <span className="font-semibold text-[#22C55E]">&#8377;24.9k</span>, up{" "}
                    <span className="font-semibold text-[#22C55E]">32%</span> from last month! 📈
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 px-6 py-4">
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2.5">
                  <span className="flex-1 text-sm text-slate-400">Ask me anything...</span>
                  <Send className="h-4 w-4 text-slate-400" />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -bottom-4 -right-4 rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-lg"
            >
              <p className="text-xs font-medium text-slate-500">Sales Trend</p>
              <p className="text-lg font-bold text-[#22C55E]">&uarr; 32%</p>
            </motion.div>
          </motion.div>

          {/* Right: bullet points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-8">
              {bulletPoints.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#22C55E]/10">
                    <item.icon className="h-5 w-5 text-[#22C55E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A]">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#22C55E]/10 px-4 py-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
              </span>
              <span className="text-sm font-semibold text-[#22C55E]">Active 24/7</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
