"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/apple-touch-icon.png"
            alt="Riko"
            width={32}
            height={32}
            priority
            className="h-8 w-8"
          />
          <span className="text-xl font-bold text-slate-900">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop right-side buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/demo"
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            Try Demo
          </Link>
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            <Calendar className="h-4 w-4" />
            Book a Demo
          </Link>
          <Link
            href="/sign-in"
            className="px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-600"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile slide-out drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[300px] flex-col bg-white shadow-xl lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src="/apple-touch-icon.png"
                    alt="Riko"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  <span className="text-xl font-bold text-slate-900">
                    {siteConfig.name}
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="flex flex-col gap-1">
                  {siteConfig.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="my-4 border-t border-slate-100" />

                <div className="flex flex-col gap-2">
                  <Link
                    href="/sign-in"
                    className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/demo"
                    className="rounded-lg border border-slate-300 px-4 py-2.5 text-center text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    Try Demo
                  </Link>
                  <Link
                    href="/book-demo"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Calendar className="h-4 w-4" />
                    Book a Demo
                  </Link>
                  <Link
                    href="/get-started"
                    className="rounded-lg bg-green-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-green-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
