"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease },
};

const services = [
  {
    slug: "keramika",
    title: "Shtrim Keramike",
    tagline: "Dysheme, mure & terraca",
    desc: "Shtrim profesional me pllaka qeramike, gur natyral dhe mozaik. Çdo sipërfaqe realizohet me precizion dhe kujdes maksimal.",
    img: "/foto/keramika-marble.png",
    features: [
      "Dysheme të brendshme",
      "Mure banjo & kuzhine",
      "Terraca & ambient të jashtëm",
      "Gur natyral & mozaik",
    ],
    color: "#0F766E",
  },
  {
    slug: "ujsjelles",
    title: "Instalim Ujesjelles",
    tagline: "Banjo, kuzhina & sanitare",
    desc: "Instalim i plotë dhe riparim i sistemeve ujësjellëse dhe sanitare — nga tubacionet deri tek paketimet kompletuese.",
    img: "/foto/02-ujsjelles.png",
    features: [
      "Instalim banjo & WC",
      "Kuzhinë sanitare",
      "Zëvendësim tubacionesh",
      "Boiler & sistem uji të ngrohtë",
    ],
    color: "#0F766E",
  },
  {
    slug: "nxemje-qendrore",
    title: "Ngrohje Qendrore",
    tagline: "Dysheme ngrohese & radiatore",
    desc: "Projektim dhe instalim i sistemeve të ngrohjes qendrore dhe nën dysheme. Efikase, ekonomike dhe të besueshme.",
    img: "/foto/03-nxemje.jpg",
    features: [
      "Ngrohje dysheme (underfloor)",
      "Radiatore & kaldaje",
      "Ngrohje qendrore komplekse",
      "Mirëmbajtje & riparim",
    ],
    color: "#DC2626",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FAFAF8] pt-[72px]">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E4E0DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[#0F766E] text-xs font-black uppercase tracking-[0.3em] mb-4"
            >
              Shërbimet
            </motion.p>
            <h1
              className="font-black text-[#1A1714] mb-6 leading-tight"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Çfarë Ofrojmë
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#6B6460] text-lg leading-relaxed"
            >
              Tri sherbime kryesore qe realizohen nga nje ekip profesional. Cdo
              projekt trajtohet me kujdes dhe profesionalizem te larte.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services alternating rows */}
      {services.map((s, i) => (
        <section
          key={s.slug}
          className={`py-20 lg:py-28 ${i % 2 === 1 ? "bg-white" : "bg-[#FAFAF8]"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className={i % 2 === 1 ? "lg:col-start-2" : ""}
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl shadow-black/8 group">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: 0.1 }}
                className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
              >
                <span
                  className="text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block"
                  style={{ color: s.color }}
                >
                  Shërbim 0{i + 1}
                </span>
                <h2
                  className="font-black text-[#1A1714] mb-3 leading-tight"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {s.title}
                </h2>
                <p className="text-[#9B9490] text-sm font-semibold uppercase tracking-wider mb-5">
                  {s.tagline}
                </p>
                <p className="text-[#6B6460] leading-relaxed mb-8">{s.desc}</p>

                <ul className="space-y-3 mb-8">
                  {s.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: fi * 0.09 + 0.2,
                        ease,
                      }}
                      className="flex items-center gap-3 text-sm text-[#1A1714]"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${s.color}18` }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: s.color }}
                        />
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2.5 font-black text-sm px-7 py-3.5 rounded-2xl text-white transition-all group hover:gap-3.5"
                    style={{ backgroundColor: s.color }}
                  >
                    Shiko Detajet
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-[#1A1714]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-black text-white mb-5"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Keni një projekt?
          </h2>
          <p className="text-white/55 mb-8 text-base leading-relaxed">
            Na kontaktoni për një konsultim falas. Përgjigjemi shpejt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0F766E] hover:bg-[#F0FDF9] font-black px-9 py-4 rounded-2xl transition-colors group"
            >
              Kërko Ofertë Falas
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="tel:+38349617818"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/16 border border-white/20 text-white font-bold px-9 py-4 rounded-2xl transition-colors"
            >
              <Phone size={15} />
              049 617-818
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
