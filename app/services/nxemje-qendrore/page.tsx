"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ArrowLeft, CheckCircle } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Projektim & Llogaritje",
    desc: "Llogarisim kapacitetin e nevojshëm të ngrohjes bazuar në sipërfaqe dhe izolim.",
  },
  {
    num: "02",
    title: "Instalim Tubacionesh",
    desc: "Shtrojmë tubacionet e ngrohjes nën dysheme me shpërndarje optimale dhe uniforme.",
  },
  {
    num: "03",
    title: "Lidhja me Kaldajen",
    desc: "Lidhim sistemin me kaldajën ose burimin tjetër të ngrohjes dhe testojmë presionin.",
  },
  {
    num: "04",
    title: "Finalizim",
    desc: "Instalojmë termostat dhe dorëzojmë punën me garanci.",
  },
];

export default function NxemjePage() {
  return (
    <main className="bg-[#FAFAF8] pt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[#6B6460] hover:text-red-600 transition-colors text-sm font-semibold"
        >
          <ArrowLeft size={14} /> Shërbimet
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-red-50 border border-red-200 text-red-600 text-xs font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
                Shërbim 03
              </span>
              <h1
                className="font-black text-[#1A1714] mb-6 leading-tight"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Ngrohje
                <br />
                <span className="text-red-600">Qendrore</span>
              </h1>
              <p className="text-[#6B6460] text-lg leading-relaxed mb-8">
                Projektim dhe instalim i sistemeve te ngrohjes qendrore dhe
                ngrohjes dysheme. Zgjidhje efikase dhe ekonomike per shtepite
                dhe bizneset.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Ngrohje dysheme (underfloor heating)",
                  "Kaldajë muri & tokësore",
                  "Radiatore & termostate",
                  "Termostat inteligjent",
                  "Mirëmbajtje periodike",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-red-600 shrink-0" />
                    <span className="text-sm text-[#1A1714]">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-2xl transition-colors group"
                >
                  Kërko Ofertë{" "}
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="tel:+38349617818"
                  className="inline-flex items-center justify-center gap-2.5 bg-white border border-[#E4E0DB] text-[#1A1714] font-bold px-8 py-4 rounded-2xl hover:border-red-300 transition-colors"
                >
                  <Phone size={14} className="text-red-600" /> 049 617-818
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
                  src="/foto/03-nxemje.jpg"
                  alt="Ngrohje qendrore dysheme"
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
            className="max-w-xl mb-14"
          >
            <p className="text-red-600 text-xs font-black uppercase tracking-[0.3em] mb-3">
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
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E4E0DB]"
              >
                <div className="text-5xl font-black leading-none mb-4 text-red-600/15">
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

      {/* CTA */}
      <section className="py-16 bg-[#1C1A17]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2
            className="font-black text-2xl sm:text-3xl mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Doni një sistem ngrohje modern?
          </h2>
          <p className="text-white/80 mb-8">
            Konsultim falas. Projektim profesional. Instalim i garantuar.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-white text-[#1C1A17] font-black px-8 py-4 rounded-2xl hover:bg-[#F4F1EC] transition-colors group"
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
