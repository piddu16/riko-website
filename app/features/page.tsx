import type { Metadata } from "next";
import {
  MessageSquare,
  BarChart3,
  Zap,
  FileText,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import CtaSection from "@/components/cta-section";
import Link from "next/link";

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
      "Riko understands your questions in plain language. Ask about outstanding payments in Hindi, request a sales report in English, or check your GST status in Tamil. No training needed, no learning curve — if you can send a WhatsApp message, you can use Riko.",
    bullets: [
      "Supports English, Hindi, Tamil, Marathi, Gujarati, Bengali, Telugu, and Kannada",
      "Context-aware follow-up questions for deeper analysis",
      "Smart auto-complete suggestions based on your data",
      "Voice message support coming soon via WhatsApp",
    ],
    stat: "8+",
    statLabel: "Languages supported",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    tagline: "AI predicts trends, spots risks, and recommends actions",
    description:
      "Riko doesn't just report what happened — it tells you what's likely to happen next. Identify slow-moving inventory before it becomes dead stock. Spot customers whose payment patterns are deteriorating. Every insight comes with actionable recommendations.",
    bullets: [
      "Predictive cash flow forecasting with 90%+ accuracy",
      "Automatic anomaly detection for unusual transactions",
      "Customer payment behavior analysis and risk scoring",
      "Seasonal trend identification and demand forecasting",
    ],
    stat: "90%+",
    statLabel: "Forecast accuracy",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Zap,
    title: "Instant Actions",
    tagline: "Automate payment reminders, reports, and follow-ups",
    description:
      "Set up automatic payment reminders via WhatsApp when invoices are overdue. Schedule daily, weekly, or monthly reports to your inbox. Configure smart triggers — when a customer crosses their credit limit, Riko alerts you instantly.",
    bullets: [
      "WhatsApp payment reminders with customizable templates",
      "Scheduled report delivery via email and WhatsApp",
      "Credit limit breach alerts for customers",
      "Auto follow-up sequences for overdue invoices",
    ],
    stat: "15+",
    statLabel: "Hours saved weekly",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: FileText,
    title: "GST Reports",
    tagline: "One-click GSTR-1, GSTR-3B with auto reconciliation",
    description:
      "Generate GSTR-1 and GSTR-3B reports directly from your Tally data with a single click. Riko automatically reconciles your purchase data with supplier GSTR-2A/2B filings, highlighting mismatches before they become tax department notices.",
    bullets: [
      "One-click GSTR-1 and GSTR-3B generation from Tally data",
      "Automatic GSTR-2A/2B reconciliation with mismatch highlighting",
      "ITC (Input Tax Credit) optimization suggestions",
      "Filing deadline reminders and compliance status tracking",
    ],
    stat: "100%",
    statLabel: "GST compliance",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Financial Insights",
    tagline: "Real-time P&L, cash flow, receivables, and profitability",
    description:
      "Get a CFO-grade view of your business without hiring a CFO. Real-time profit and loss statements, cash flow analyses, and balance sheet summaries that update automatically. Drill down into profitability by product, customer, or region.",
    bullets: [
      "Real-time P&L, balance sheet, and cash flow statements",
      "Profitability analysis by product, customer, and region",
      "Receivables and payables aging with collection priority",
      "Working capital cycle monitoring and optimization tips",
    ],
    stat: "30%",
    statLabel: "Better cash flow",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    tagline: "Bank-grade encryption, Indian servers, zero data sharing",
    description:
      "Your financial data is protected with AES-256 encryption. All infrastructure is hosted on Indian servers. Riko accesses Tally through read-only connections — it can never modify your accounting records. SOC 2 Type II certified with regular audits.",
    bullets: [
      "AES-256 encryption for data in transit and at rest",
      "100% Indian server infrastructure for data residency",
      "SOC 2 Type II certified with annual third-party audits",
      "Read-only Tally access with zero data sharing policy",
    ],
    stat: "99.9%",
    statLabel: "Uptime guarantee",
    color: "from-rose-500 to-red-600",
  },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F172A] py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <ScrollAnimate variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#22C55E]">
              Features
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Everything Riko Can Do
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              From natural language queries to automated GST compliance, Riko gives
              Indian SMEs the financial intelligence they need to grow.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={feature.title}
            className={`py-20 sm:py-24 ${isEven ? "bg-white" : "bg-slate-50"}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div
                className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text side */}
                <div className="flex-1">
                  <ScrollAnimate variant={isEven ? "fadeLeft" : "fadeRight"}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#22C55E]/10">
                        <feature.icon className="h-5 w-5 text-[#22C55E]" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#22C55E]">
                        Feature {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                      {feature.title}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-slate-500">
                      {feature.tagline}
                    </p>
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

                {/* Visual side - stat card */}
                <div className="flex-1">
                  <ScrollAnimate variant={isEven ? "fadeRight" : "fadeLeft"}>
                    <div className={`relative rounded-2xl bg-gradient-to-br ${feature.color} p-8 text-white shadow-xl sm:p-10`}>
                      <div className="absolute right-6 top-6 opacity-20">
                        <feature.icon className="h-24 w-24" strokeWidth={1} />
                      </div>
                      <div className="relative">
                        <p className="text-6xl font-bold sm:text-7xl">{feature.stat}</p>
                        <p className="mt-2 text-lg font-medium text-white/80">{feature.statLabel}</p>
                        <div className="mt-8 rounded-xl bg-white/20 p-5 backdrop-blur-sm">
                          <div className="flex items-center gap-3">
                            <feature.icon className="h-6 w-6" />
                            <div>
                              <p className="text-sm font-semibold">{feature.title}</p>
                              <p className="text-xs text-white/70">Powered by Riko AI</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA link */}
      <section className="bg-white py-16 text-center">
        <ScrollAnimate variant="fadeUp">
          <p className="text-lg text-slate-600">Ready to see Riko in action?</p>
          <Link
            href="/pricing"
            className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-[#22C55E] hover:text-[#16A34A]"
          >
            View Pricing <ArrowRight className="h-5 w-5" />
          </Link>
        </ScrollAnimate>
      </section>

      <CtaSection />
    </main>
  );
}
