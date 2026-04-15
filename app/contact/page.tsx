import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
} from "lucide-react";
import { ScrollAnimate } from "@/components/scroll-animate";
import CtaSection from "@/components/cta-section";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact - Riko AI",
  description:
    "Get in touch with the Riko AI team. Contact us for demos, support, or partnership inquiries. Phone: +91 98196 02121, Email: hello@rikoai.in.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98196 02121",
    href: "tel:+919819602121",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@rikoai.in",
    href: "mailto:hello@rikoai.in",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Mumbai, Maharashtra, India",
    href: null,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM IST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
              Contact
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Have questions about Riko? Want a personalized demo? Our team is here
              to help. Reach out and we will get back to you within 24 hours.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact form */}
            <ScrollAnimate variant="fadeLeft">
              <div className="rounded-3xl bg-white p-8 ring-1 ring-slate-200/60 sm:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
                </div>
                <ContactForm />
              </div>
            </ScrollAnimate>

            {/* Contact info + map */}
            <div className="space-y-8">
              <ScrollAnimate variant="fadeRight">
                <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
                <p className="mt-2 text-base text-slate-600">
                  Prefer to reach out directly? Here are all the ways you can connect with us.
                </p>

                <div className="mt-8 space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-green-600 hover:text-green-700"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimate>

              {/* Map placeholder */}
              <ScrollAnimate variant="fadeRight" delay={0.1}>
                <div className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60">
                  <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                    <div className="text-center">
                      <MapPin className="mx-auto h-12 w-12 text-slate-400" />
                      <p className="mt-3 text-sm font-medium text-slate-500">Mumbai, India</p>
                      <p className="mt-1 text-xs text-slate-400">Map integration coming soon</p>
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
