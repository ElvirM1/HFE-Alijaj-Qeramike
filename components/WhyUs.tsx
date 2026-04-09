"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Hammer,
  BadgeCheck,
  Headphones,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Cilësi e Garantuar",
    desc: "Çdo punë kalon kontroll të rreptë cilësie. Garanci me shkrim për të gjitha projektet.",
  },
  {
    icon: Clock,
    title: "Respektojmë Afatet",
    desc: "Projektet përfundohen sipas orarit të rënë dakord, pa vonesë dhe pa surpriza.",
  },
  {
    icon: Hammer,
    title: "Ekip Specialist",
    desc: "Çdo anëtar i ekipit ka trajnim të specializuar në fushën e tij të punës.",
  },
  {
    icon: BadgeCheck,
    title: "Materiale Premium",
    desc: "Punojmë vetëm me materiale të certifikuara dhe të testuara nga prodhues të besueshëm.",
  },
  {
    icon: Headphones,
    title: "Mbështetje Post-Punë",
    desc: "Mbetemi në kontakt edhe pas përfundimit të projektit për çdo pyetje ose nevojë.",
  },
  {
    icon: Sparkles,
    title: "Çmim i Drejtë",
    desc: "Oferta transparente pa kosto të fshehura. Vlerë e vërtetë për çdo qindarkë.",
  },
];

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="relative py-28 lg:py-40 overflow-hidden bg-[#111009]"
    >
      {/* Background texture — subtle tile grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[#0F766E]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[#0F766E]/[0.025] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#0F766E]" />
              <span className="text-[#0F766E] text-[11px] font-black uppercase tracking-[0.35em]">
                Pse Ne
              </span>
            </div>
            <h2
              className="font-black leading-[1.04]"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                letterSpacing: "-0.03em",
                color: "#F0EDE8",
              }}
            >
              Çfarë Na <span className="text-[#0F766E]">Dallon</span>
              <br />
              <span style={{ color: "#4A4640" }}>nga të Tjerët</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease }}
            className="hidden lg:block"
          >
            <p className="text-[#6B6560] text-sm leading-relaxed max-w-[260px] text-right">
              Mbi 10 vite punë cilësore në Pejë dhe Kosovë — çdo projekt mbyllet
              me satisfaksion të plotë.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-16 lg:mb-20">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55, ease }}
                className="group relative bg-[#17150F] hover:bg-[#1D1B14] border border-white/[0.06] hover:border-[#0F766E]/30 p-8 xl:p-9 flex flex-col gap-5 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#0F766E]/10 group-hover:bg-[#0F766E]/18 border border-[#0F766E]/20 group-hover:border-[#0F766E]/40 flex items-center justify-center transition-all duration-300">
                  <Icon size={20} className="text-[#0F766E]" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[#F0EDE8] font-bold text-[15px] mb-2.5 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-[#5A5550] text-sm leading-[1.8] group-hover:text-[#6A6560] transition-colors duration-300">
                    {r.desc}
                  </p>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#0F766E]/[0.04] group-hover:bg-[#0F766E]/[0.08] transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-white/[0.06]"
        >
          <div>
            <p className="text-[#F0EDE8] font-bold text-lg mb-1">
              Gati për projektin tuaj?
            </p>
            <p className="text-[#5A5550] text-sm">
              Na kontaktoni sot dhe merrni ofertë falas.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-3 bg-[#0F766E] hover:bg-[#0D9488] text-white font-black text-sm px-8 py-4 transition-colors duration-200"
          >
            049 617-818
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
