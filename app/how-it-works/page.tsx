import type { Metadata } from "next";
import {
  Database,
  MessageSquare,
  Zap,
  ArrowRight,
  Shield,
  Clock,
  Smartphone,
  Globe,
  Server,
  Brain,
  Lock,
  CheckCircle,
} from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "How It Works - Riko AI",
  description:
    "Get started with Riko AI in 3 simple steps: connect your Tally Prime, ask questions in plain language, and get instant financial insights via WhatsApp.",
};

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Connect Tally",
    tagline: "Secure, one-click setup in under 5 minutes",
    description:
      "Install the lightweight Riko Connector on the machine running Tally Prime. The connector establishes a secure, encrypted link between your Tally data and Riko's cloud. It uses read-only access, meaning Riko can never modify your accounting records.",
    details: [
      {
        icon: Clock,
        label: "5-minute setup",
        text: "Download, install, and authenticate. No IT team needed.",
      },
      {
        icon: Shield,
        label: "Read-only access",
        text: "Riko only reads data. It cannot create, edit, or delete entries in Tally.",
      },
      {
        icon: Lock,
        label: "Encrypted connection",
        text: "All data transfers use AES-256 encryption over HTTPS.",
      },
    ],
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Ask Riko Anything",
    tagline: "Type your question in any language you are comfortable with",
    description:
      "Open WhatsApp or the Riko dashboard and ask your business question in plain English, Hindi, or any of 7+ supported Indian languages. Riko understands context, so you can ask follow-up questions naturally.",
    details: [
      {
        icon: Globe,
        label: "Multilingual",
        text: "English, Hindi, Tamil, Marathi, Gujarati, Bengali, Telugu, Kannada.",
      },
      {
        icon: MessageSquare,
        label: "Example questions",
        text: "\"What's my cash position?\" \"Who owes me more than 30 days?\" \"Kitna GST bharna hai?\"",
      },
      {
        icon: Brain,
        label: "Context-aware",
        text: "Ask follow-ups like \"And last month?\" and Riko remembers the context.",
      },
    ],
  },
  {
    number: "03",
    icon: Zap,
    title: "Get Answers Instantly",
    tagline: "Reports on WhatsApp, dashboards, and email, wherever you prefer",
    description:
      "Riko delivers clear, formatted answers in seconds. View charts on the dashboard, receive PDF reports via email, or get quick summaries right in WhatsApp. Set up automated reports to arrive daily or weekly without lifting a finger.",
    details: [
      {
        icon: Smartphone,
        label: "WhatsApp delivery",
        text: "Get answers, charts, and PDF reports right in your WhatsApp chat.",
      },
      {
        icon: Zap,
        label: "Real-time dashboards",
        text: "Interactive charts and KPIs that update as Tally data changes.",
      },
      {
        icon: Clock,
        label: "Scheduled reports",
        text: "Automated daily, weekly, or monthly reports via email or WhatsApp.",
      },
    ],
  },
];

const behindTheScenes = [
  {
    icon: Database,
    title: "Data Sync",
    description: "Riko Connector securely syncs your Tally data to our encrypted cloud every few minutes.",
  },
  {
    icon: Brain,
    title: "AI Processing",
    description: "Your question is analyzed by our NLP engine that understands accounting terminology in multiple languages.",
  },
  {
    icon: Server,
    title: "Query Execution",
    description: "Riko translates your question into precise database queries against your synced financial data.",
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Results are formatted into clear charts, tables, or summaries and delivered to your preferred channel.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              How It Works
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get Started in 3 Simple Steps
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              No technical knowledge required. If you can use WhatsApp, you can use
              Riko. Connect your Tally data and start getting answers in minutes.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <ScrollAnimate variant={isEven ? "fadeLeft" : "fadeRight"}>
                      <div className="flex items-center gap-4">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl font-bold text-green-700">
                          {step.number}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-green-200 to-transparent" />
                      </div>
                      <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        {step.title}
                      </h2>
                      <p className="mt-2 text-lg font-medium text-green-600">{step.tagline}</p>
                      <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>

                      <div className="mt-8 space-y-5">
                        {step.details.map((d) => (
                          <div key={d.label} className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                              <d.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">{d.label}</p>
                              <p className="text-sm text-slate-500">{d.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollAnimate>
                  </div>

                  {/* Illustration */}
                  <div className="flex-1">
                    <ScrollAnimate variant={isEven ? "fadeRight" : "fadeLeft"}>
                      <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 ring-1 ring-slate-200/50">
                        <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-10">
                          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-lg">
                            <step.icon className="h-12 w-12 text-green-600" />
                          </div>
                          <p className="text-center text-lg font-semibold text-slate-700">
                            Step {step.number}
                          </p>
                          <p className="text-center text-sm text-slate-500">{step.tagline}</p>
                        </div>
                      </div>
                    </ScrollAnimate>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connection flow */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              {["Connect Tally", "Ask a Question", "Get Insights"].map((label, i) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex items-center gap-2 rounded-full bg-green-100 px-5 py-2.5 text-sm font-semibold text-green-700">
                    <CheckCircle className="h-4 w-4" />
                    {label}
                  </div>
                  {i < 2 && (
                    <ArrowRight className="hidden h-5 w-5 text-slate-400 sm:block" />
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Behind the scenes */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Under the Hood
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                What Happens Behind the Scenes
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                When you ask Riko a question, here is what happens in the background,
                all in under a few seconds.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {behindTheScenes.map((item, i) => (
              <ScrollAnimate key={item.title} variant="fadeUp" delay={i * 0.1}>
                <div className="relative rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/50">
                  <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          {/* Data flow diagram */}
          <ScrollAnimate variant="fadeUp">
            <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 sm:p-12">
              <h3 className="mb-8 text-center text-lg font-semibold text-slate-900">Data Flow</h3>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                {[
                  { icon: Database, label: "Your Tally", sub: "On-premise" },
                  { icon: Lock, label: "Encrypted Sync", sub: "AES-256" },
                  { icon: Server, label: "Riko Cloud", sub: "Indian Servers" },
                  { icon: Brain, label: "AI Engine", sub: "NLP Processing" },
                  { icon: Smartphone, label: "You", sub: "WhatsApp / Web" },
                ].map((node, i, arr) => (
                  <div key={node.label} className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600 ring-1 ring-green-200">
                        <node.icon className="h-7 w-7" />
                      </div>
                      <p className="text-xs font-semibold text-slate-900">{node.label}</p>
                      <p className="text-[10px] text-slate-400">{node.sub}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="hidden h-5 w-5 shrink-0 text-green-400 sm:block" />
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
