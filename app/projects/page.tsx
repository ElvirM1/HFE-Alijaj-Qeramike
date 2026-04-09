"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, X, Play, ZoomIn } from "lucide-react";

// --- Types -------------------------------------------------------------------
type Category = "Të gjitha" | "Keramika" | "Video" | "120×280";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  cat: Exclude<Category, "Të gjitha">;
  title: string;
  aspect: string;
  dimensions?: string;
  project?: number;
  projectOrder?: number;
}

// --- Data --------------------------------------------------------------------
const items: MediaItem[] = [
  // -- Keramika � foto/ -----------------------------------------------------
  {
    id: 1,
    type: "image",
    src: "/foto/Para1.jpeg",
    cat: "Keramika",
    title: "Fillimi i Projektit",
    aspect: "aspect-[4/3]",
    project: 3,
    projectOrder: 1,
  },
  {
    id: 2,
    type: "image",
    src: "/foto/procesi1.jpeg",
    cat: "Keramika",
    title: "Procesi i Punës",
    aspect: "aspect-square",
    project: 3,
    projectOrder: 2,
  },
  {
    id: 3,
    type: "image",
    src: "/foto/rezultati1.jpeg",
    cat: "Keramika",
    title: "Rezultati Final",
    aspect: "aspect-[3/4]",
    project: 3,
    projectOrder: 3,
  },
  {
    id: 4,
    type: "image",
    src: "/foto/WhatsApp%20Image%202026-04-05%20at%2021.08.11%20(1).jpeg",
    cat: "Keramika",
    title: "Shtrim Keramike",
    aspect: "aspect-[4/3]",
    project: 4,
  },
  {
    id: 5,
    type: "image",
    src: "/foto/WhatsApp%20Image%202026-04-05%20at%2021.08.11.jpeg",
    cat: "Keramika",
    title: "Punë Cilësore",
    aspect: "aspect-[3/4]",
    project: 5,
  },
  {
    id: 6,
    type: "image",
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.20.jpeg",
    cat: "Keramika",
    title: "Detaj Teknik",
    aspect: "aspect-square",
    project: 2,
  },
  {
    id: 7,
    type: "image",
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.21%20(1).jpeg",
    cat: "Keramika",
    title: "Shtrim Profesional",
    aspect: "aspect-[4/3]",
    project: 4,
  },
  {
    id: 8,
    type: "image",
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.21%20(3).jpeg",
    cat: "Keramika",
    title: "Projekt i Përfunduar",
    aspect: "aspect-[3/4]",
    project: 1,
    projectOrder: 2,
  },
  {
    id: 9,
    type: "image",
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.21%20(4).jpeg",
    cat: "Keramika",
    title: "Cilësi e Lartë",
    aspect: "aspect-square",
    project: 1,
    projectOrder: 1,
  },
  {
    id: 10,
    type: "image",
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.21%20(5).jpeg",
    cat: "Keramika",
    title: "Shtrim Guri Natyral",
    aspect: "aspect-[4/3]",
    project: 5,
  },
  {
    id: 11,
    type: "image",
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.21%20(6).jpeg",
    cat: "Keramika",
    title: "Dysheme Premium",
    aspect: "aspect-[3/4]",
    project: 1,
    projectOrder: 3,
  },
  {
    id: 12,
    type: "image",
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.21.jpeg",
    cat: "Keramika",
    title: "Punë Ekipit",
    aspect: "aspect-square",
    project: 2,
  },

  // -- Video � video/ -------------------------------------------------------
  {
    id: 13,
    type: "video",
    src: "/video/b8fc1972-6bb6-4215-8394-e636f2b0e1f5.mp4",
    cat: "Video",
    title: "Procesi i Shtrimit",
    aspect: "aspect-video",
  },
  {
    id: 14,
    type: "video",
    src: "/video/c29fc6e4-e59b-419d-8498-181c60fb68c4.mp4",
    cat: "Video",
    title: "Punë në Terren",
    aspect: "aspect-video",
  },
  {
    id: 15,
    type: "video",
    src: "/video/fa607f53-f12a-4cfb-808e-8bd2e415937d.mp4",
    cat: "Video",
    title: "Projekt i Plotë",
    aspect: "aspect-video",
  },
  {
    id: 16,
    type: "video",
    src: "/video/fd6d6d89-d30b-4f8e-b47e-17eeaea8ba87.mp4",
    cat: "Video",
    title: "Detaj Finalizimi",
    aspect: "aspect-video",
  },
  {
    id: 17,
    type: "video",
    src: "/video/9fc54dfa-ddc2-4116-a459-07360615ba22.mov",
    cat: "Video",
    title: "Instalim Profesional",
    aspect: "aspect-video",
  },
  {
    id: 18,
    type: "video",
    src: "/video/ac1fcac0-957e-404f-9b18-e55e7074ff13.mov",
    cat: "Video",
    title: "Ekipi në Aksion",
    aspect: "aspect-video",
  },
  {
    id: 19,
    type: "video",
    src: "/video/cf8a4023-fe9f-41a8-90ec-1685835c1cac.mov",
    cat: "Video",
    title: "Punë Cilësore",
    aspect: "aspect-video",
  },
  {
    id: 20,
    type: "video",
    src: "/video/fb99b344-0f84-496e-b4a7-14fabeacd81e.mov",
    cat: "Video",
    title: "Rezultati Final",
    aspect: "aspect-video",
  },

  // -- 120�280 � keramika120-280/ -------------------------------------------
  {
    id: 21,
    type: "image",
    src: "/keramika120-280/fillimi1.jpeg",
    cat: "120×280",
    title: "Fillimi i Projektit",
    aspect: "aspect-[3/4]",
    dimensions: "120�280 cm",
    project: 1,
  },
  {
    id: 22,
    type: "image",
    src: "/keramika120-280/procesi1.jpeg",
    cat: "120×280",
    title: "Procesi i Vendosjes",
    aspect: "aspect-[4/3]",
    dimensions: "120�280 cm",
    project: 1,
  },
  {
    id: 23,
    type: "image",
    src: "/keramika120-280/rez1.jpeg",
    cat: "120×280",
    title: "Rezultati Final",
    aspect: "aspect-square",
    dimensions: "120�280 cm",
    project: 1,
  },
  {
    id: 24,
    type: "image",
    src: "/keramika120-280/WhatsApp%20Image%202026-04-05%20at%2021.08.11%20(2).jpeg",
    cat: "120×280",
    title: "Pllaka Format i Madh",
    aspect: "aspect-[3/4]",
    dimensions: "120�280 cm",
    project: 3,
    projectOrder: 3,
  },
  {
    id: 25,
    type: "image",
    src: "/keramika120-280/WhatsApp%20Image%202026-04-05%20at%2021.09.01%20(1).jpeg",
    cat: "120×280",
    title: "Shtrim Elegant",
    aspect: "aspect-[4/3]",
    dimensions: "120�280 cm",
    project: 3,
    projectOrder: 3,
  },
  {
    id: 26,
    type: "image",
    src: "/keramika120-280/WhatsApp%20Image%202026-04-05%20at%2021.09.01.jpeg",
    cat: "120×280",
    title: "Dysheme Premium",
    aspect: "aspect-square",
    dimensions: "120�280 cm",
    project: 2,
    projectOrder: 3,
  },
  {
    id: 27,
    type: "image",
    src: "/keramika120-280/WhatsApp%20Image%202026-04-07%20at%2023.36.18%20(1).jpeg",
    cat: "120×280",
    title: "Detaj Pllake",
    aspect: "aspect-[3/4]",
    dimensions: "120�280 cm",
    project: 2,
    projectOrder: 2,
  },
  {
    id: 28,
    type: "image",
    src: "/keramika120-280/WhatsApp%20Image%202026-04-07%20at%2023.36.18%20(2).jpeg",
    cat: "120×280",
    title: "Cilësi Maksimale",
    aspect: "aspect-[4/3]",
    dimensions: "120�280 cm",
    project: 3,
    projectOrder: 1,
  },
  {
    id: 29,
    type: "image",
    src: "/keramika120-280/WhatsApp%20Image%202026-04-07%20at%2023.36.18%20(3).jpeg",
    cat: "120×280",
    title: "Projekt i Plotë",
    aspect: "aspect-square",
    dimensions: "120�280 cm",
    project: 2,
    projectOrder: 1,
  },
  {
    id: 30,
    type: "image",
    src: "/keramika120-280/WhatsApp%20Image%202026-04-07%20at%2023.36.18.jpeg",
    cat: "120×280",
    title: "Finalizim i Përsosur",
    aspect: "aspect-[3/4]",
    dimensions: "120�280 cm",
    project: 3,
    projectOrder: 2,
  },
];

const CATS: Category[] = ["Të gjitha", "Keramika", "Video", "120×280"];

// --- Page --------------------------------------------------------------------
export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("Të gjitha");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const filtered =
    active === "Të gjitha" ? items : items.filter((i) => i.cat === active);

  const card = (item: MediaItem, i: number, aspect?: string) => (
    <motion.div
      key={item.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{
        delay: Math.min(i * 0.035, 0.35),
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="break-inside-avoid mb-4 group cursor-pointer overflow-hidden bg-[#DDD9D3] shadow-[0_1px_8px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300"
      onClick={() => setLightbox(item.id)}
    >
      {/* Media */}
      <div className={`relative ${aspect ?? item.aspect} overflow-hidden`}>
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            priority={i < 6}
          />
        ) : (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          />
        )}
        {/* Permanent subtle bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {/* Hover teal wash */}
        <div className="absolute inset-0 bg-[#0C2D2A]/0 group-hover:bg-[#0C2D2A]/40 transition-colors duration-400" />
        {/* Category tag — slides up on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
          <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#34D399]">
                {item.cat}
              </span>
            </div>
          </div>
        </div>
        {/* Video badge */}
        {item.type === "video" && (
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <Play size={11} className="text-white fill-white ml-0.5" />
          </div>
        )}
        {/* Zoom badge */}
        {item.type === "image" && (
          <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn size={12} className="text-white" />
          </div>
        )}
      </div>
    </motion.div>
  );

  const lightboxItem =
    lightbox !== null ? (items.find((i) => i.id === lightbox) ?? null) : null;

  return (
    <main className="bg-[#F4F1EC] min-h-screen pt-[72px]">
      {/* -- Hero ----------------------------------------------------------- */}
      <section className="py-20 lg:py-28 border-b border-[#E0DCD5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-8 bg-[#0F766E]" />
                <span className="text-[#0F766E] text-[11px] font-black uppercase tracking-[0.35em]">
                  Portofol
                </span>
              </div>
              <h1
                className="font-black text-[#1C1A17] leading-[1.06] tracking-tight mb-5"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)" }}
              >
                Disa Projekte
              </h1>
              <p className="text-[#7A7570] text-base leading-relaxed max-w-lg">
                Çdo projekt i realizuar me kujdes maksimal — nga pllakat 120×280
                deri te shtrimet e detajuara. Shiko punën tonë reale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* -- Filter + Grid -------------------------------------------------- */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex items-center gap-8 mb-12 border-b border-[#E0DCD5]"
          >
            {CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`pb-3 text-sm font-bold border-b-2 -mb-px transition-all duration-200 whitespace-nowrap ${
                  active === cat
                    ? "border-[#0F766E] text-[#1C1A17]"
                    : "border-transparent text-[#9A9590] hover:text-[#1C1A17] hover:border-[#C0BBB5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Content */}
          {active === "Të gjitha" ? (
            <div className="space-y-20">
              {(["Keramika", "Video", "120×280"] as Category[]).map(
                (sectionCat) => {
                  const sectionItems = items.filter(
                    (i) => i.cat === sectionCat,
                  );
                  return (
                    <div key={sectionCat}>
                      <div className="flex items-center gap-4 mb-8">
                        <span className="font-black text-[#1C1A17] text-sm uppercase tracking-[0.2em]">
                          {sectionCat}
                        </span>
                        <span className="text-xs text-[#9A9590] tabular-nums">
                          {sectionItems.length}
                        </span>
                        <div className="flex-1 h-px bg-[#E0DCD5]" />
                      </div>
                      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                        {sectionItems.map((item, i) => card(item, i))}
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          ) : active === "Keramika" ? (
            <div className="space-y-16">
              {[1, 2, 3, 4, 5].map((proj) => {
                const projItems = filtered
                  .filter((i) => i.project === proj)
                  .sort(
                    (a, b) => (a.projectOrder ?? 999) - (b.projectOrder ?? 999),
                  );
                if (projItems.length === 0) return null;
                return (
                  <div key={proj}>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="font-black text-[#1C1A17] text-sm uppercase tracking-[0.2em]">
                        Projekt {proj}
                      </span>
                      <span className="text-xs text-[#9A9590] tabular-nums">
                        {projItems.length}
                      </span>
                      <div className="flex-1 h-px bg-[#E0DCD5]" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {projItems.map((item, i) =>
                        card(item, i, "aspect-[4/3]"),
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : active === "120×280" ? (
            <div className="space-y-16">
              {[1, 2, 3].map((proj) => {
                const projItems = filtered
                  .filter((i) => i.project === proj)
                  .sort(
                    (a, b) => (a.projectOrder ?? 999) - (b.projectOrder ?? 999),
                  );
                if (projItems.length === 0) return null;
                return (
                  <div key={proj}>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="font-black text-[#1C1A17] text-sm uppercase tracking-[0.2em]">
                        Projekt {proj}
                      </span>
                      <span className="text-xs text-[#9A9590] tabular-nums">
                        {projItems.length}
                      </span>
                      <div className="flex-1 h-px bg-[#E0DCD5]" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {projItems.map((item, i) =>
                        card(item, i, "aspect-[4/3]"),
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => card(item, i))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>{" "}
      {/* -- CTA ------------------------------------------------------------ */}
      <section className="border-t border-[#E0DCD5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2">
            <div className="py-16 lg:py-20 lg:pr-16 lg:border-r border-[#E0DCD5]">
              <p className="text-[#0F766E] text-[11px] font-black uppercase tracking-[0.3em] mb-5">
                Projekti Juaj
              </p>
              <h2
                className="font-black text-[#1C1A17] mb-5 leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
              >
                Doni Diçka të Ngjashme?
              </h2>
              <p className="text-[#7A7570] leading-relaxed mb-8 max-w-md">
                Na kontaktoni dhe diskutojmë projektin tuaj. Ofertë falas brenda
                24 orëve.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#1C1A17] hover:bg-[#0F766E] text-white font-black px-8 py-4 transition-colors duration-200 group"
              >
                Kërko Ofertë
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="py-16 lg:py-20 lg:pl-16 flex flex-col justify-center">
              <a
                href="tel:+38349617818"
                className="flex items-center gap-4 group mb-6"
              >
                <div className="w-12 h-12 rounded-full bg-[#0F766E]/10 flex items-center justify-center group-hover:bg-[#0F766E] transition-colors duration-200">
                  <Phone
                    size={16}
                    className="text-[#0F766E] group-hover:text-white transition-colors duration-200"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#B8B3AE] mb-0.5">
                    Telefoni
                  </div>
                  <div className="font-black text-[#1C1A17] text-xl tracking-tight group-hover:text-[#0F766E] transition-colors duration-200">
                    049 617-818
                  </div>
                </div>
              </a>
              <p className="text-[#7A7570] text-sm leading-relaxed max-w-xs">
                Jemi n dispozicion gjatë gjithë ditës. Përgjigje e shpejtë dhe
                profesionale.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* -- Lightbox ------------------------------------------------------- */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.88, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 24 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#111009] shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxItem.type === "image" ? (
                <div className="relative aspect-[4/3] w-full bg-[#0E0C09]">
                  <Image
                    src={lightboxItem.src}
                    alt={lightboxItem.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    priority
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-black">
                  <video
                    src={lightboxItem.src}
                    controls
                    controlsList="novolume nodownload"
                    disableRemotePlayback
                    playsInline
                    autoPlay
                    muted
                    className="w-full h-full"
                    onVolumeChange={(e) => {
                      // Enforce permanent silence � re-mute if user tries to unmute
                      if (!e.currentTarget.muted) e.currentTarget.muted = true;
                    }}
                  />
                </div>
              )}

              {/* Info bar */}
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0F766E]">
                      {lightboxItem.cat}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeLightbox}
                  aria-label="Mbyll"
                  className="ml-4 shrink-0 w-9 h-9 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] flex items-center justify-center transition-colors"
                >
                  <X size={15} className="text-white/70" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
