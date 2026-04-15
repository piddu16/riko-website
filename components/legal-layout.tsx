"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface LegalSection {
  title: string;
  content: string[];
}

interface LegalLayoutProps {
  sections: LegalSection[];
  lastUpdated: string;
}

// Render **bold** markdown-style bold inline
function renderLine(line: string) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-[#0B1F12]">
          {p.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

export default function LegalLayout({ sections, lastUpdated }: LegalLayoutProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-sm text-slate-500"
        >
          Last updated · {lastUpdated}
        </motion.p>

        <div className="mt-10 space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <h2 className="text-xl font-semibold tracking-tight text-[#0B1F12]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.content.map((para, j) => {
                  // Lists: lines starting with "- "
                  if (para.startsWith("- ")) {
                    return (
                      <div key={j} className="flex items-start gap-3 pl-1">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22C55E]" />
                        <p className="text-sm leading-7 text-slate-600">{renderLine(para.slice(2))}</p>
                      </div>
                    );
                  }
                  return (
                    <p key={j} className="text-sm leading-7 text-slate-600">
                      {renderLine(para)}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalContact({ heading, body }: { heading?: ReactNode; body: string }) {
  return (
    <section className="border-t border-slate-100 bg-[#F8FAF9] py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-lg font-semibold text-[#0B1F12]">
          {heading ?? "Questions?"}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
      </div>
    </section>
  );
}
