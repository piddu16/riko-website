import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import PageHero from "@/components/page-hero";
import CtaSection from "@/components/cta-section";
import ContactForm from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact - Riko AI",
  description:
    "Get in touch with the Riko team for demos, support, or partnerships. Phone: +91 98196 02121. Email: hello@rikoai.in. Mumbai, India.",
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Office", value: siteConfig.location, href: null },
  { icon: Clock, label: "Hours", value: "Mon–Fri · 9:00 AM – 6:00 PM IST", href: null },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s <span className="text-[#16A34A]">talk.</span></>}
        subtitle="Questions about Riko? Want a personalised demo? Partnership ideas? We reply within 24 hours — most of the time much sooner."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            {/* Contact form */}
            <ScrollAnimate variant="fadeLeft">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#22C55E]/10">
                    <MessageSquare className="h-5 w-5 text-[#16A34A]" />
                  </div>
                  <h2 className="text-xl font-semibold text-[#0B1F12]">Send us a message</h2>
                </div>
                <ContactForm />
              </div>
            </ScrollAnimate>

            {/* Info + map */}
            <div className="space-y-6">
              <ScrollAnimate variant="fadeRight">
                <div className="rounded-2xl border border-slate-200 bg-[#F8FAF9] p-8">
                  <h2 className="text-xl font-semibold text-[#0B1F12]">Prefer direct contact?</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Pick whichever channel works best for you.
                  </p>

                  <div className="mt-6 space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                          <info.icon className="h-4 w-4 text-[#16A34A]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="mt-0.5 block text-sm font-medium text-[#0B1F12] hover:text-[#16A34A]"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-sm font-medium text-[#0B1F12]">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimate>

              <ScrollAnimate variant="fadeRight" delay={0.1}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="flex aspect-[4/3] items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_70%)]">
                    <div className="text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#22C55E]/20">
                        <MapPin className="h-6 w-6 text-[#16A34A]" />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-[#0B1F12]">Mumbai · Maharashtra</p>
                      <p className="mt-1 text-xs text-slate-500">India</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
