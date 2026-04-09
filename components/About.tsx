"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const stats = [
  { end: 100, suffix: "+", label: "Projekte të Kompletara" },
  { end: 10, suffix: "+", label: "Vite Eksperiencë" },
  { end: 100, suffix: "%", label: "Klientë të Kënaqur" },
  { end: 3, suffix: "", label: "Shërbime Kryesore" },
];

function AnimatedStat({ end, suffix, label, delay }: { end: number; suffix: string; label: string; delay: number }) {
  const [val, ref] = useAnimatedCounter(end, 1800, suffix);
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="border-l-2 border-[#0F766E]/40 pl-5 py-2"
    >
      <div className="text-3xl xl:text-4xl font-black text-[#f0ede8] leading-none tabular-nums">{val}</div>
      <div className="text-xs font-medium text-[#6b6560] mt-1">{label}</div>
    </motion.div>
  );
}

const qualities = [
  { title: "Ekip i Kualifikuar", desc: "Punonjës me eksperiencë dhe trajnim të vazhdueshëm." },
  { title: "Materiale Premium", desc: "Vetëm materiale të certifikuara me cilësi të lartë." },
  { title: "Respektim Afatesh", desc: "Çdo projekt brenda afatit, pa vonesë." },
  { title: "Garanci Punës", desc: "Garanci për çdo punë të realizuar nga ekipi ynë." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0c0d10] overflow-hidden">
      {/* Faint amber blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#0F766E]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-6 h-px bg-[#0F766E]" />
          <span className="text-[#0F766E] text-xs font-black uppercase tracking-[0.3em]">Rreth Nesh</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" ref={ref}>
          {/* Left — Images stacked */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=85"
                alt="Punë profesionale HFE-ALIJAJ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0c0d10]/50 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#13151c] border border-white/8 rounded-2xl px-6 py-5 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0F766E]/15 flex items-center justify-center text-xl">🏆</div>
                <div>
                  <div className="text-2xl font-black text-[#f0ede8]">10+</div>
                  <div className="text-[#6b6560] text-xs font-medium">Vite Suksesi</div>
                </div>
              </div>
            </motion.div>

            {/* Corner overlay image */}
            <div className="absolute -top-5 -left-5 w-28 h-28 rounded-xl overflow-hidden border-4 border-[#0c0d10] shadow-xl hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=80"
                alt="Shtrim pllakash detail"
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          </motion.div>

          {/* Right — Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-black text-[#f0ede8] leading-tight mb-6" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Profesionalizëm{" "}
              <span className="text-[#0F766E]">i Vërtetë</span>
              <br />
              <span className="text-[#6b6560]">në Çdo Projekt</span>
            </h2>

            <p className="text-[#7a7570] text-base leading-relaxed mb-4">
              HFE-ALIJAJ është kompani me mbi{" "}
              <strong className="text-[#f0ede8]">10 vite eksperiencë</strong> në fushën e ndërtimit dhe instalimeve. Kemi realizuar mbi <strong className="text-[#f0ede8]">100 projekte</strong> duke ofruar cilësinë më të lartë.
            </p>
            <p className="text-[#7a7570] text-base leading-relaxed mb-10">
              Qasja jonë profesionale dhe vëmendja ndaj çdo detaji na kanë bërë partnerin e zgjedhur nga klientët.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((s, i) => (
                <AnimatedStat key={s.label} {...s} delay={0.2 + i * 0.1} />
              ))}
            </div>

            {/* Quality bullets */}
            <div className="grid sm:grid-cols-2 gap-3">
              {qualities.map((q) => (
                <div key={q.title} className="flex items-start gap-3 bg-[#13151c] border border-white/6 rounded-xl p-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F766E] mt-2 shrink-0" />
                  <div>
                    <div className="text-[#f0ede8] text-sm font-bold mb-0.5">{q.title}</div>
                    <div className="text-[#6b6560] text-xs leading-relaxed">{q.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-6 text-sm text-[#6b6560]">
              <MapPin size={13} className="text-[#0F766E]" />
              <span>Pejë, Kosovë — Shërbim në tërë vendin</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
