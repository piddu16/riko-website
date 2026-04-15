import type { Metadata } from "next";
import { BookOpen, Calendar, ArrowRight, Bell } from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import CtaSection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Blog - Riko AI",
  description:
    "Insights, tutorials, and updates from the Riko AI team. Stay informed about AI-powered accounting, GST compliance, and financial management for Indian SMEs.",
};

const placeholderPosts = [
  {
    title: "5 Ways AI Is Transforming Accounting for Indian SMEs",
    excerpt:
      "Artificial intelligence is no longer reserved for large enterprises. Discover how small and medium businesses in India are leveraging AI to automate reports, predict cash flow, and stay GST compliant.",
    date: "Coming Soon",
    category: "AI & Accounting",
    readTime: "5 min read",
  },
  {
    title: "The Complete Guide to GST Reconciliation with Tally",
    excerpt:
      "GST reconciliation is one of the most time-consuming tasks for Indian businesses. Learn how to automate GSTR-2A/2B reconciliation and avoid common mismatches that lead to notices.",
    date: "Coming Soon",
    category: "GST Compliance",
    readTime: "8 min read",
  },
  {
    title: "How to Get Real-Time MIS Reports from Tally on Mobile",
    excerpt:
      "Tired of waiting for your accountant to send reports? Here is how business owners are accessing real-time MIS reports from Tally directly on their phones via WhatsApp.",
    date: "Coming Soon",
    category: "Product Guide",
    readTime: "4 min read",
  },
  {
    title: "Cash Flow Management Tips for Growing Businesses",
    excerpt:
      "Cash flow is the lifeblood of any business. Learn practical strategies to improve your working capital cycle, reduce receivables aging, and maintain healthy cash reserves.",
    date: "Coming Soon",
    category: "Financial Tips",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              Blog
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Riko Blog
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Insights, tutorials, and updates on AI-powered financial management
              for Indian businesses.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Coming soon banner */}
      <section className="border-b border-slate-100 bg-green-50 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <div className="flex items-center justify-center gap-3">
              <BookOpen className="h-6 w-6 text-green-600" />
              <h2 className="text-xl font-bold text-slate-900">Coming Soon</h2>
            </div>
            <p className="mt-3 text-base text-slate-600">
              We are working on in-depth articles about AI, accounting, and financial
              management for Indian SMEs. Subscribe below to be notified when we launch.
            </p>

            {/* Newsletter signup */}
            <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700">
                <Bell className="h-4 w-4" />
                Notify Me
              </button>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Placeholder blog posts */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <h2 className="text-2xl font-bold text-slate-900">Upcoming Articles</h2>
            <p className="mt-2 text-base text-slate-500">
              Here is a preview of what we are working on.
            </p>
          </ScrollAnimate>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {placeholderPosts.map((post, i) => (
              <ScrollAnimate key={post.title} variant="fadeUp" delay={i * 0.1}>
                <article className="group flex flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200/60 transition hover:shadow-md hover:ring-green-200">
                  {/* Placeholder image */}
                  <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-slate-100 to-slate-200">
                    <div className="flex h-full items-center justify-center">
                      <BookOpen className="h-10 w-10 text-slate-300" />
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-green-600 transition">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{post.excerpt}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600">
                      Read More
                      <ArrowRight className="h-3 w-3" />
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
