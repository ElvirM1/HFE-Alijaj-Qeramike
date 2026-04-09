"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const items = [
  { id: 1, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85", thumb: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75", cat: "Pllaka", title: "Shtrim Premium Guri" },
  { id: 2, src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85", thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=75", cat: "Banjo", title: "Banjo Moderne" },
  { id: 3, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=85", thumb: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=75", cat: "Instalime", title: "Instalim Tubacionesh" },
  { id: 4, src: "https://images.unsplash.com/photo-1620626011761-996317702519?w=800&q=85", thumb: "https://images.unsplash.com/photo-1620626011761-996317702519?w=400&q=75", cat: "Banjo", title: "Banjo Luksoze" },
  { id: 5, src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=85", thumb: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=75", cat: "Kuzhinë", title: "Kuzhinë Moderne" },
  { id: 6, src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=85", thumb: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&q=75", cat: "Ngrohje", title: "Sistem Ngrohje Dysheme" },
  { id: 7, src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85", thumb: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=75", cat: "Pllaka", title: "Pllaka Dekorative" },
  { id: 8, src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=85", thumb: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=75", cat: "Banjo", title: "Banjo Kompakte" },
  { id: 9, src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85", thumb: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&q=75", cat: "Instalime", title: "Instalim Sanitarë" },
];

const cats = ["Të Gjitha", "Pllaka", "Banjo", "Instalime", "Ngrohje", "Kuzhinë"];

export default function Gallery() {
  const [active, setActive] = useState("Të Gjitha");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "Të Gjitha" ? items : items.filter((i) => i.cat === active);
  const close = useCallback(() => setLightbox(null), []);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-[#13151c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#0F766E]" />
              <span className="text-[#0F766E] text-xs font-black uppercase tracking-[0.3em]">Portofol</span>
            </div>
            <h2 className="font-black text-[#f0ede8] leading-tight" style={{ fontSize: "clamp(1.9rem,4vw,3rem)", letterSpacing: "-0.025em" }}>
              Punët Tona
            </h2>
          </div>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${active === c ? "bg-[#0F766E] text-[#0c0d10]" : "bg-[#1c1f2a] text-[#7a7570] hover:text-[#f0ede8]"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden break-inside-avoid bg-[#1c1f2a]"
                onClick={() => setLightbox(item.id)}
              >
                <div className="relative">
                  <Image
                    src={item.thumb}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0c0d10]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div className="flex-1">
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F766E] mb-0.5">{item.cat}</div>
                      <div className="text-xs font-medium text-[#f0ede8]">{item.title}</div>
                    </div>
                    <ZoomIn size={16} className="text-[#f0ede8] shrink-0 mb-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const item = items.find((i) => i.id === lightbox)!;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={close}
            >
              <motion.div
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.92 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-[#13151c]"
              >
                <Image src={item.src} alt={item.title} width={800} height={600} className="w-full h-auto" />
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F766E]">{item.cat}</div>
                    <div className="text-sm font-bold text-[#f0ede8]">{item.title}</div>
                  </div>
                  <button onClick={close} className="w-9 h-9 rounded-xl bg-white/8 hover:bg-white/14 flex items-center justify-center transition-colors">
                    <X size={16} className="text-[#f0ede8]" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
