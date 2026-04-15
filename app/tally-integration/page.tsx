import type { Metadata } from "next";
import {
  Database,
  ArrowRight,
  Shield,
  Lock,
  Server,
  CheckCircle,
  Download,
  Settings,
  Zap,
  RefreshCw,
  Eye,
  MonitorSmartphone,
} from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Tally Integration - Riko AI",
  description:
    "Seamless Tally Prime integration with Riko AI. Secure API connector with read-only access, encrypted data sync, and support for Tally Prime, Tally ERP 9, and more.",
};

const supportedPlatforms = [
  { name: "Tally Prime", status: "Fully Supported", available: true },
  { name: "Tally ERP 9", status: "Fully Supported", available: true },
  { name: "Zoho Books", status: "Coming Soon", available: false },
  { name: "Busy Accounting", status: "Coming Soon", available: false },
];

const setupSteps = [
  {
    icon: Download,
    title: "Download the Connector",
    description:
      "Download the lightweight Riko Connector application from your Riko dashboard. It is a small installer under 20 MB that runs on any Windows machine where Tally is installed.",
  },
  {
    icon: Settings,
    title: "Install & Configure",
    description:
      "Run the installer and follow the guided setup wizard. Select your Tally company, authenticate with your Riko account, and choose your sync preferences. The entire process takes under 5 minutes.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Sync Begins",
    description:
      "The connector automatically syncs your Tally data to Riko's secure cloud. Initial sync takes 5 to 15 minutes depending on your data size. After that, incremental syncs happen every few minutes.",
  },
  {
    icon: Zap,
    title: "Start Asking Questions",
    description:
      "Open WhatsApp or the Riko dashboard and start querying your financial data. Riko is now connected and ready to provide instant insights from your Tally accounts.",
  },
];

const securityFeatures = [
  {
    icon: Eye,
    title: "Read-Only Access",
    description:
      "Riko never writes to your Tally database. The connector only reads data, ensuring your accounting records remain untouched and unmodified.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data transferred between Tally and Riko is encrypted using AES-256 over TLS 1.3. Data at rest is also encrypted in our cloud infrastructure.",
  },
  {
    icon: Server,
    title: "Indian Server Infrastructure",
    description:
      "Your data is stored exclusively on servers located in India, ensuring compliance with data residency requirements and Indian regulations.",
  },
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    description:
      "Our infrastructure and processes are SOC 2 Type II certified. We undergo regular third-party security audits to maintain the highest standards.",
  },
];

export default function TallyIntegrationPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              Integration
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Seamless Tally Prime Integration
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Connect your Tally data securely in minutes. Read-only access, encrypted
              sync, and zero impact on your Tally performance.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* How it connects */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                How Riko Connects to Tally
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
                A lightweight connector installed on your Tally machine creates a secure,
                read-only bridge between your accounting data and Riko&apos;s AI engine.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-12 flex flex-col items-center gap-6 lg:flex-row lg:gap-4">
            <ScrollAnimate variant="fadeLeft">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
                  <Database className="h-10 w-10 text-blue-600" />
                  <p className="text-sm font-semibold text-slate-900">Tally Prime</p>
                  <p className="text-xs text-slate-500">Your accounting data</p>
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate variant="fadeUp" delay={0.1}>
              <ArrowRight className="h-6 w-6 rotate-90 text-slate-400 lg:rotate-0" />
            </ScrollAnimate>

            <ScrollAnimate variant="fadeUp" delay={0.15}>
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-green-50 p-6 ring-1 ring-green-100">
                <Lock className="h-10 w-10 text-green-600" />
                <p className="text-sm font-semibold text-slate-900">Riko Connector</p>
                <p className="text-xs text-slate-500">Secure, read-only bridge</p>
              </div>
            </ScrollAnimate>

            <ScrollAnimate variant="fadeUp" delay={0.2}>
              <ArrowRight className="h-6 w-6 rotate-90 text-slate-400 lg:rotate-0" />
            </ScrollAnimate>

            <ScrollAnimate variant="fadeUp" delay={0.25}>
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-purple-50 p-6 ring-1 ring-purple-100">
                <Server className="h-10 w-10 text-purple-600" />
                <p className="text-sm font-semibold text-slate-900">Riko Cloud</p>
                <p className="text-xs text-slate-500">AI-powered analysis</p>
              </div>
            </ScrollAnimate>

            <ScrollAnimate variant="fadeUp" delay={0.3}>
              <ArrowRight className="h-6 w-6 rotate-90 text-slate-400 lg:rotate-0" />
            </ScrollAnimate>

            <ScrollAnimate variant="fadeRight" delay={0.35}>
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
                <MonitorSmartphone className="h-10 w-10 text-amber-600" />
                <p className="text-sm font-semibold text-slate-900">You</p>
                <p className="text-xs text-slate-500">WhatsApp, Web, Email</p>
              </div>
            </ScrollAnimate>
          </div>

          {/* Data flow details */}
          <ScrollAnimate variant="fadeUp" delay={0.2}>
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-center text-base font-semibold text-slate-900">
                Data Flow Summary
              </h3>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <p>
                    <strong className="text-slate-900">Outbound only:</strong> Data flows from Tally to Riko.
                    Riko never sends data back to Tally or modifies your records.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <p>
                    <strong className="text-slate-900">Incremental sync:</strong> After the initial sync,
                    only new and changed records are transferred, minimizing bandwidth usage.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <p>
                    <strong className="text-slate-900">Zero performance impact:</strong> The connector is
                    designed to be lightweight and will not slow down your Tally operations.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Supported platforms */}
      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
              Supported Platforms
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-base text-slate-600">
              Riko currently integrates with Tally Prime and Tally ERP 9, with more
              accounting platforms on the way.
            </p>
          </ScrollAnimate>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {supportedPlatforms.map((platform, i) => (
              <ScrollAnimate key={platform.name} variant="fadeUp" delay={i * 0.1}>
                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200/60">
                  <Database className={`h-8 w-8 ${platform.available ? "text-green-600" : "text-slate-400"}`} />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{platform.name}</p>
                    <p className={`text-xs ${platform.available ? "text-green-600" : "text-slate-400"}`}>
                      {platform.status}
                    </p>
                  </div>
                  {platform.available && <CheckCircle className="ml-auto h-5 w-5 text-green-500" />}
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Setup steps */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
              Setup in 4 Easy Steps
            </h2>
          </ScrollAnimate>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {setupSteps.map((step, i) => (
              <ScrollAnimate key={step.title} variant="fadeUp" delay={i * 0.1}>
                <div className="relative rounded-2xl bg-white p-6 ring-1 ring-slate-200/60">
                  <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="border-t border-slate-100 bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <div className="text-center">
              <Shield className="mx-auto h-10 w-10 text-green-600" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                Enterprise-Grade Security
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
                Your financial data deserves the highest level of protection. Here is how
                we keep it safe.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {securityFeatures.map((feat, i) => (
              <ScrollAnimate key={feat.title} variant="fadeUp" delay={i * 0.1}>
                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-slate-200/60">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <feat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{feat.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{feat.description}</p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
