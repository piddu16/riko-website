import type { Metadata } from "next";
import Link from "next/link";
import { Check, HelpCircle, Minus } from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import CtaSection from "@/components/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing - Riko AI",
  description:
    "Simple, transparent pricing for Riko AI. Start free, upgrade as you grow. Plans for every Indian SME from solo founders to large enterprises.",
};

const plans = siteConfig.pricing;

const comparisonFeatures = [
  { name: "Tally companies", free: "1", pro: "Up to 5", enterprise: "Unlimited" },
  { name: "AI queries", free: "50/month", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "Financial reports", free: "Basic", pro: "Advanced", enterprise: "Custom" },
  { name: "WhatsApp notifications", free: true, pro: true, enterprise: true },
  { name: "Payment reminders", free: false, pro: true, enterprise: true },
  { name: "GST compliance automation", free: false, pro: true, enterprise: true },
  { name: "Custom dashboards", free: false, pro: true, enterprise: true },
  { name: "Forecasting & analytics", free: false, pro: true, enterprise: true },
  { name: "API access", free: false, pro: true, enterprise: true },
  { name: "Custom AI training", free: false, pro: false, enterprise: true },
  { name: "Dedicated account manager", free: false, pro: false, enterprise: true },
  { name: "On-premise deployment", free: false, pro: false, enterprise: true },
  { name: "SLA guarantee", free: false, pro: false, enterprise: true },
  { name: "Support", free: "Email", pro: "Priority", enterprise: "Phone & Video" },
];

const faqs = [
  {
    q: "Can I try Riko before paying?",
    a: "Absolutely. The Free plan is free forever with up to 50 AI queries per month. You can also start a 14-day free trial of the Pro plan with no credit card required.",
  },
  {
    q: "What happens when I exceed 50 queries on the Free plan?",
    a: "You will receive a notification when you are approaching your limit. Once you reach 50 queries, you can upgrade to Pro for unlimited queries or wait until the next billing cycle when your quota resets.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade at any time. When upgrading, you get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there an annual discount?",
    a: "Yes. Annual billing is available at a 20% discount. Contact our sales team for details on annual pricing for Pro and Enterprise plans.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, UPI, and net banking. Enterprise customers can also pay via invoice with 30-day terms.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a full refund within 30 days of your first payment if you are not satisfied. No questions asked.",
  },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-slate-700">{value}</span>;
  }
  return value ? (
    <Check className="mx-auto h-5 w-5 text-green-500" />
  ) : (
    <Minus className="mx-auto h-5 w-5 text-slate-300" />
  );
}

export default function PricingPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              Pricing
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Start free, upgrade as your business grows. No hidden fees, no
              long-term contracts, no surprises.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative -mt-16 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <ScrollAnimate key={plan.name} variant="fadeUp" delay={i * 0.1}>
                <div
                  className={`relative flex flex-col rounded-3xl p-8 ring-1 ${
                    plan.highlighted
                      ? "bg-white shadow-xl shadow-green-500/10 ring-green-500"
                      : "bg-white ring-slate-200"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && (
                      <span className="ml-1 text-base text-slate-500">{plan.period}</span>
                    )}
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.name === "Enterprise" ? "/contact" : "#"}
                    className={`block rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                      plan.highlighted
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison */}
      <section className="border-t border-slate-100 bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
              Compare Plans
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-base text-slate-500">
              A detailed look at what each plan includes.
            </p>
          </ScrollAnimate>

          <ScrollAnimate variant="fadeUp" delay={0.1}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 pr-4 text-sm font-semibold text-slate-900">Feature</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-slate-900">Free</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-green-600">Pro</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-slate-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row) => (
                    <tr key={row.name} className="border-b border-slate-100">
                      <td className="py-3.5 pr-4 text-sm text-slate-700">{row.name}</td>
                      <td className="px-4 py-3.5 text-center">
                        <FeatureCell value={row.free} />
                      </td>
                      <td className="bg-green-50/40 px-4 py-3.5 text-center">
                        <FeatureCell value={row.pro} />
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <FeatureCell value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <div className="flex items-center justify-center gap-3">
              <HelpCircle className="h-6 w-6 text-green-600" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Pricing FAQ
              </h2>
            </div>
          </ScrollAnimate>

          <div className="mt-12 space-y-8">
            {faqs.map((faq, i) => (
              <ScrollAnimate key={faq.q} variant="fadeUp" delay={i * 0.05}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-semibold text-slate-900">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.a}</p>
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
