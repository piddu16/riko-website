import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import LegalLayout, { LegalContact } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Cookie Policy - Riko AI",
  description:
    "Cookie policy for Riko AI by NXTLVL Tech Solutions Private Limited. What cookies we use and how to manage them.",
};

const sections = [
  {
    title: "1. What are cookies?",
    content: [
      "Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit a website. They're widely used to make websites work more efficiently, provide a better user experience, and give operators useful information about how their site is used.",
    ],
  },
  {
    title: "2. How we use cookies",
    content: [
      "Riko uses cookies and similar technologies for the following purposes:",
      "**Essential cookies:** necessary for the site to function. They enable authentication, session management, and security. You cannot opt out of these — the Service will not work without them.",
      "**Performance cookies:** anonymous data about how visitors use our website (most-visited pages, errors encountered). Helps us improve performance and usability.",
      "**Functional cookies:** remember preferences and settings (language, display options) for a more personalised experience.",
      "**Analytics cookies:** measure traffic, identify usage patterns, and optimise the user experience.",
    ],
  },
  {
    title: "3. Third-party cookies",
    content: [
      "Some cookies on our website are placed by third-party services:",
      "- **Google Analytics** — for website usage analysis and reporting",
      "- **Intercom (or similar)** — for customer support chat",
      "- **Payment processors** — for secure payment processing",
      "We do not control third-party cookies. Please review the privacy policies of those services for more information.",
    ],
  },
  {
    title: "4. Cookie duration",
    content: [
      "Cookies can be classified by duration:",
      "**Session cookies** — temporary, expire when you close your browser. Used to maintain your session while navigating the Service.",
      "**Persistent cookies** — remain on your device for a set period or until you delete them. Used to remember preferences across visits.",
    ],
  },
  {
    title: "5. Managing cookies",
    content: [
      "You can manage cookies through your browser settings. Most browsers allow you to:",
      "- View and delete existing cookies",
      "- Block cookies from all or specific websites",
      "- Set preferences for certain types of cookies",
      "Blocking or deleting cookies may affect the functionality of the Service. Some features may not work properly without them.",
      "Browser-specific instructions:",
      "- **Chrome:** Settings → Privacy and Security → Cookies",
      "- **Firefox:** Settings → Privacy & Security → Cookies and Site Data",
      "- **Safari:** Preferences → Privacy → Cookies and Website Data",
      "- **Edge:** Settings → Cookies and Site Permissions",
    ],
  },
  {
    title: "6. Do Not Track signals",
    content: [
      'Some browsers send a "Do Not Track" (DNT) signal. At this time, Riko does not respond to DNT signals. You can manage your cookie preferences as described above.',
    ],
  },
  {
    title: "7. Changes to this policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We will post the updated policy on our website with a revised date.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title={<>Cookie Policy</>}
        subtitle="How NXTLVL Tech Solutions Private Limited uses cookies and similar technologies when you use Riko."
      />
      <LegalLayout sections={sections} lastUpdated="April 2026" />
      <LegalContact
        heading="Questions about cookies?"
        body="Contact NXTLVL Tech Solutions Private Limited — hello@rikoai.in · +91 98196 02121 · Mumbai, Maharashtra, India."
      />
    </main>
  );
}
