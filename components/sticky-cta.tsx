"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero (~800px)
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6">
            <p className="hidden text-sm text-slate-600 sm:block">
              <span className="font-semibold text-[#0B1F12]">Try Riko free</span> — connect Tally in 5 minutes
            </p>

            <div className="flex flex-1 items-center justify-end gap-3">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B1F12] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#16A34A]"
              >
                Get started free <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => setDismissed(true)}
                className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
