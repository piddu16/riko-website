"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  BarChart3,
  Zap,
  FileText,
  Send,
  CheckCircle,
  Bell,
  TrendingUp,
} from "lucide-react";

const tabs = [
  {
    id: "chat",
    label: "AI Chat",
    icon: MessageSquare,
    heading: "Ask anything. In any language.",
    description: "Type a question in Hindi, English, or WhatsApp voice note. Riko answers from your live Tally data in seconds.",
    mockup: "chat",
  },
  {
    id: "outstandings",
    label: "Outstandings",
    icon: BarChart3,
    heading: "See who owes you. Prioritised.",
    description: "Receivables by party, ageing buckets, overdue flags, and collection priority — all synced from Tally in real time.",
    mockup: "outstandings",
  },
  {
    id: "reminders",
    label: "Reminders",
    icon: Zap,
    heading: "Chase payments on autopilot.",
    description: "Batch WhatsApp and email reminders. Customisable templates. Auto follow-up sequences. You set rules, Riko executes.",
    mockup: "reminders",
  },
  {
    id: "reports",
    label: "MIS Reports",
    icon: FileText,
    heading: "Investor-ready reports. One click.",
    description: "Branded P&L, cash flow, balance sheet, and GST summaries. Scheduled daily/weekly/monthly delivery to your inbox.",
    mockup: "reports",
  },
];

const vp = { once: true, amount: 0.2 as const };

// Mockup components for each tab
function ChatMockup() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E]">
          <MessageSquare className="h-3.5 w-3.5 text-white" />
        </div>
        <span className="text-xs font-semibold text-[#0B1F12]">Riko AI</span>
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
      </div>
      <div className="space-y-2.5">
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-br-sm bg-[#22C55E] px-3.5 py-2 text-xs text-white">
            Who owes me more than 30 days?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-slate-100 px-3.5 py-2 text-xs text-[#0B1F12]">
            3 parties have overdues beyond 30 days totalling <span className="font-semibold text-[#16A34A]">₹12.4L</span>:
            <div className="mt-2 space-y-1 text-[11px] text-slate-600">
              <div>1. Kothari Traders — ₹5.2L (42 days)</div>
              <div>2. Sai Enterprises — ₹4.1L (38 days)</div>
              <div>3. Patel Distributors — ₹3.1L (31 days)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
        <span className="flex-1 text-[11px] text-slate-400">Ask in Hindi or English...</span>
        <Send className="h-3 w-3 text-slate-400" />
      </div>
    </div>
  );
}

function OutstandingsMockup() {
  const parties = [
    { name: "Kothari Traders", amount: "₹5.2L", days: 42, risk: "high" },
    { name: "Sai Enterprises", amount: "₹4.1L", days: 38, risk: "high" },
    { name: "Patel Distributors", amount: "₹3.1L", days: 31, risk: "medium" },
    { name: "Sharma & Sons", amount: "₹2.8L", days: 18, risk: "low" },
    { name: "Gupta Industries", amount: "₹1.9L", days: 7, risk: "low" },
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-[#0B1F12]">Receivables · ₹17.1L total</span>
        <span className="rounded-full bg-[#22C55E]/10 px-2 py-0.5 text-[10px] font-medium text-[#16A34A]">Live</span>
      </div>
      <div className="space-y-1.5">
        {parties.map((p) => (
          <div key={p.name} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
            <div className="flex items-center gap-2">
              <div className={`h-1.5 w-1.5 rounded-full ${p.risk === "high" ? "bg-red-500" : p.risk === "medium" ? "bg-amber-500" : "bg-[#22C55E]"}`} />
              <span className="text-xs font-medium text-[#0B1F12]">{p.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-slate-500">{p.days}d</span>
              <span className="text-xs font-semibold text-[#0B1F12]">{p.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RemindersMockup() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-[#0B1F12]">Auto-reminders · Today</span>
        <span className="text-[10px] text-slate-500">3 sent · 2 pending</span>
      </div>
      <div className="space-y-2">
        {[
          { name: "Kothari Traders", status: "Delivered", channel: "WhatsApp", time: "9:00 AM" },
          { name: "Sai Enterprises", status: "Delivered", channel: "Email", time: "9:05 AM" },
          { name: "Patel Distributors", status: "Delivered", channel: "WhatsApp", time: "9:10 AM" },
          { name: "Sharma & Sons", status: "Scheduled", channel: "WhatsApp", time: "2:00 PM" },
          { name: "Gupta Industries", status: "Scheduled", channel: "Email", time: "2:00 PM" },
        ].map((r) => (
          <div key={r.name} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
            <div className="flex items-center gap-2">
              <Bell className={`h-3 w-3 ${r.status === "Delivered" ? "text-[#22C55E]" : "text-slate-400"}`} />
              <div>
                <span className="text-xs font-medium text-[#0B1F12]">{r.name}</span>
                <span className="ml-2 text-[10px] text-slate-500">{r.channel}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500">{r.time}</span>
              <span className={`text-[10px] font-medium ${r.status === "Delivered" ? "text-[#16A34A]" : "text-slate-500"}`}>
                {r.status === "Delivered" ? "✓" : "◷"} {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportsMockup() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-[#0B1F12]">MIS · October 2026</span>
        <span className="rounded-full bg-[#22C55E]/10 px-2 py-0.5 text-[10px] font-medium text-[#16A34A]">Ready</span>
      </div>
      <div className="space-y-3">
        {[
          { label: "Revenue", value: "₹24.9L", trend: "+32%", up: true },
          { label: "COGS", value: "₹16.7L", trend: "+28%", up: true },
          { label: "Gross Profit", value: "₹8.2L", trend: "+18%", up: true },
          { label: "Expenses", value: "₹3.1L", trend: "-5%", up: false },
          { label: "Net Profit", value: "₹5.1L", trend: "+24%", up: true },
        ].map((r) => (
          <div key={r.label} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0">
            <span className="text-xs text-slate-600">{r.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#0B1F12]">{r.value}</span>
              <span className={`flex items-center text-[10px] font-medium ${r.up ? "text-[#16A34A]" : "text-red-500"}`}>
                <TrendingUp className={`mr-0.5 h-2.5 w-2.5 ${!r.up ? "rotate-180" : ""}`} />
                {r.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <button className="flex-1 rounded-lg bg-[#22C55E] py-1.5 text-[10px] font-semibold text-white">Download PDF</button>
        <button className="flex-1 rounded-lg bg-slate-100 py-1.5 text-[10px] font-semibold text-slate-700">Send to email</button>
      </div>
    </div>
  );
}

const mockups: Record<string, () => React.JSX.Element> = {
  chat: ChatMockup,
  outstandings: OutstandingsMockup,
  reminders: RemindersMockup,
  reports: ReportsMockup,
};

export default function ProductTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  const Mockup = mockups[tab.mockup];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">Product</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
            Built around daily operator behaviour
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Desktop + mobile. Four modules your finance team will actually use every day.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-10 flex w-fit flex-wrap justify-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1"
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                active === i
                  ? "bg-[#0B1F12] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#0B1F12]"
              }`}
            >
              <t.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          {/* Text side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#22C55E]/10">
                  <tab.icon className="h-5 w-5 text-[#16A34A]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">{tab.label}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#0B1F12] sm:text-3xl">
                {tab.heading}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{tab.description}</p>
              <div className="mt-6 flex items-center gap-4">
                <CheckCircle className="h-4 w-4 text-[#22C55E]" />
                <span className="text-sm text-slate-700">Synced from Tally in real time</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mockup side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id + "-mockup"}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-slate-200 bg-[#F8FAF9] p-5 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.15)]"
            >
              <Mockup />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
