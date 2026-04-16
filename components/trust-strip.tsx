"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Server, Database } from "lucide-react";

const badges = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: Lock, label: "AES-256 Encrypted" },
  { icon: Server, label: "Indian Servers Only" },
  { icon: Database, label: "Read-only Tally Access" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-100 bg-[#F8FAF9] py-6">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <b.icon className="h-4 w-4 text-[#16A34A]" />
              <span className="text-xs font-medium text-slate-600">{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
