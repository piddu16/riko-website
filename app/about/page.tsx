import type { Metadata } from "next";
import Link from "next/link";
import { Target, Heart, Zap, Users, ExternalLink } from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import PageHero from "@/components/page-hero";
import CtaSection from "@/components/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About - Riko AI",
  description:
    "Riko is building the AI operating layer above Tally for Indian MSMEs. Based in Mumbai, built by operators who lived the problem.",
};

const values = [
  {
    icon: Target,
    title: "Tally-native",
    description:
      "We don't replace Tally. We sit above it. Your CA keeps doing what they do best. You just stop digging through reports to find answers.",
  },
  {
    icon: Heart,
    title: "Built for Bharat",
    description:
      "Hindi, Tamil, Marathi, Gujarati, and more. Voice notes on WhatsApp. Context that matches how Indian MSMEs actually run.",
  },
  {
    icon: Zap,
    title: "Action, not reports",
    description:
      "Most tools tell you what happened. Riko tells you what to do next — and handles the routine stuff for you.",
  },
  {
    icon: Users,
    title: "Operators first",
    description:
      "Built by founders who lived the pain of manual follow-ups and stale reports. Every feature came from a real customer conversation.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Riko"
        title={<>Books of record. <span className="text-[#16A34A]">Systems of action.</span></>}
        subtitle="Indian MSMEs have digital books but analog workflows. Owners track receivables across calls, WhatsApp, and memory. The gap between knowing and doing costs them real money. We're closing it."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollAnimate variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">Our mission</p>
            <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-tight text-[#0B1F12] sm:text-4xl lg:text-5xl">
              MSME finance ops should be proactive, not reactive.
            </h2>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Tally has the data. The books are digital. But the workflows are still manual, delayed, and reactive. You find out liquidity is tight <em>after</em> the cheque bounces — not before.
              </p>
              <p>
                Riko sits above Tally and converts ledgers, invoices, bills, and ageing into next-best actions. AI chat. Payment reminders. MIS. Cash visibility. Owner-ready tasks.
              </p>
              <p className="font-medium text-[#0B1F12]">
                We're building the AI operating layer above Tally for every Indian MSME.
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      <section className="bg-[#F8FAF9] py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">What we believe</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
                Four ideas that shape every decision
              </h2>
            </div>
          </ScrollAnimate>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <ScrollAnimate key={value.title} variant="fadeUp" delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#22C55E]/10">
                    <value.icon className="h-5 w-5 text-[#16A34A]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[#0B1F12]">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">The team</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
                Seven operators. Close to the problem.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Built by people with product, engineering, growth, and onboarding depth across MSME workflows.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.team.map((member, i) => (
              <ScrollAnimate key={member.name} variant="fadeUp" delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-[#F8FAF9] p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] text-2xl font-semibold text-white">
                    {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-[#0B1F12]">{member.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{member.role}</p>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#16A34A] hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> LinkedIn
                  </Link>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <ScrollAnimate variant="fadeUp">
            <p className="mt-10 text-center text-sm text-slate-500">
              + 3 team members across engineering, QA, customer success, and operations.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      <section className="bg-[#0B1F12] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollAnimate variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#22C55E]">Company</p>
            <h3 className="mt-3 text-2xl font-semibold">{siteConfig.company}</h3>
            <p className="mt-2 text-slate-400">Made in {siteConfig.location}</p>
          </ScrollAnimate>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
