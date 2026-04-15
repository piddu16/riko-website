import type { Metadata } from "next";
import { ScrollAnimate } from "@/components/scroll-animate";

export const metadata: Metadata = {
  title: "Cookie Policy - Riko AI",
  description:
    "Cookie policy for Riko AI by NXTLVL Tech Solutions Private Limited. Learn about the cookies we use and how to manage your preferences.",
};

const sections = [
  {
    title: "1. What Are Cookies?",
    content: [
      "Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website operators useful information about how their site is being used.",
    ],
  },
  {
    title: "2. How We Use Cookies",
    content: [
      "Riko AI uses cookies and similar technologies for the following purposes:",
      "**Essential Cookies:** These cookies are necessary for the website to function properly. They enable core features such as authentication, session management, and security. You cannot opt out of these cookies as the Service will not work without them.",
      "**Performance Cookies:** These cookies collect anonymous information about how visitors use our website, such as which pages are visited most often and whether users encounter error messages. This data helps us improve the performance and usability of the Service.",
      "**Functional Cookies:** These cookies remember your preferences and settings (such as language preference and display options) to provide a more personalized experience.",
      "**Analytics Cookies:** We use analytics services to understand how users interact with the Service. These cookies help us measure traffic, identify usage patterns, and optimize the user experience.",
    ],
  },
  {
    title: "3. Third-Party Cookies",
    content: [
      "Some cookies on our website are placed by third-party services that appear on our pages. We use the following third-party services that may set cookies:",
      "- **Google Analytics:** For website usage analysis and reporting",
      "- **Intercom or similar:** For customer support chat functionality",
      "- **Payment processors:** For secure payment processing",
      "We do not control third-party cookies and recommend reviewing the privacy policies of these services for more information about their data practices.",
    ],
  },
  {
    title: "4. Cookie Duration",
    content: [
      "Cookies can be classified by their duration:",
      "**Session Cookies:** These are temporary cookies that expire when you close your browser. They are used to maintain your session while you navigate the Service.",
      "**Persistent Cookies:** These cookies remain on your device for a set period or until you delete them. They are used to remember your preferences and settings across visits.",
    ],
  },
  {
    title: "5. Managing Cookies",
    content: [
      "You can manage cookies through your browser settings. Most browsers allow you to:",
      "- View and delete existing cookies",
      "- Block cookies from all or specific websites",
      "- Set preferences for certain types of cookies",
      "Please note that blocking or deleting cookies may affect the functionality of the Service. Some features may not work properly if cookies are disabled.",
      "Here are links to cookie management instructions for common browsers:",
      "- Chrome: Settings > Privacy and Security > Cookies",
      "- Firefox: Settings > Privacy & Security > Cookies and Site Data",
      "- Safari: Preferences > Privacy > Cookies and Website Data",
      "- Edge: Settings > Cookies and Site Permissions",
    ],
  },
  {
    title: "6. Do Not Track Signals",
    content: [
      "Some browsers send a \"Do Not Track\" (DNT) signal to websites. At this time, Riko does not respond to DNT signals. However, you can manage your cookie preferences as described above.",
    ],
  },
  {
    title: "7. Changes to This Cookie Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated Cookie Policy on our website with the revised date.",
    ],
  },
  {
    title: "8. Contact Us",
    content: [
      "If you have questions about our use of cookies, please contact us:",
      "**NXTLVL Tech Solutions Private Limited**",
      "Email: hello@rikoai.in",
      "Phone: +91 98196 02121",
      "Location: Mumbai, Maharashtra, India",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <ScrollAnimate variant="fadeUp">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Cookie Policy
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
              This Cookie Policy explains how NXTLVL Tech Solutions Private Limited
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar technologies when you
              visit or use the Riko AI platform.
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
