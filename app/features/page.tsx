import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  BarChart3,
  Zap,
  FileText,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Send,
} from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import PageHero from "@/components/page-hero";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Features - Riko AI",
  description:
    "Explore everything Riko AI can do: natural conversations, smart analytics, instant actions, GST reports, financial insights, and bank-grade security for Indian SMEs.",
};

const features = [
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    tagline: "Ask in English, Hindi, or 7+ regional languages",
    description:
      "Riko understands plain language — the way you actually talk about your business. No field names, no query syntax, no training. Ask on WhatsApp, on the web, or through voice notes.",
    bullets: [
      "English, Hindi, Tamil, Marathi, Gujarati, Bengali, Telugu, Kannada",
      "Context-aware follow-ups for deeper analysis",
      "Voice note support on WhatsApp",
      "Smart auto-complete based on your data",
    ],
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    tagline: "AI that predicts trends and flags risks before they hurt",
    description:
      "Riko doesn't just report what happened. It tells you what's likely to happen next. Trained on patterns across thousands of Indian businesses, Riko surfaces insights you'd never spot scrolling through Tally.",
    bullets: [
      "Predictive cash flow forecasting",
      "Anomaly detection for unusual transactions",
      "Customer payment behavior scoring",
      "Seasonal trend and demand forecasting",
    ],
  },
  {
    icon: Zap,
    title: "Instant Actions",
    tagline: "Automate payment reminders, reports, and follow-ups",
    description:
      "Riko doesn't just show you problems — it handles them. Auto payment reminders via WhatsApp when invoices go overdue. Scheduled reports to your inbox. Alerts when a customer crosses their credit limit.",
    bullets: [
      "WhatsApp payment reminders with templates",
      "Scheduled report delivery (email + WhatsApp)",
      "Credit limit breach alerts",
      "Auto follow-up sequences for overdue invoices",
    ],
  },
  {
    icon: FileText,
    title: "GST Reports",
    tagline: "One-click GSTR-1, GSTR-3B with auto reconciliation",
    description:
      "Generate GSTR-1 and GSTR-3B directly from Tally with a single click. Riko reconciles your purchase data with supplier GSTR-2A/2B filings — catching mismatches before they become tax notices.",
    bullets: [
      "One-click GSTR-1 and GSTR-3B generation",
      "Auto GSTR-2A/2B reconciliation",
      "ITC optimization suggestions",
      "Filing deadline reminders",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Insights",
    tagline: "Real-time P&L, cash flow, and profitability by product",
    description:
      "CFO-grade reporting without the CFO. Real-time P&L, cash flow, and balance sheet summaries that update as transactions flow in from Tally. Drill into profitability by product, customer, or region.",
    bullets: [
      "Real-time P&L, balance sheet, and cash flow",
      "Profitability by product, customer, region",
      "Receivables aging with collection priority",
      "Working capital cycle monitoring",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    tagline: "Bank-grade encryption. Indian servers. Zero data sharing.",
    description:
      "Your financial data is protected with AES-256 encryption. Hosted entirely on Indian servers. Read-only Tally access means Riko can never modify your books. SOC 2 Type II certified with annual third-party audits.",
    bullets: [
      "AES-256 encryption in transit and at rest",
      "100% Indian server infrastructure",
      "SOC 2 Type II certified",
      "Read-only Tally access, zero data sharing",
    ],
  },
];

// Small visual preview for each feature — keeps the Ramp-style clean product feel
function FeaturePreview({ index, feature }: { index: number; feature: typeof features[number] }) {
  // Natural Conversations — chat bubble
  if (index === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.2)]">
        <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E]">
            <MessageSquare className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-[#0B1F12]">Riko</span>
          <span className="ml-auto h-2 w-2 rounded-full bg-[#22C55E]" />
        </div>
        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-br-md bg-[#22C55E] px-4 py-2 text-sm text-white">Kitna profit hua October mein?</div>
          </div>
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-2 text-sm text-[#0B1F12]">
              October profit: <span className="font-semibold text-[#16A34A]">₹8.2L</span>. Up 18% from September. 🎉
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
          <span className="flex-1 text-xs text-slate-400">Ask in any language...</span>
          <Send className="h-3.5 w-3.5 text-slate-400" />
        </div>
      </div>
    );
  }
  // Smart Analytics — trend card
  if (index === 1) {
    const bars = [55, 72, 48, 85, 68, 90, 78];
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.2)]">
        <div className="mb-2 flex items-baseline justify-between">
          <p className="text-sm font-semibold text-[#0B1F12]">Next month forecast</p>
          <p className="text-xs font-medium text-[#16A34A]">+12% likely</p>
        </div>
        <p className="text-3xl font-semibold text-[#0B1F12]">₹32.4L</p>
        <div className="mt-6 flex items-end gap-2" style={{ height: 90 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-md"
              style={{
                height: `${h}%`,
                background: i === 6 ? "linear-gradient(to top, #16A34A, #22C55E)" : "#E2E8F0",
              }}
            />
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500">Green bar = predicted</p>
      </div>
    );
  }
  // Instant Actions — reminder notification
  if (index === 2) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.2)]">
        <div className="flex items-start gap-3 rounded-xl bg-[#E8F5EC] p-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#22C55E]">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#0B1F12]">Reminder sent to Kothari Traders</p>
            <p className="mt-1 text-xs text-slate-600">
              Invoice INV-2841 is 14 days overdue. ₹1.2L pending.
            </p>
            <p className="mt-2 text-xs font-medium text-[#16A34A]">✓ Delivered via WhatsApp · 2 min ago</p>
          </div>
        </div>
        <div className="mt-3 flex items-start gap-3 rounded-xl border border-slate-100 p-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100">
            <Zap className="h-4 w-4 text-slate-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#0B1F12]">Next: 3 more overdue</p>
            <p className="mt-1 text-xs text-slate-500">Auto-sending in 10 minutes.</p>
          </div>
        </div>
      </div>
    );
  }
  // GST Reports — report card
  if (index === 3) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.2)]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">GSTR-3B · October 2026</p>
            <p className="mt-1 text-lg font-semibold text-[#0B1F12]">Ready to file</p>
          </div>
          <div className="rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs font-semibold text-[#16A34A]">
            ✓ Reconciled
          </div>
        </div>
        <div className="space-y-2.5">
          {[
            ["Output tax", "₹4.82L"],
            ["Input tax credit", "₹3.41L"],
            ["Net liability", "₹1.41L"],
            ["Mismatches", "0"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0">
              <span className="text-sm text-slate-600">{k}</span>
              <span className="text-sm font-semibold text-[#0B1F12]">{v}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // Financial Insights — P&L card
  if (index === 4) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.2)]">
        <p className="text-sm font-semibold text-[#0B1F12]">Top 5 products by margin</p>
        <div className="mt-4 space-y-3">
          {[
            { name: "Cotton Saree · Premium", margin: 42, revenue: "₹12.8L" },
            { name: "Silk Blend · Designer", margin: 38, revenue: "₹9.4L" },
            { name: "Handloom · Basic", margin: 31, revenue: "₹7.1L" },
            { name: "Polyester Mix", margin: 24, revenue: "₹5.2L" },
            { name: "Wholesale Bulk", margin: 18, revenue: "₹14.6L" },
          ].map((p) => (
            <div key={p.name}>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-[#0B1F12]">{p.name}</span>
                <span className="text-slate-500">{p.revenue} · {p.margin}%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-gradient-to-r from-[#16A34A] to-[#22C55E]" style={{ width: `${p.margin * 2}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // Security — shield card
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.2)]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22C55E]/10">
          <Shield className="h-5 w-5 text-[#22C55E]" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0B1F12]">Security status</p>
          <p className="text-xs text-slate-500">Last audit · 3 days ago</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          ["AES-256", "Encryption"],
          ["SOC 2", "Type II"],
          ["Mumbai", "Data centre"],
          ["Read-only", "Tally access"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-xl bg-slate-50 p-3">
            <p className="text-sm font-semibold text-[#0B1F12]">{v}</p>
            <p className="mt-0.5 text-xs text-slate-500">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Features"
        title={<>Everything Riko can do.</>}
        subtitle="Six capabilities, one AI that knows your Tally data inside out. Built for Indian finance teams who want answers, not reports."
      />

      {/* Quick jump grid */}
      <section className="border-b border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <ScrollAnimate key={f.title} variant="fadeUp" delay={i * 0.05}>
                <Link
                  href={`#feature-${i}`}
                  className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#22C55E]/40 hover:bg-[#E8F5EC]/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#22C55E]/10">
                    <f.icon className="h-5 w-5 text-[#16A34A]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#0B1F12]">{f.title}</p>
                    <p className="mt-0.5 truncate text-xs text-slate-500">{f.tagline}</p>
                  </div>
                </Link>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed feature sections */}
      {features.map((feature, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={feature.title}
            id={`feature-${idx}`}
            className={`scroll-mt-24 py-20 lg:py-28 ${idx % 2 !== 0 ? "bg-[#F8FAF9]" : "bg-white"}`}
          >
            <div className="mx-auto max-w-6xl px-6">
              <div
                className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="flex-1">
                  <ScrollAnimate variant={isEven ? "fadeLeft" : "fadeRight"}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#22C55E]/10">
                        <feature.icon className="h-5 w-5 text-[#16A34A]" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
                        {String(idx + 1).padStart(2, "0")} · {feature.title}
                      </span>
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
                      {feature.tagline}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {feature.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </ScrollAnimate>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <ScrollAnimate variant={isEven ? "fadeRight" : "fadeLeft"}>
                    <FeaturePreview index={idx} feature={feature} />
                  </ScrollAnimate>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom navigation */}
      <section className="bg-white py-16 text-center">
        <ScrollAnimate variant="fadeUp">
          <p className="text-lg text-slate-600">See how it works, or jump straight to pricing.</p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#16A34A] hover:text-[#0B1F12]"
            >
              How it works <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#16A34A] hover:text-[#0B1F12]"
            >
              Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimate>
      </section>

      <CtaSection />
    </main>
  );
}
