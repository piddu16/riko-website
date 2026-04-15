import type { Metadata } from "next";
import { ScrollAnimate } from "@/components/scroll-animate";

export const metadata: Metadata = {
  title: "Privacy Policy - Riko AI",
  description:
    "Privacy policy for Riko AI by NXTLVL Tech Solutions Private Limited. Learn how we collect, use, and protect your data.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you provide directly to us when you create an account, connect your Tally data, use our services, or contact us for support.",
      "**Account Information:** When you register, we collect your name, email address, phone number, company name, and GSTIN (if provided).",
      "**Tally Data:** When you connect Tally Prime or Tally ERP 9, we access and sync your financial data including ledgers, vouchers, invoices, stock items, and related records. This data is accessed through read-only connections and is used solely to provide you with insights and reports.",
      "**Usage Data:** We automatically collect information about how you interact with Riko, including queries asked, features used, device information, and IP addresses.",
      "**Communication Data:** When you contact our support team, we retain records of your communications to provide better service.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect for the following purposes:",
      "- To provide, maintain, and improve the Riko AI service",
      "- To process and respond to your natural language queries with accurate financial insights",
      "- To generate reports, analytics, and automated notifications as requested by you",
      "- To send GST filing reminders and payment follow-up notifications",
      "- To communicate with you about service updates, security alerts, and support messages",
      "- To detect, prevent, and address technical issues and security threats",
      "- To comply with legal obligations, including tax and regulatory requirements",
    ],
  },
  {
    title: "3. Data Sharing and Disclosure",
    content: [
      "We do not sell, rent, or trade your personal or financial data to any third party. Your data belongs to you.",
      "We may share information only in the following limited circumstances:",
      "- **Service Providers:** We work with trusted infrastructure providers (cloud hosting, communication services) who process data on our behalf under strict contractual obligations.",
      "- **Legal Requirements:** We may disclose information if required by law, regulation, legal process, or governmental request.",
      "- **Business Transfers:** In the event of a merger, acquisition, or sale of assets, user data may be transferred as part of that transaction. We will notify you before your data becomes subject to a different privacy policy.",
      "- **With Your Consent:** We may share information with third parties when you explicitly authorize us to do so.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement industry-standard security measures to protect your data:",
      "- All data in transit is encrypted using TLS 1.3",
      "- All data at rest is encrypted using AES-256 encryption",
      "- Our infrastructure is hosted entirely on servers located in India",
      "- We maintain SOC 2 Type II compliance",
      "- We conduct regular third-party security audits and penetration testing",
      "- Access to production systems is restricted to authorized personnel with multi-factor authentication",
      "- We implement comprehensive logging and monitoring for security events",
      "While we strive to protect your data, no method of electronic storage or transmission is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain your data for as long as your account is active or as needed to provide services. If you delete your account, we will remove your personal data and Tally-synced data within 30 days, except where retention is required by law.",
      "Aggregated, anonymized data that cannot be used to identify you may be retained for analytical purposes.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "You have the following rights regarding your data:",
      "- **Access:** Request a copy of the personal data we hold about you",
      "- **Correction:** Request correction of inaccurate or incomplete data",
      "- **Deletion:** Request deletion of your personal data",
      "- **Export:** Request an export of your data in a portable format",
      "- **Opt-out:** Unsubscribe from marketing communications at any time",
      "To exercise any of these rights, contact us at hello@rikoai.in.",
    ],
  },
  {
    title: "7. Cookies and Tracking",
    content: [
      "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver relevant content. See our Cookie Policy for detailed information about the cookies we use and how to manage your preferences.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Riko is a business tool and is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from children.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this privacy policy from time to time. We will notify you of material changes by posting the updated policy on our website and, where appropriate, sending you an email notification. Your continued use of Riko after changes take effect constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have questions about this privacy policy or our data practices, please contact us:",
      "**NXTLVL Tech Solutions Private Limited**",
      "Email: hello@rikoai.in",
      "Phone: +91 98196 02121",
      "Location: Mumbai, Maharashtra, India",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
              Last updated: April 2025
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <p className="text-base leading-7 text-slate-600">
              NXTLVL Tech Solutions Private Limited (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
              Riko AI platform. This privacy policy explains how we collect, use,
              store, and protect your information when you use our services.
            </p>
          </ScrollAnimate>

          <div className="mt-12 space-y-10">
            {sections.map((section, i) => (
              <ScrollAnimate key={section.title} variant="fadeUp" delay={i * 0.03}>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                  <div className="mt-4 space-y-3">
                    {section.content.map((text, j) => (
                      <p
                        key={j}
                        className="text-sm leading-7 text-slate-600"
                        dangerouslySetInnerHTML={{
                          __html: text
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>')
                            .replace(/^- /, '&bull;&nbsp;'),
                        }}
                      />
                    ))}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
