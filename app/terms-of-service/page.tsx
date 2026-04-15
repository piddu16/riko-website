import type { Metadata } from "next";
import { ScrollAnimate } from "@/components/scroll-animate";

export const metadata: Metadata = {
  title: "Terms of Service - Riko AI",
  description:
    "Terms of service for Riko AI by NXTLVL Tech Solutions Private Limited. Read our terms and conditions governing the use of our platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the Riko AI platform and associated services (collectively, the \"Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, you may not use the Service.",
      "The Service is provided by NXTLVL Tech Solutions Private Limited (\"Company,\" \"we,\" \"us,\" or \"our\"), a company incorporated under the laws of India, with its registered office in Mumbai, Maharashtra.",
    ],
  },
  {
    title: "2. Description of Service",
    content: [
      "Riko AI is an artificial intelligence-powered financial intelligence platform that integrates with accounting software (including Tally Prime and Tally ERP 9) to provide business insights, reports, analytics, and automated notifications.",
      "The Service includes web-based dashboards, WhatsApp integrations, email reports, and API access depending on your subscription plan.",
    ],
  },
  {
    title: "3. Account Registration",
    content: [
      "To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
      "You must be at least 18 years of age and have the legal authority to enter into these Terms on behalf of yourself or the business entity you represent.",
    ],
  },
  {
    title: "4. Subscription Plans and Billing",
    content: [
      "The Service is available under multiple subscription plans, including a free tier with limited functionality. Paid plans are billed on a monthly or annual basis as selected at the time of subscription.",
      "All prices are listed in Indian Rupees (INR) and are exclusive of applicable taxes (GST). Taxes will be added to your invoice as required by Indian tax law.",
      "You may upgrade or downgrade your subscription plan at any time. Upgrades take effect immediately, and downgrades take effect at the end of the current billing period.",
      "We reserve the right to modify pricing with at least 30 days advance notice. Continued use of the Service after a price change constitutes acceptance of the new pricing.",
    ],
  },
  {
    title: "5. Data and Privacy",
    content: [
      "Your use of the Service is also governed by our Privacy Policy, which describes how we collect, use, and protect your data.",
      "You retain all rights to your financial data. By connecting your accounting software, you grant us a limited, non-exclusive license to access, process, and analyze your data solely for the purpose of providing the Service.",
      "We access your Tally data through read-only connections and will never modify, delete, or alter your accounting records.",
    ],
  },
  {
    title: "6. Acceptable Use",
    content: [
      "You agree not to use the Service to:",
      "- Violate any applicable laws, regulations, or third-party rights",
      "- Upload or transmit malicious code, viruses, or harmful content",
      "- Attempt to gain unauthorized access to our systems or other users' accounts",
      "- Reverse engineer, decompile, or attempt to extract the source code of the Service",
      "- Use the Service to compete with or replicate the functionality of Riko AI",
      "- Exceed any rate limits or usage quotas associated with your subscription plan",
      "- Share your account credentials or allow unauthorized parties to access the Service through your account",
    ],
  },
  {
    title: "7. Intellectual Property",
    content: [
      "The Service, including all software, algorithms, designs, text, graphics, and other content, is the intellectual property of NXTLVL Tech Solutions Private Limited and is protected by applicable intellectual property laws.",
      "You may not copy, modify, distribute, sell, or lease any part of the Service without our prior written consent.",
      "The Riko name and logo are trademarks of NXTLVL Tech Solutions Private Limited. You may not use our trademarks without prior written permission.",
    ],
  },
  {
    title: "8. Disclaimers",
    content: [
      "The Service is provided on an \"as is\" and \"as available\" basis. We make no warranties, express or implied, regarding the Service, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      "While we strive for accuracy, the insights and reports generated by Riko AI are based on the data provided by your accounting software and should not be considered as professional financial or tax advice. We recommend consulting with qualified professionals for critical financial decisions.",
      "We do not guarantee that the Service will be uninterrupted, error-free, or free from harmful components.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, NXTLVL Tech Solutions Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunities arising from your use of the Service.",
      "Our total liability for any claims arising from these Terms or your use of the Service shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.",
    ],
  },
  {
    title: "10. Termination",
    content: [
      "You may terminate your account at any time by contacting us or using the account settings in the Service. Upon termination, your right to use the Service will immediately cease.",
      "We may suspend or terminate your access to the Service at any time if you violate these Terms, if required by law, or if we discontinue the Service. We will provide reasonable notice where possible.",
      "Upon termination, we will delete your personal data and synced financial data within 30 days, except where retention is required by law.",
    ],
  },
  {
    title: "11. Governing Law and Disputes",
    content: [
      "These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    content: [
      "We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on our website and, where appropriate, sending an email notification. Your continued use of the Service after changes take effect constitutes acceptance of the updated Terms.",
    ],
  },
  {
    title: "13. Contact Us",
    content: [
      "If you have questions about these Terms of Service, please contact us:",
      "**NXTLVL Tech Solutions Private Limited**",
      "Email: hello@rikoai.in",
      "Phone: +91 98196 02121",
      "Location: Mumbai, Maharashtra, India",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Terms of Service
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
              Please read these Terms of Service carefully before using the Riko AI
              platform operated by NXTLVL Tech Solutions Private Limited.
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
