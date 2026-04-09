"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ArrowLeft, CheckCircle } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const steps = [
  {
    num: "01",
    title: "Konsultim & Matje",
    desc: "Vizitojmë vendin, marrim masat dhe diskutojmë materialet dhe stilin me klientin.",
  },
  {
    num: "02",
    title: "Zgjedhja e Materialeve",
    desc: "Ju ndihmojmë të zgjidhni pllakat e duhura, bazuar në buxhetin dhe estetikën tuaj.",
  },
  {
    num: "03",
    title: "Pergatitja e Siperfaqes",
    desc: "Rrafshojmë dhe përgatisim sipërfaqen për aderim optimal të pllakave.",
  },
  {
    num: "04",
    title: "Shtrim & Mbarimi",
    desc: "Shtrojmë pllakat me precizion, fugojmë dhe pastrojmë — rezultat i përsosur çdo herë.",
  },
];

const gallery = [
  { src: "/foto/Para1.jpeg", label: "Fillimi i projektit" },
  { src: "/foto/procesi1.jpeg", label: "Procesi i punës" },
  { src: "/foto/rezultati1.jpeg", label: "Rezultati final" },
  {
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.21%20(1).jpeg",
    label: "Shtrim profesional",
  },
  {
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.21%20(3).jpeg",
    label: "Rezultat Final",
  },
  {
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.21%20(5).jpeg",
    label: "Shkallë premium",
  },
];

const gallery120 = [
  { src: "/keramika120-280/fillimi1.jpeg", label: "Fillimi" },
  { src: "/keramika120-280/procesi1.jpeg", label: "Procesi" },
  { src: "/keramika120-280/rez1.jpeg", label: "Rezultati" },
  // {
  //   src: "/keramika120-280/WhatsApp%20Image%202026-04-07%20at%2023.36.18.jpeg",
  //   label: "Finalizim",
  // },
];

export default function KeramikaPage() {
  return (
    <main className="bg-[#FAFAF8] pt-[72px]">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[#6B6460] hover:text-[#0F766E] transition-colors text-sm font-semibold"
        >
          <ArrowLeft size={14} /> Shërbimet
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-[#F0FDF9] border border-[#0F766E]/20 text-[#0F766E] text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
                Shërbim 01
              </span>
              <h1
                className="font-black text-[#1A1714] mb-6 leading-tight"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Shtrim Keramike
                <br />
                <span className="text-[#0F766E]">Profesionale</span>
              </h1>
              <p className="text-[#6B6460] text-lg leading-relaxed mb-8">
                Shtrim me pllaka qeramike, gur natyral dhe mozaik per dysheme,
                mure, banjo, kuzhina dhe ambiente te jashtme. Cdo meter katrore
                realizohet me precizitet dhe paisje moderne.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Dysheme & terraca",
                  "Mure banjo & kuzhine",
                  "Gur natyral & mozaik dekorativ",
                  "Mozaik & pllaka dekorative",
                  "Fugim profesional & pastrim",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle
                      size={16}
                      className="text-[#0F766E] shrink-0"
                    />
                    <span className="text-sm text-[#1A1714]">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0F766E] hover:bg-[#0D9488] text-white font-black px-8 py-4 rounded-2xl transition-colors group"
                >
                  Kërko Ofertë{" "}
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:+38349617818"
                  className="inline-flex items-center justify-center gap-2.5 bg-white border border-[#E4E0DB] text-[#1A1714] font-bold px-8 py-4 rounded-2xl hover:border-[#0F766E]/40 transition-colors"
                >
                  <Phone size={14} className="text-[#0F766E]" /> 049 617-818
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/10">
                <Image
                  src="/foto/keramika-marble.png"
                  alt="Shtrim keramike premium"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-14"
          >
            <p className="text-[#0F766E] text-xs font-black uppercase tracking-[0.3em] mb-3">
              Procesi
            </p>
            <h2
              className="font-black text-[#1A1714]"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                letterSpacing: "-0.025em",
              }}
            >
              Si Punojmë
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E4E0DB]"
              >
                <div className="text-5xl font-black text-[#0F766E]/15 leading-none mb-4">
                  {s.num}
                </div>
                <h3 className="font-black text-[#1A1714] mb-2">{s.title}</h3>
                <p className="text-[#6B6460] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery � Real project photos */}
      <section className="py-20 lg:py-28 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <p className="text-[#0F766E] text-[11px] font-black uppercase tracking-[0.3em] mb-3">
                Shembuj
              </p>
              <h2
                className="font-black text-[#1C1A17]"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                Punime të Realizuara
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-[#0F766E] font-bold text-sm hover:gap-3 transition-all"
            >
              Shiko të gjitha <ArrowRight size={13} />
            </Link>
          </motion.div>

          {/* Main photo grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-10">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden bg-[#E0DCD5] shadow-sm hover:shadow-lg transition-shadow duration-300"
                style={{ borderRadius: 0 }}
              >
                <div className="aspect-square relative">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 120x280 special row */}
          <div className="border-t border-[#E0DCD5] pt-10">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-6 bg-[#0F766E]" />
              <span className="text-[11px] font-black text-[#0F766E] uppercase tracking-[0.3em]">
                Pllaka Speciale
              </span>
              <span className="inline-flex items-center text-[9px] font-black bg-[#0F766E] text-white px-2.5 py-1 rounded-full tracking-wide">
                120×280 cm
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {gallery120.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="group relative overflow-hidden bg-[#E0DCD5] shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <span className="text-[9px] font-black text-white/0 group-hover:text-white uppercase tracking-widest transition-colors duration-300">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F766E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2
            className="font-black text-2xl sm:text-3xl mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Keni një projekt për shtrim keramike?
          </h2>
          <p className="text-white/80 mb-8">
            Na kontaktoni për ofertë falas. Matje falas në terren.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-white text-[#0F766E] font-black px-8 py-4 rounded-2xl hover:bg-[#F0FDF9] transition-colors group"
          >
            Merr Ofertë Falas{" "}
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
