import type { Metadata } from "next";
import Link from "next/link";
import {
  Database,
  Download,
  Settings,
  Zap,
  Shield,
  Lock,
  Server,
  CheckCircle,
  X,
  ArrowRight,
  Clock,
  Cloud,
  FileText,
} from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import PageHero from "@/components/page-hero";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Tally Integration - Riko AI",
  description:
    "Connect Tally Prime to Riko in under 5 minutes. Secure, read-only sync. See exactly how the Riko Connector works — what it reads, what it can't touch, and why your books stay safe.",
};

const setupSteps = [
  {
    number: "01",
    icon: Cloud,
    title: "Create your Riko account",
    time: "30 seconds",
    description:
      "Sign up with your work email. No credit card upfront. Pick your plan later — both come with a 14-day free trial.",
  },
  {
    number: "02",
    icon: Download,
    title: "Download the Riko Connector",
    time: "60 seconds",
    description:
      "A small Windows app (~8MB) that runs alongside Tally Prime. Download link appears in your dashboard after signup.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Install + authenticate",
    time: "2 minutes",
    description:
      "Run the installer. The Connector auto-detects Tally Prime and shows your company names. Pick one, paste the pairing code from your Riko dashboard, done.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Start asking questions",
    time: "Instantly",
    description:
      "Initial sync takes 5–10 minutes for the first load. After that, ask Riko anything on WhatsApp or the dashboard — in Hindi, English, or any supported language.",
  },
];

const permissions = {
  can: [
    "Read your chart of accounts",
    "Read invoices, bills, and receipts",
    "Read ledgers and party details",
    "Read stock and inventory data",
    "Read GST registration details",
    "Read pending and completed transactions",
  ],
  cannot: [
    "Create new vouchers or entries",
    "Edit or modify existing records",
    "Delete invoices, bills, or ledgers",
    "Change chart of accounts",
    "Post payments back to Tally",
    "Alter GST configurations",
  ],
};

const supportedSoftware = [
  { name: "Tally Prime", status: "Full support", note: "All versions from 2.0 onwards", available: true },
  { name: "Tally ERP 9", status: "Full support", note: "Versions 6.0+", available: true },
  { name: "Zoho Books", status: "Beta", note: "Early access customers only", available: true },
  { name: "Busy Accounting", status: "Coming Q2 2026", note: "On the roadmap", available: false },
];

export default function TallyIntegrationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tally Integration"
        title={
          <>
            5 minutes from install to{" "}
            <span className="text-[#16A34A]">first insight.</span>
          </>
        }
        subtitle="The Riko Connector is a tiny Windows app that sits alongside Tally Prime. It reads your books — never writes — and syncs securely to Riko's cloud so you can ask questions from anywhere."
      />

      {/* Data flow diagram */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAF9] p-8 sm:p-12">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#16A34A]">
                How it flows
              </p>
              <h2 className="mt-3 text-center text-2xl font-semibold tracking-tight text-[#0B1F12] sm:text-3xl">
                From your Tally to your WhatsApp
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-2">
                {[
                  { icon: Database, label: "Tally Prime", sub: "On your PC" },
                  { icon: Lock, label: "Riko Connector", sub: "Read-only · AES-256" },
                  { icon: Cloud, label: "Riko Cloud", sub: "Mumbai servers" },
                  { icon: Server, label: "AI Engine", sub: "NLP + analytics" },
                  { icon: Zap, label: "You", sub: "WhatsApp · Web" },
                ].map((node, i, arr) => (
                  <div key={node.label} className="flex items-center sm:flex-col sm:text-center">
                    <div className="flex-1 sm:flex-initial">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                        <node.icon className="h-6 w-6 text-[#16A34A]" strokeWidth={1.5} />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-[#0B1F12]">{node.label}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{node.sub}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="mx-auto hidden h-4 w-4 shrink-0 rotate-90 text-[#22C55E] sm:block sm:rotate-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Setup steps */}
      <section className="bg-[#F8FAF9] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">Setup</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
                Four steps. Under five minutes.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                No IT team needed. No server changes. If you can install Tally, you can install Riko.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {setupSteps.map((step, i) => (
              <ScrollAnimate key={step.number} variant="fadeUp" delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">
                      {step.number}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600">
                      <Clock className="h-3 w-3" /> {step.time}
                    </span>
                  </div>
                  <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#22C55E]/10">
                    <step.icon className="h-5 w-5 text-[#16A34A]" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-[#0B1F12]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Read vs Can't — the trust section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
                Read-only, always
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
                What Riko can and can&apos;t do
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Transparency is the whole point. Your books stay exactly as your CA left them.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <ScrollAnimate variant="fadeLeft">
              <div className="h-full rounded-2xl border border-[#22C55E]/30 bg-[#E8F5EC]/40 p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E]">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B1F12]">Riko can read</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {permissions.can.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-[#0B1F12]">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#16A34A]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimate>

            <ScrollAnimate variant="fadeRight">
              <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-400">
                    <X className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0B1F12]">Riko cannot</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {permissions.cannot.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-slate-600">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Supported software */}
      <section className="bg-[#F8FAF9] py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
                Compatibility
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
                Works with what you already have
              </h2>
            </div>
          </ScrollAnimate>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {supportedSoftware.map((sw, i) => (
              <ScrollAnimate key={sw.name} variant="fadeUp" delay={i * 0.06}>
                <div
                  className={`flex items-center justify-between gap-4 p-6 ${
                    i !== supportedSoftware.length - 1 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        sw.available ? "bg-[#22C55E]/10" : "bg-slate-100"
                      }`}
                    >
                      <FileText
                        className={`h-5 w-5 ${sw.available ? "text-[#16A34A]" : "text-slate-400"}`}
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#0B1F12]">{sw.name}</p>
                      <p className="text-xs text-slate-500">{sw.note}</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      sw.available
                        ? "bg-[#22C55E]/10 text-[#16A34A]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {sw.status}
                  </span>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">
                Security
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
                Bank-grade. Indian servers. Always.
              </h2>
            </div>
          </ScrollAnimate>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Lock, title: "AES-256 encryption", desc: "End-to-end encryption in transit and at rest." },
              { icon: Server, title: "Indian servers", desc: "All data stored in Mumbai. Never leaves India." },
              { icon: Shield, title: "SOC 2 Type II", desc: "Annual third-party security audits." },
              { icon: Database, title: "Read-only access", desc: "Physical inability to modify your books." },
            ].map((item, i) => (
              <ScrollAnimate key={item.title} variant="fadeUp" delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-[#F8FAF9] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#22C55E]/10">
                    <item.icon className="h-5 w-5 text-[#16A34A]" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-[#0B1F12]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <ScrollAnimate variant="fadeUp">
            <div className="mt-10 rounded-2xl border border-slate-200 bg-[#F8FAF9] p-8 text-center">
              <p className="text-base text-slate-700">
                Read more about our{" "}
                <Link href="/privacy-policy" className="font-semibold text-[#16A34A] hover:underline">
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="font-semibold text-[#16A34A] hover:underline">
                  security architecture
                </Link>
                .
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
