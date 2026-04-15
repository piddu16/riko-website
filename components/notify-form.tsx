"use client";

import { ArrowRight } from "lucide-react";

export default function NotifyForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B1F12] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
      >
        Notify me <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
