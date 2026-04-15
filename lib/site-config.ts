export const siteConfig = {
  name: "Riko",
  tagline: "AI Chat Assistant for Tally Users",
  description:
    "Chat with Tally: The AI CFO for Indian SMEs. Get instant cash flow insights, GST status, and payment reminders via WhatsApp.",
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
      title: "Natural Conversations",
      description:
        "Ask questions in plain English or Hindi and get instant answers from your business data",
    },
    {
      icon: "BarChart3",
      title: "Smart Analytics",
      description:
        "AI-powered insights that predict trends and identify opportunities",
    },
    {
      icon: "Zap",
      title: "Instant Actions",
      description:
        "Automate follow-ups, reminders, and routine business processes",
    },
    {
      icon: "FileText",
      title: "GST Reports",
      description:
        "Generate compliant GST reports and file returns with one click",
    },
    {
      icon: "TrendingUp",
      title: "Financial Insights",
      description:
        "Real-time dashboards showing revenue, expenses, and profitability",
    },
    {
      icon: "Shield",
      title: "Secure & Compliant",
      description:
        "Bank-grade security with complete data privacy and compliance",
    },
  ],
  stats: [
    { value: "15+", label: "Hours", sublabel: "Saved Weekly", description: "Automate reports and data analysis" },
    { value: "30%", label: "", sublabel: "Better Cash Flow", description: "Smart payment tracking and reminders" },
    { value: "87%", label: "", sublabel: "Faster Decisions", description: "Real-time insights at your fingertips" },
    { value: "99.9%", label: "", sublabel: "Data Accuracy", description: "AI-powered validation and checks" },
  ],
  steps: [
    {
      number: "01",
      icon: "Database",
      title: "Connect Tally",
      description:
        "Link your Tally Prime account in minutes. Secure, one-click setup — no IT team needed.",
    },
    {
      number: "02",
      icon: "MessageSquare",
      title: "Ask Riko Anything",
      description:
        "Just type 'What is my profit?' or 'Who owes me money?' in Hindi, English, or 7 regional languages.",
    },
    {
      number: "03",
      icon: "Zap",
      title: "Get Answers via WhatsApp",
      description:
        "Riko replies with cash flow insights, payment reminders, and GST status — right on your phone.",
    },
  ],
  faqs: [
    {
      question: "What is the best AI CFO app for Indian SMEs using Tally?",
      answer:
        "Riko is the leading AI-powered CFO assistant built specifically for Indian SMEs using Tally Prime. It connects directly to your Tally data and provides instant financial insights, GST reports, cash flow analysis, and payment reminders through natural conversation in English and Hindi.",
    },
    {
      question: "How to get MIS reports from Tally on mobile?",
      answer:
        "With Riko, you can access all your Tally MIS reports directly on your mobile phone. Simply connect your Tally Prime account and ask Riko questions like 'Show me this month's P&L' or 'What are my top selling products?' — get instant reports via WhatsApp or the Riko app.",
    },
    {
      question: "Which Tally mobile app is free and secure?",
      answer:
        "Riko offers a free tier that lets you connect your Tally Prime data securely. We use bank-grade encryption, and your data never leaves Indian servers. Setup takes under 5 minutes with no technical knowledge required.",
    },
    {
      question: "Best AI tool for Tally reports and financial forecasting?",
      answer:
        "Riko combines AI-powered analytics with deep Tally integration to deliver not just reports, but predictive insights. Get cash flow forecasts, identify payment risks, track GST compliance, and receive proactive alerts — all through simple conversational queries.",
    },
  ],
  pricing: [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Get started with basic Tally insights",
      features: [
        "Connect 1 Tally company",
        "50 AI queries per month",
        "Basic financial reports",
        "WhatsApp notifications",
        "Email support",
      ],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "₹2,999",
      period: "/month",
      description: "For growing businesses that need more",
      features: [
        "Connect up to 5 Tally companies",
        "Unlimited AI queries",
        "Advanced analytics & forecasting",
        "GST compliance automation",
        "Payment reminder automation",
        "Custom dashboards",
        "Priority support",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited Tally companies",
        "Unlimited everything",
        "Custom AI training on your data",
        "Dedicated account manager",
        "On-premise deployment option",
        "Custom integrations",
        "SLA guarantee",
        "Phone & video support",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ],
};
