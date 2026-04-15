import type { Metadata } from "next";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  ShieldCheck,
  MapPin,
  Building2,
} from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About - Riko AI",
  description:
    "Learn about Riko AI and the team at NXTLVL Tech Solutions building the AI CFO for Indian SMEs. Our mission, story, and values.",
};

const values = [
  {
    icon: Target,
    title: "Simplicity First",
    description:
      "We believe powerful technology should be effortless to use. If it requires a manual, we have not done our job. Every feature in Riko is designed so that any business owner can use it from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "Your financial data is sacred. We earn trust through radical transparency about how we handle data, what we access, and what we never will. Read-only access and zero data sharing are not features, they are promises.",
  },
  {
    icon: Heart,
    title: "Built for India",
    description:
      "We understand the unique challenges of running a business in India, from GST compliance headaches to multilingual teams. Riko is not a foreign product adapted for India. It is built from the ground up for Indian businesses.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "The AI landscape evolves rapidly, and so does Riko. We ship improvements every week, listen to customer feedback obsessively, and invest heavily in R&D to stay at the cutting edge of AI-powered financial intelligence.",
  },
];

const team = [
  { name: "Founder & CEO", placeholder: true },
  { name: "CTO", placeholder: true },
  { name: "Head of AI", placeholder: true },
  { name: "Head of Product", placeholder: true },
  { name: "Head of Growth", placeholder: true },
  { name: "Lead Engineer", placeholder: true },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              About Us
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Riko
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We are on a mission to make financial intelligence accessible to every
              Indian business, regardless of size or technical expertise.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ScrollAnimate variant="fadeUp">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Mission</h2>
              </div>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  India has over 60 million SMEs, and the vast majority manage their finances on
                  Tally. Yet most of these businesses make critical financial decisions based on
                  gut feeling rather than data, not because they lack the data, but because
                  extracting insights from accounting software requires expertise most small
                  businesses do not have.
                </p>
                <p>
                  Riko changes that. By combining the power of AI with deep integration into
                  Tally, we give every business owner a virtual CFO that speaks their language,
                  understands their context, and delivers actionable insights on demand. Whether
                  you run a manufacturing unit in Ludhiana or a trading firm in Surat, Riko
                  gives you the financial clarity that was previously available only to companies
                  with dedicated finance teams.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ScrollAnimate variant="fadeUp">
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Story</h2>
              </div>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  Riko is built by NXTLVL Tech Solutions Private Limited, headquartered in
                  Mumbai. Our founding team has deep experience across fintech, enterprise
                  software, and artificial intelligence.
                </p>
                <p>
                  The idea for Riko was born from a simple observation: business owners spend
                  hours each week chasing numbers that should be at their fingertips. They call
                  their accountant to ask basic questions about cash flow, they manually compile
                  reports that should be automated, and they file GST returns in a panic at the
                  last minute.
                </p>
                <p>
                  We set out to build an AI assistant that could sit on top of Tally and make
                  all of that effortless. No complex dashboards to learn, no expensive
                  consultants to hire. Just ask a question and get an answer, in any language,
                  on any device.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200/60">
                <MapPin className="h-6 w-6 shrink-0 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Mumbai, India</p>
                  <p className="text-xs text-slate-500">NXTLVL Tech Solutions Private Limited</p>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-base text-slate-600">
              The principles that guide everything we build.
            </p>
          </ScrollAnimate>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map((value, i) => (
              <ScrollAnimate key={value.title} variant="fadeUp" delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-slate-100 bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <div className="text-center">
              <Users className="mx-auto h-8 w-8 text-green-600" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                Our Team
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
                A passionate team of engineers, designers, and domain experts building
                the future of financial intelligence for Indian businesses.
              </p>
            </div>
          </ScrollAnimate>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <ScrollAnimate key={member.name} variant="fadeUp" delay={i * 0.08}>
                <div className="flex flex-col items-center rounded-2xl bg-white p-6 ring-1 ring-slate-200/60">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-200">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{member.name}</p>
                  <p className="mt-1 text-xs text-slate-500">Team Member</p>
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
