import type { Metadata } from "next";
import {
  Database,
  Brain,
  Zap,
  TrendingUp,
  ArrowRight,
  Shield,
  Clock,
  Lock,
  Server,
  Smartphone,
} from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import PageHero from "@/components/page-hero";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "How It Works - Riko AI",
  description:
    "Read → Interpret → Act → Expand. See how Riko turns your Tally data into next-best actions — payment reminders, MIS reports, and cash visibility.",
};

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Read",
    tagline: "Secure, read-only sync with your Tally Prime",
    description:
      "Install the lightweight Riko Connector on the machine running Tally. It establishes an encrypted link to Riko's cloud and pulls books, invoices, bills, ledgers, and party context — without ever writing back.",
    details: [
      { icon: Clock, label: "5-minute setup", text: "Download, install, authenticate. No IT team required." },
      { icon: Shield, label: "Read-only access", text: "Riko cannot create, edit, or delete entries in Tally." },
      { icon: Lock, label: "AES-256 encryption", text: "Data encrypted in transit and at rest. Indian servers only." },
    ],
  },
  {
    number: "02",
    icon: Brain,
    title: "Interpret",
    tagline: "AI detects what matters before you have to",
    description:
      "Riko's AI surfaces overdues, blocked cash, reporting gaps, and priority accounts automatically. Ask anything in plain English or Hindi — or let Riko tell you what needs your attention today.",
    details: [
      { icon: Brain, label: "Context-aware AI", text: "Follow-up questions keep context. Ask 'And last month?' naturally." },
      { icon: TrendingUp, label: "Priority detection", text: "Flags slow-moving inventory, overdue receivables, GST gaps." },
      { icon: Zap, label: "Instant answers", text: "Most questions answered in under 3 seconds." },
    ],
  },
  {
    number: "03",
    icon: Zap,
    title: "Act",
    tagline: "Riko doesn't just show you problems — it handles them",
    description:
      "Send payment reminders in bulk via WhatsApp and email. Schedule owner MIS reports. Push notes back to Tally. Nudge the right customers at the right time without lifting a finger.",
    details: [
      { icon: Smartphone, label: "WhatsApp delivery", text: "Batch reminders, summaries, and reports straight to chat." },
      { icon: Clock, label: "Scheduled runs", text: "Daily, weekly, or monthly automations you set once." },
      { icon: Zap, label: "Owner-ready tasks", text: "Riko prepares the next action. You approve or edit." },
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Expand",
    tagline: "Grow beyond receivables as your team scales",
    description:
      "Start with collections. Add seats. Connect more companies. Move into payables, MIS, working capital management, and broader finance operations — all in the same Riko workspace.",
    details: [
      { icon: TrendingUp, label: "Payables next", text: "Vendor bills, aging, and payment scheduling — built for Teams." },
      { icon: Database, label: "Multi-entity", text: "Combined views across 3+ companies with role-based access." },
      { icon: Shield, label: "Enterprise ready", text: "Custom AI training and dedicated infra when you need it." },
    ],
  },
];

const behindTheScenes = [
  { icon: Database, title: "Data sync", description: "Riko Connector syncs Tally to our encrypted cloud every few minutes." },
  { icon: Brain, title: "AI processing", description: "Your question is parsed by an NLP engine trained on Indian accounting." },
  { icon: Server, title: "Query execution", description: "Riko translates intent into precise queries against your synced data." },
  { icon: Zap, title: "Instant delivery", description: "Results formatted into charts, tables, or summaries — on your channel of choice." },
];

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title={<>Read. Interpret. <span className="text-[#16A34A]">Act.</span> Expand.</>}
        subtitle="Riko sits above Tally and turns raw ledger data into next-best actions — in four stages, all under one workspace."
      />

      {/* Steps */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-20 lg:space-y-28">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <ScrollAnimate variant={isEven ? "fadeLeft" : "fadeRight"}>
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#22C55E]/10 text-sm font-bold text-[#16A34A]">
                          {step.number}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
                          {step.title}
                        </span>
                      </div>
                      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
                        {step.tagline}
                      </h2>
                      <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>

                      <div className="mt-8 space-y-4">
                        {step.details.map((d) => (
                          <div key={d.label} className="flex items-start gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                              <d.icon className="h-4 w-4 text-[#16A34A]" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#0B1F12]">{d.label}</p>
                              <p className="text-sm text-slate-500">{d.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollAnimate>
                  </div>

                  <div className="flex-1">
                    <ScrollAnimate variant={isEven ? "fadeRight" : "fadeLeft"}>
                      <div className="rounded-2xl border border-slate-200 bg-[#F8FAF9] p-8 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.15)]">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-[#22C55E]" />
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                              Stage {step.number}
                            </p>
                          </div>
                          <p className="text-xs text-slate-400">Riko workspace</p>
                        </div>
                        <div className="mt-6 flex h-40 items-center justify-center rounded-xl bg-white">
                          <step.icon className="h-20 w-20 text-[#22C55E]" strokeWidth={1.2} />
                        </div>
                        <p className="mt-6 text-sm font-semibold text-[#0B1F12]">{step.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{step.tagline}</p>
                      </div>
                    </ScrollAnimate>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Behind the scenes */}
      <section className="bg-[#F8FAF9] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">Under the hood</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
                What happens when you ask Riko a question
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                From question to answer, all in under a few seconds.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {behindTheScenes.map((item, i) => (
              <ScrollAnimate key={item.title} variant="fadeUp" delay={i * 0.08}>
                <div className="relative rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="absolute -top-3 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E] text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#22C55E]/10">
                    <item.icon className="h-5 w-5 text-[#16A34A]" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-[#0B1F12]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <ScrollAnimate variant="fadeUp">
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
                {[
                  { label: "Your Tally", sub: "On-premise" },
                  { label: "Encrypted sync", sub: "AES-256" },
                  { label: "Riko cloud", sub: "Indian servers" },
                  { label: "AI engine", sub: "NLP processing" },
                  { label: "You", sub: "WhatsApp / Web" },
                ].map((node, i, arr) => (
                  <div key={node.label} className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-[#0B1F12]">{node.label}</p>
                      <p className="mt-0.5 text-xs text-slate-400">{node.sub}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#22C55E] sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
