import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import PageHero from "@/components/page-hero";
import CtaSection from "@/components/cta-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing - Riko AI",
  description:
    "Two simple plans. Basic at ₹5,000/yr for solo founders. Teams at ₹20,000/yr for growing finance teams. No hidden fees, no per-seat surprises.",
};

const plans = siteConfig.pricing;

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — 14-day free trial on both plans. No credit card required upfront. If Riko doesn't save you at least 5 hours in the first two weeks, don't pay.",
  },
  {
    q: "What are AI credits on the Teams plan?",
    a: "One AI credit = one question answered by Riko's AI. The Teams plan includes 2,000 shared credits per month across your 3 users. Most finance teams use 600–900 per month.",
  },
  {
    q: "Can I add more users or companies?",
    a: "Yes. Extra users are ₹3,000/yr each. Extra companies are ₹5,000/yr each on the Teams plan. Contact us for volume pricing if you need 10+ of either.",
  },
  {
    q: "Do you offer annual discounts beyond these prices?",
    a: "Both plans are already billed annually. For 3-year commitments we offer a 15% discount. Contact sales for details.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit/debit cards, UPI, net banking, and NEFT. Annual invoicing with 30-day terms available on the Teams plan.",
  },
  {
    q: "What's your refund policy?",
    a: "Full refund within 30 days, no questions asked. We only want customers who are getting value.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title={<>Two plans. <span className="text-[#16A34A]">Both built for Tally.</span></>}
        subtitle="Start with Basic if you're running one company solo. Move to Teams when you need multiple users, multiple entities, and automation."
      />

      {/* Pricing cards */}
      <section className="relative -mt-8 pb-20 lg:pb-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan, i) => (
              <ScrollAnimate key={plan.name} variant="fadeUp" delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl p-8 sm:p-10 ${
                    plan.highlighted
                      ? "border-2 border-[#22C55E] bg-white shadow-[0_20px_60px_-20px_rgba(34,197,94,0.3)]"
                      : "border border-slate-200 bg-white"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#22C55E] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
                      Most popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-[#0B1F12]">{plan.name}</h3>
                    <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                  </div>

                  <div className="mt-8 flex items-baseline gap-1">
                    <span className="text-5xl font-semibold tracking-tight text-[#0B1F12]">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-slate-500">{plan.period}</span>
                    )}
                  </div>
                  {plan.priceNote && (
                    <p className="mt-1 text-xs text-slate-500">{plan.priceNote}</p>
                  )}

                  <Link
                    href="#cta"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                      plan.highlighted
                        ? "bg-[#0B1F12] text-white hover:bg-[#16A34A]"
                        : "border border-slate-200 bg-white text-[#0B1F12] hover:border-[#22C55E] hover:bg-[#E8F5EC]"
                    }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="mt-10 border-t border-slate-100 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      What's included
                    </p>
                    <ul className="mt-5 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <ScrollAnimate variant="fadeUp" delay={0.3}>
            <p className="mt-10 text-center text-sm text-slate-500">
              Need more companies, users, or a custom deployment?{" "}
              <Link href="/contact" className="font-semibold text-[#16A34A] hover:underline">
                Talk to sales
              </Link>
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Trust row */}
      <section className="border-y border-slate-100 bg-[#F8FAF9] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              { title: "14-day free trial", desc: "On every plan. No credit card upfront." },
              { title: "30-day money back", desc: "Not happy? Full refund, no questions." },
              { title: "Tally-native", desc: "Read-only. Never modifies your books." },
            ].map((item, i) => (
              <ScrollAnimate key={item.title} variant="fadeUp" delay={i * 0.1}>
                <p className="text-base font-semibold text-[#0B1F12]">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1F12] sm:text-4xl">
                Questions, answered
              </h2>
            </div>
          </ScrollAnimate>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <ScrollAnimate key={faq.q} variant="fadeUp" delay={i * 0.05}>
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-semibold text-[#0B1F12]">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{faq.a}</p>
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
