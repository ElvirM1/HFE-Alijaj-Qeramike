"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

function Stat({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const [val, ref] = useAnimatedCounter(end, 2000, suffix);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl xl:text-4xl font-black text-[#f0ede8] leading-none tabular-nums">
        {val}
      </div>
      <div className="text-xs font-semibold text-[#6b6560] uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      if (parallaxRef.current)
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0c0d10]"
    >
      {/* Background image */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=70"
          alt="Punë profesionale HFE-ALIJAJ"
          fill
          priority
          className="object-cover opacity-[0.14]"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0c0d10_0%,#0c0d1090_40%,#0c0d10aa_70%,#0c0d10_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0d10_0%,transparent_60%)]" />

      {/* Decorative amber glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Vertical rule — editorial accent */}
      <div className="absolute left-8 md:left-12 top-32 bottom-32 w-px bg-[#0F766E]/20 hidden lg:block" />
      <div className="absolute left-8 md:left-12 top-32 h-32 w-px bg-[#0F766E]/70 hidden lg:block" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-24 pt-24 lg:pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-8 h-px bg-[#0F766E]" />
              <span className="text-[#0F766E] text-xs font-black uppercase tracking-[0.3em]">
                Pejë, Kosovë — Est. 2014
              </span>
            </motion.div>

            {/* Headline — huge editorial type */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="font-black text-[#f0ede8] leading-[0.96] mb-8"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Ekspert <span className="text-[#0F766E]">Shtrim</span>
              <br />
              Pllakash &<br />
              <span className="text-[#6b6560]">Instalime.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-[#a09b94] text-lg sm:text-xl leading-relaxed max-w-104 mb-10"
            >
              Qeramikë, ujësjellës dhe nxemje qendrore — punë e garantuar çmime
              konkurruese.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-3 bg-[#0F766E] hover:bg-[#f5b849] text-[#0c0d10] px-8 py-4 rounded-2xl font-black text-base shadow-2xl shadow-[#0F766E]/30 hover:shadow-[#0F766E]/50 transition-all duration-200 group"
              >
                Kërko Ofertë Falas
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#0F766E]/30 text-[#f0ede8] px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-200 group"
              >
                <Play size={14} className="text-[#0F766E]" />
                Shiko Punët Tona
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68 }}
              className="flex items-center gap-8 sm:gap-12 pt-8 border-t border-white/8"
            >
              <Stat end={100} suffix="+" label="Projekte" />
              <div className="w-px h-10 bg-white/10" />
              <Stat end={10} suffix="+" label="Vite" />
              <div className="w-px h-10 bg-white/10" />
              <Stat end={100} suffix="%" label="Klientë të Kënaqur" />
            </motion.div>
          </motion.div>

          {/* Right — brand image card (visible on all sizes) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex items-center justify-center order-first lg:order-last"
          >
            <div className="w-52 sm:w-72 lg:w-full lg:max-w-120 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(15,118,110,0.35)] ring-2 ring-[#0F766E]">
              <Image
                src="/hfe-alijaj-fixed.png"
                alt="HFE-Alijaj — Qeramik, Ujësjellës, Nxemje Qendrore"
                width={1065}
                height={1065}
                priority
                className="w-full h-auto block"
                sizes="(max-width: 640px) 208px, (max-width: 1024px) 288px, 480px"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom image strip — 4 work photos */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="relative z-10 w-full overflow-hidden"
      >
        <div className="flex h-28 sm:h-36 lg:h-44">
          {[
            {
              src: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&q=80",
              alt: "Shtrim pllakash",
            },
            {
              src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
              alt: "Banjë moderne",
            },
            {
              src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
              alt: "Ujësjellës",
            },
            {
              src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
              alt: "Nxemje",
            },
          ].map((img, i) => (
            <div
              key={i}
              className="relative flex-1 overflow-hidden first:rounded-tl-2xl last:rounded-tr-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i < 2}
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-[#0c0d10]/30" />
              {i < 3 && (
                <div className="absolute top-0 right-0 w-px h-full bg-[#0c0d10]/80" />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Phone floating bar on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="md:hidden fixed bottom-20 left-4 right-4 z-40 flex"
      >
        <a
          href="tel:+38349617818"
          className="flex-1 flex items-center justify-center gap-2 bg-[#0F766E] text-[#0c0d10] py-3.5 rounded-2xl font-black text-sm shadow-2xl shadow-[#0F766E]/40"
        >
          <Phone size={15} />
          049 617-818 — Telefono Tani
        </a>
      </motion.div>
    </section>
  );
}
