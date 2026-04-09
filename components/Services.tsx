"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Shtrim Pllakash",
    subtitle: "& Qeramike",
    description: "Shtrim profesional i pllakave dhe qeramikës për çdo lloj hapësire — banjë, kuzhinë, dysheme dhe terasa. Punë e saktë me materiale premium.",
    features: ["Pllaka dysheme & muri", "Qeramikë banjoje & kuzhine", "Mozaik & dizajn special", "Fugë epoksi profesionale"],
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=85",
    imageAlt: "Shtrim pllakash profesional",
    accent: "#0F766E",
    flip: false,
  },
  {
    number: "02",
    title: "Ujësjellës",
    subtitle: "& Sanitari",
    description: "Instalime hidraulike të plota — tubacione uji, montim sanitarësh, boiler dhe sisteme filtrimi. Shërbim i shpejtë me garanci.",
    features: ["Instalime tubacionesh të reja", "Montim sanitarësh & armaturtë", "Riparime emergjente 24h", "Sisteme filtrimi & boiler"],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=85",
    imageAlt: "Instalim ujësjellësi profesional",
    accent: "#60a5fa",
    flip: true,
  },
  {
    number: "03",
    title: "Nxemje",
    subtitle: "Qendrore",
    description: "Projektim dhe instalim i sistemeve të nxemjes qendrore. Radiatorë, ngrohje dysheme dhe boiler — komfort maksimal, efikasitet energjetik.",
    features: ["Instalim boileri & radiatorësh", "Ngrohje dysheme (underfloor)", "Mirëmbajtje & balanc sistemi", "Efikasitet energjetik maksimal"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    imageAlt: "Ngrohje dysheme instalim profesional",
    accent: "#f87171",
    flip: false,
  },
];

function ServiceRow({ s, index }: { s: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`grid lg:grid-cols-2 gap-0 items-stretch ${index > 0 ? "border-t border-white/6" : ""}`}
    >
      {/* Image */}
      <div className={`relative h-64 sm:h-80 lg:h-auto lg:min-h-[420px] ${s.flip ? "lg:order-2" : ""} overflow-hidden`}>
        <Image
          src={s.image}
          alt={s.imageAlt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,#13151c_100%)] lg:bg-none" />
        {/* Big number overlay */}
        <div
          className="absolute bottom-4 right-4 lg:top-6 lg:right-6 text-8xl font-black leading-none select-none pointer-events-none"
          style={{ color: s.accent, opacity: 0.18, fontSize: "clamp(5rem,10vw,9rem)" }}
        >
          {s.number}
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center px-8 sm:px-12 py-12 lg:py-16 bg-[#13151c] ${s.flip ? "lg:order-1" : ""}`}>
        <div className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: s.accent }}>
          Shërbimi {s.number}
        </div>
        <h3 className="font-black text-[#f0ede8] leading-tight mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}>
          {s.title}
          <br />
          <span className="text-[#6b6560]">{s.subtitle}</span>
        </h3>
        <p className="text-[#7a7570] text-base leading-relaxed mb-8 max-w-sm">{s.description}</p>
        <ul className="space-y-2.5 mb-10">
          {s.features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-[#a09b94]">
              <CheckCircle2 size={14} className="shrink-0" style={{ color: s.accent }} />
              {f}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          className="inline-flex items-center gap-2 font-bold text-sm group w-fit"
          style={{ color: s.accent }}
        >
          Kërko Ofertë
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative bg-[#0c0d10]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-[#0F766E]" />
              <span className="text-[#0F766E] text-xs font-black uppercase tracking-[0.3em]">Çfarë Bëjmë</span>
            </div>
            <h2 className="font-black text-[#f0ede8] leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}>
              Shërbime me<br />
              <span className="text-[#6b6560]">Cilësi të Lartë</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-[#0F766E]/40 text-[#a09b94] hover:text-[#0F766E] px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 self-start sm:self-end"
          >
            Shiko të Gjitha Punët <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      {/* Service rows */}
      <div className="max-w-7xl mx-auto border border-white/6 rounded-2xl overflow-hidden mx-4 sm:mx-6 lg:mx-auto lg:px-0">
        {services.map((s, i) => (
          <ServiceRow key={s.number} s={s} index={i} />
        ))}
      </div>

      <div className="pb-20 lg:pb-28" />
    </section>
  );
}
