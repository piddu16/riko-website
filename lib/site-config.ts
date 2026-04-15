export const siteConfig = {
  name: "Riko",
  tagline: "The AI operating layer above Tally",
  description:
    "Riko sits above Tally and converts ledgers, invoices, bills, and ageing into next-best actions. AI chat, payment reminders, MIS, and cash visibility for Indian MSMEs.",
  url: "https://rikoai.in",
  phone: "+91 98196 02121",
  email: "hello@rikoai.in",
  company: "NXTLVL Tech Solutions Private Limited",
  location: "Mumbai, India",
  socials: {
    twitter: "https://twitter.com/rikoai",
    linkedin: "https://linkedin.com/company/rikoai",
  },
  nav: [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Tally Integration", href: "/tally-integration" },
  ],
  footerLinks: {
    product: [
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Tally Integration", href: "/tally-integration" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "#" },
      { label: "FAQ", href: "/#faq" },
      { label: "Tally User Guides", href: "#" },
      { label: "API Documentation", href: "#" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "#" },
    ],
  },
  features: [
    {
      icon: "MessageSquare",
      title: "AI Chat",
      description:
        "Ask anything about your business data in plain language. Hindi, English, or 7+ regional languages.",
    },
    {
      icon: "BarChart3",
      title: "Outstanding Tracker",
      description:
        "Receivables by party with ageing, status, and priority. See who owes you what, instantly.",
    },
    {
      icon: "Zap",
      title: "AI Payment Reminders",
      description:
        "Batch reminders via WhatsApp and Email. Auto follow-ups on a schedule you control.",
    },
    {
      icon: "FileText",
      title: "Owner MIS Reports",
      description:
        "Branded MIS reports ready for investors, lenders, or your CA. Scheduled or on demand.",
    },
    {
      icon: "TrendingUp",
      title: "Inventory Alerts",
      description:
        "Slow-moving stock, dead inventory, and reorder triggers surfaced automatically.",
    },
    {
      icon: "Shield",
      title: "Conversational BI",
      description:
        "Chat with your books. No SQL, no pivot tables, no training. Just answers.",
    },
  ],
  // Real traction from investor deck
  stats: [
    { value: "500+", label: "", sublabel: "Companies onboarded", description: "Across India" },
    { value: "3,300+", label: "", sublabel: "Active users", description: "Using Riko daily" },
    { value: "5+ min", label: "", sublabel: "Engagement depth", description: "Average session" },
    { value: "~30%", label: "", sublabel: "Tally partner access", description: "Distribution coverage" },
  ],
  // Read → Interpret → Act → Expand from the deck
  steps: [
    {
      number: "01",
      icon: "Database",
      title: "Read",
      description:
        "Riko pulls books, invoices, bills, ledgers, and party context directly from your Tally — securely and read-only.",
    },
    {
      number: "02",
      icon: "Brain",
      title: "Interpret",
      description:
        "AI detects overdues, blocked cash, reporting gaps, and priority accounts before they become problems.",
    },
    {
      number: "03",
      icon: "Zap",
      title: "Act",
      description:
        "Send reminders, summaries, nudges, and owner-ready tasks — via WhatsApp, email, or the dashboard.",
    },
    {
      number: "04",
      icon: "TrendingUp",
      title: "Expand",
      description:
        "Grow into payables, MIS, working capital, and broader finance operations as your business scales.",
    },
  ],
  faqs: [
    {
      question: "What exactly does Riko do?",
      answer:
        "Riko sits above your Tally and turns your ledgers, invoices, bills, and ageing into next-best actions. You get AI chat to ask anything about your business, automated payment reminders, outstanding trackers, MIS reports, and inventory alerts — all without touching Tally itself.",
    },
    {
      question: "Does Riko modify my Tally data?",
      answer:
        "Never. Riko reads from Tally through a secure read-only connection. We can never create, edit, or delete entries in your Tally. Your books stay exactly as your CA left them.",
    },
    {
      question: "Which languages does Riko support?",
      answer:
        "English, Hindi, Tamil, Marathi, Gujarati, Bengali, Telugu, and Kannada. Ask 'Kitna profit hua October mein?' or 'Who owes me more than 30 days?' — Riko understands both.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Under 5 minutes. Install the lightweight Riko Connector on the machine running Tally Prime, authenticate, and you're live. No IT team needed.",
    },
    {
      question: "Where is my data stored?",
      answer:
        "100% on Indian servers, encrypted with AES-256 at rest and in transit. SOC 2 Type II certified. We never sell, share, or use your data to train models for other customers.",
    },
  ],
  // Real two-tier pricing from slide 8
  pricing: [
    {
      name: "Basic",
      price: "₹5,000",
      period: "/year",
      priceNote: "≈ ₹417 / month",
      description: "For solo founders running a single company on Tally",
      features: [
        "1 user, 1 Tally company",
        "Receivables dashboard",
        "AI chat (standard)",
        "Basic payment reminders",
        "Standard reports",
        "Owner summary digest",
      ],
      cta: "Start with Basic",
      highlighted: false,
    },
    {
      name: "Teams",
      price: "₹20,000",
      period: "/year",
      priceNote: "≈ ₹1,667 / month",
      description: "For growing finance teams managing multiple entities",
      features: [
        "3 users with role-based access (RBAC)",
        "Up to 3 companies + combined data view",
        "2,000 shared AI credits",
        "Branded / custom report downloads",
        "Credit limits & party tagging",
        "Custom comments & push-to-Tally",
        "Advanced automation & MIS",
        "WhatsApp + Email workflows",
      ],
      cta: "Start with Teams",
      highlighted: true,
    },
  ],
  // Real co-founders from slide 12
  team: [
    {
      name: "Bhaskara Pratap Seth",
      role: "Co-Founder, GTM",
      linkedin: "https://linkedin.com/in/bhaskara-seth",
    },
    {
      name: "Susse Rajasekara",
      role: "Co-Founder, Product",
      linkedin: "https://linkedin.com/in/susse",
    },
    {
      name: "Harshvardhan Vasudeva",
      role: "Co-Founder, Ops",
      linkedin: "https://linkedin.com/in/harshvv",
    },
    {
      name: "Yogesh Kumar Sahu",
      role: "Tech Lead",
      linkedin: "https://linkedin.com/in/yogesh-kumar-sahu",
    },
  ],
};
