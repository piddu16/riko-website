import type { Metadata } from "next";
import { Calendar, ArrowRight, Bell } from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import PageHero from "@/components/page-hero";
import CtaSection from "@/components/cta-section";
import NotifyForm from "@/components/notify-form";

export const metadata: Metadata = {
  title: "Blog - Riko AI",
  description:
    "Insights, tutorials, and updates on AI-powered finance ops for Indian MSMEs — Tally, GST, cash flow, and automation.",
};

const placeholderPosts = [
  {
    title: "5 ways AI is transforming accounting for Indian MSMEs",
    excerpt:
      "AI is no longer reserved for large enterprises. See how SMEs across India are automating reports, predicting cash flow, and staying GST compliant.",
    category: "AI & Accounting",
    readTime: "5 min read",
  },
  {
    title: "The complete guide to GST reconciliation with Tally",
    excerpt:
      "GSTR-2A/2B reconciliation is a major time sink. Learn to automate it, catch mismatches early, and avoid tax notices.",
    category: "GST Compliance",
    readTime: "8 min read",
  },
  {
    title: "How to get real-time MIS reports from Tally on mobile",
    excerpt:
      "Stop waiting for your accountant to send end-of-month reports. Access real-time MIS from Tally directly on WhatsApp.",
    category: "Product Guide",
    readTime: "4 min read",
  },
  {
    title: "Cash flow playbook for growing Indian businesses",
    excerpt:
      "Practical strategies to tighten your working capital cycle, cut receivables aging, and maintain healthy reserves.",
    category: "Financial Tips",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title={<>Ideas on <span className="text-[#16A34A]">modern finance ops.</span></>}
        subtitle="Essays, tutorials, and deep dives on AI, Tally, GST, cash flow, and running a smarter Indian MSME."
      />

      {/* Coming soon banner */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="rounded-2xl border border-[#22C55E]/30 bg-[#E8F5EC]/50 p-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#16A34A]">
                <Bell className="h-3 w-3" /> Launching soon
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-[#0B1F12]">
                We're writing the playbook.
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Drop your email to get notified when the first posts go live. No spam, just substance.
              </p>

              <NotifyForm />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Upcoming posts */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollAnimate variant="fadeUp">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#16A34A]">On deck</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#0B1F12]">What's coming up</h2>
              </div>
            </div>
          </ScrollAnimate>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {placeholderPosts.map((post, i) => (
              <ScrollAnimate key={post.title} variant="fadeUp" delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#22C55E]/40 hover:shadow-[0_10px_40px_-20px_rgba(34,197,94,0.3)]">
                  {/* Cover */}
                  <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-[#E8F5EC] to-white">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#16A34A]/50">
                      Riko Blog
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="rounded-full bg-[#22C55E]/10 px-3 py-1 text-xs font-semibold text-[#16A34A]">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-snug text-[#0B1F12] transition group-hover:text-[#16A34A]">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{post.excerpt}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="h-3.5 w-3.5" /> Coming soon
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#16A34A]">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </article>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
