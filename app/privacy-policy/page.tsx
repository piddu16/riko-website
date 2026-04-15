import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import LegalLayout, { LegalContact } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy - Riko AI",
  description:
    "Privacy policy for Riko AI by NXTLVL Tech Solutions Private Limited. How we collect, use, and protect your data.",
};

const sections = [
  {
    title: "1. Information we collect",
    content: [
      "We collect information you provide directly to us when you create an account, connect your Tally data, use our services, or contact us for support.",
      "**Account information:** when you register, we collect your name, email address, phone number, company name, and GSTIN (if provided).",
      "**Tally data:** when you connect Tally Prime or Tally ERP 9, we access and sync your financial data including ledgers, vouchers, invoices, stock items, and related records. This data is accessed through read-only connections and is used solely to provide you with insights and reports.",
      "**Usage data:** we automatically collect information about how you interact with Riko, including queries asked, features used, device information, and IP addresses.",
      "**Communication data:** when you contact our support team, we retain records of your communications to provide better service.",
    ],
  },
  {
    title: "2. How we use your information",
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
    title: "3. Data sharing and disclosure",
    content: [
      "We do not sell, rent, or trade your personal or financial data to any third party. Your data belongs to you.",
      "We may share information only in the following limited circumstances:",
      "- **Service providers:** trusted infrastructure providers (cloud hosting, communication services) who process data on our behalf under strict contractual obligations.",
      "- **Legal requirements:** if required by law, regulation, legal process, or governmental request.",
      "- **Business transfers:** in the event of a merger, acquisition, or sale of assets, user data may be transferred as part of that transaction. We will notify you before your data becomes subject to a different privacy policy.",
      "- **With your consent:** we may share information with third parties when you explicitly authorize us to do so.",
    ],
  },
  {
    title: "4. Data security",
    content: [
      "We implement industry-standard security measures to protect your data:",
      "- All data in transit is encrypted using TLS 1.3",
      "- All data at rest is encrypted using AES-256",
      "- Our infrastructure is hosted entirely on servers located in India",
      "- We maintain SOC 2 Type II compliance",
      "- We conduct regular third-party security audits and penetration testing",
      "- Access to production systems is restricted to authorized personnel with multi-factor authentication",
      "- We implement comprehensive logging and monitoring for security events",
      "No method of electronic storage or transmission is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.",
    ],
  },
  {
    title: "5. Data retention",
    content: [
      "We retain your data for as long as your account is active or as needed to provide services. If you delete your account, we will remove your personal data and Tally-synced data within 30 days, except where retention is required by law.",
      "Aggregated, anonymized data that cannot be used to identify you may be retained for analytical purposes.",
    ],
  },
  {
    title: "6. Your rights",
    content: [
      "You have the following rights regarding your data:",
      "- **Access:** request a copy of the personal data we hold about you",
      "- **Correction:** request correction of inaccurate or incomplete data",
      "- **Deletion:** request deletion of your personal data",
      "- **Export:** request an export of your data in a portable format",
      "- **Opt-out:** unsubscribe from marketing communications at any time",
      "To exercise any of these rights, contact us at hello@rikoai.in.",
    ],
  },
  {
    title: "7. Cookies and tracking",
    content: [
      "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver relevant content. See our Cookie Policy for detailed information about the cookies we use and how to manage your preferences.",
    ],
  },
  {
    title: "8. Children's privacy",
    content: [
      "Riko is a business tool and is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from children.",
    ],
  },
  {
    title: "9. Changes to this policy",
    content: [
      "We may update this privacy policy from time to time. We will notify you of material changes by posting the updated policy on our website and, where appropriate, sending you an email notification. Your continued use of Riko after changes take effect constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy Policy</>}
        subtitle="How NXTLVL Tech Solutions Private Limited collects, uses, stores, and protects your information when you use Riko."
      />
      <LegalLayout sections={sections} lastUpdated="April 2026" />
      <LegalContact
        heading="Questions about your data?"
        body="Contact NXTLVL Tech Solutions Private Limited — hello@rikoai.in · +91 98196 02121 · Mumbai, Maharashtra, India."
      />
    </main>
  );
}
