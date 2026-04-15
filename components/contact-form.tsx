"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98XXX XXXXX"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700">
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Your company name"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us how we can help..."
          className="mt-1.5 w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
}
