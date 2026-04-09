"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Shield,
  Clock,
  Award,
  Star,
  CheckCircle,
} from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

// ─── Hero tile-laying reveal animation ────────────────────────────────────
const REVEAL_ROWS = 6;
const REVEAL_COLS = 9;

const HERO_REVEAL_CELLS = Array.from(
  { length: REVEAL_ROWS * REVEAL_COLS },
  (_, i) => {
    const row = Math.floor(i / REVEAL_COLS);
    const col = i % REVEAL_COLS;
    // Diagonal wave from top-left → bottom-right, like laying tiles
    const diagIndex = row + col;
    const maxDiag = REVEAL_ROWS - 1 + (REVEAL_COLS - 1);
    const delay = (diagIndex / maxDiag) * 0.88;
    return { key: `${row}-${col}`, row, col, delay };
  },
);

function TileRevealCell({
  row,
  col,
  delay,
}: {
  row: number;
  col: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${(col / REVEAL_COLS) * 100}%`,
        top: `${(row / REVEAL_ROWS) * 100}%`,
        width: `${100 / REVEAL_COLS}%`,
        height: `${100 / REVEAL_ROWS}%`,
        backgroundColor: "#F6F5F2",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.38, delay, ease: "easeOut" }}
    />
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const services = [
  {
    num: "01",
    slug: "keramika",
    title: "Shtrim Keramike",
    tag: "Dysheme & Mure",
    desc: "Shtrim profesional me pllaka, gur natyral dhe mozaik. Cilësi e lartë, punuar me cilësi dhe precizitet.",
    img: "/foto/keramika-marble.png",
  },
  {
    num: "02",
    slug: "ujsjelles",
    title: "Instalim Ujësjellës",
    tag: "Banjo & Sanitare",
    desc: "Instalim i plotë dhe riparim i sistemeve sanitare. Banjo, WC, kuzhina — çdo instalim me garanci.",
    img: "/foto/02-ujsjelles.png",
  },
  {
    num: "03",
    slug: "nxemje-qendrore",
    title: "Ngrohje Qendrore",
    tag: "Sistem Ngrohje",
    desc: "Sisteme ngrohje dysheme dhe ngrohje qendrore. Efikase, ekonomike dhe të besueshme.",
    img: "/foto/03-nxemje.jpg",
  },
];

const projects = [
  { src: "/foto/rezultati1.jpeg", cat: "Keramika", title: "Projekt i Plotë" },
  { src: "/foto/procesi1.jpeg", cat: "Keramika", title: "Procesi i Punës" },
  {
    src: "/foto/WhatsApp%20Image%202026-04-07%20at%2008.49.21%20(1).jpeg",
    cat: "Keramika",
    title: "Shtrim Profesional",
  },
  {
    src: "/keramika120-280/rez1.jpeg",
    cat: "120×280",
    title: "Pllaka Format i Madh",
  },
];

const whyPoints = [
  {
    icon: Shield,
    title: "Garanci",
    desc: "Çdo projekt mbështetet me garanci. Punojmë me ndërgjegje dhe përgjegjësi të plotë.",
  },
  {
    icon: Clock,
    title: "Respektojmë Afatet",
    desc: "Projektet përfundohen saktë sipas afatit të dakorduar - Pa vonesa",
  },
  {
    icon: Award,
    title: "Ekip i Specializuar",
    desc: "Ekip me eksperiencë dhe specializim të plotë — nga shtrim pllakash deri te instalimet sanitare dhe ngrohje qendrore.",
  },
  {
    icon: Star,
    title: "Çmime Transparente",
    desc: "Ofertë e detajuar para fillimit. Çmime pa kosto të fshehura.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ════════════════════════════════════════════════════════
          HERO — Light rectangular ceramic tile background (brick bond)
      ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F6F5F2]">
        {/* ░░ REALISTIC LIGHT RECTANGULAR CERAMIC TILE BACKGROUND ░░
            Tile: 236×100 px (≈ 60×25 cm format), Grout: 4 px #CAC7C1
            Brick-bond stagger: row 1 offset by half pitch (120 px)
        */}
        <div className="absolute inset-0" aria-hidden="true">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Subtle per-tile radial gradients — realistic matte ceramic */}
              <radialGradient
                id="htA"
                cx="40%"
                cy="35%"
                r="65%"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="#F9F8F6" />
                <stop offset="55%" stopColor="#F3F2EF" />
                <stop offset="100%" stopColor="#ECEAE6" />
              </radialGradient>
              <radialGradient
                id="htB"
                cx="38%"
                cy="30%"
                r="68%"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="#F7F6F4" />
                <stop offset="55%" stopColor="#F1F0ED" />
                <stop offset="100%" stopColor="#EBEAE7" />
              </radialGradient>
              <radialGradient
                id="htC"
                cx="42%"
                cy="38%"
                r="64%"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="#FAFAF8" />
                <stop offset="55%" stopColor="#F4F3F0" />
                <stop offset="100%" stopColor="#EDECE9" />
              </radialGradient>
              <radialGradient
                id="htD"
                cx="36%"
                cy="32%"
                r="70%"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor="#F8F7F5" />
                <stop offset="55%" stopColor="#F2F1EE" />
                <stop offset="100%" stopColor="#EBEBЕ8" />
              </radialGradient>

              {/* Brick-bond pattern: width=240 height=208
                  Row 0 (y=0):   full tile at x=0
                  Row 1 (y=104): split tiles at x=-120 and x=120 (half-pitch offset)
                  Grout gap = 4 px */}
              <pattern
                id="heroTile"
                x="0"
                y="0"
                width="240"
                height="208"
                patternUnits="userSpaceOnUse"
              >
                {/* Grout base — warm light gray */}
                <rect width="240" height="208" fill="#C8C5C0" />

                {/* ── Row 0 — full tile (A) ── */}
                <rect x="0" y="0" width="236" height="100" fill="url(#htA)" />
                {/* top highlight */}
                <rect
                  x="0"
                  y="0"
                  width="236"
                  height="2"
                  fill="rgba(255,255,255,0.60)"
                />
                {/* left highlight */}
                <rect
                  x="0"
                  y="0"
                  width="2"
                  height="100"
                  fill="rgba(255,255,255,0.40)"
                />
                {/* bottom shadow */}
                <rect
                  x="0"
                  y="98"
                  width="236"
                  height="2"
                  fill="rgba(0,0,0,0.06)"
                />
                {/* right shadow */}
                <rect
                  x="234"
                  y="0"
                  width="2"
                  height="100"
                  fill="rgba(0,0,0,0.04)"
                />

                {/* ── Row 1 — left half-tile (B, offset -120 px) ── */}
                <rect
                  x="-120"
                  y="104"
                  width="236"
                  height="100"
                  fill="url(#htB)"
                />
                <rect
                  x="-120"
                  y="104"
                  width="236"
                  height="2"
                  fill="rgba(255,255,255,0.60)"
                />
                <rect
                  x="-120"
                  y="104"
                  width="2"
                  height="100"
                  fill="rgba(255,255,255,0.40)"
                />
                <rect
                  x="-120"
                  y="202"
                  width="236"
                  height="2"
                  fill="rgba(0,0,0,0.06)"
                />
                <rect
                  x="114"
                  y="104"
                  width="2"
                  height="100"
                  fill="rgba(0,0,0,0.04)"
                />

                {/* ── Row 1 — right half-tile (C, offset +120 px) ── */}
                <rect
                  x="120"
                  y="104"
                  width="236"
                  height="100"
                  fill="url(#htC)"
                />
                <rect
                  x="120"
                  y="104"
                  width="236"
                  height="2"
                  fill="rgba(255,255,255,0.60)"
                />
                <rect
                  x="120"
                  y="104"
                  width="2"
                  height="100"
                  fill="rgba(255,255,255,0.40)"
                />
                <rect
                  x="120"
                  y="202"
                  width="236"
                  height="2"
                  fill="rgba(0,0,0,0.06)"
                />
                <rect
                  x="354"
                  y="104"
                  width="2"
                  height="100"
                  fill="rgba(0,0,0,0.04)"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroTile)" />
          </svg>
        </div>

        {/* ░░ TILE-LAYING REVEAL ANIMATION OVERLAY ░░ */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          aria-hidden="true"
        >
          {HERO_REVEAL_CELLS.map((cell) => (
            <TileRevealCell
              key={cell.key}
              row={cell.row}
              col={cell.col}
              delay={cell.delay}
            />
          ))}
        </div>

        {/* ░░ ONGOING SHIMMER — gloss light sweep across ceramic surface ░░ */}
        <div className="hero-tile-shimmer absolute inset-0 z-[3] pointer-events-none" />

        {/* ░░ CONTENT GRADIENT — soft frosted layer left→right for readability ░░ */}
        <div className="absolute inset-0 z-[4] bg-gradient-to-r from-[#F6F5F2]/96 via-[#F6F5F2]/78 lg:via-[#F6F5F2]/60 to-[#F6F5F2]/0" />

        {/* ░░ EDGE VIGNETTE — extremely soft depth/shadow haze around hero ░░ */}
        <div
          className="absolute inset-0 z-[6] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 120% 90% at 52% 46%, transparent 42%, rgba(148,140,128,0.09) 100%)",
          }}
        />

        {/* ░░ BOTTOM BLEND — seamless fade from hero tiles into services section ░░ */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 lg:h-48 z-[7] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to top, #F4F1EC 0%, rgba(244,241,236,0) 100%)",
          }}
        />

        {/* ░░ LARGE LOGO WATERMARK — right side, pure SVG/HTML, zero background ░░ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 0.82, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute right-[14%] top-1/2 -translate-y-1/2 z-[8] hidden lg:flex flex-col items-center pointer-events-none select-none"
          aria-hidden="true"
          style={{ color: "#1C1A17", width: 420 }}
        >
          {/* Brand name — one line, matches left headline: black + teal-italic mix */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              letterSpacing: "-0.055em",
              lineHeight: 1,
              marginBottom: 26,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontWeight: 900, color: "inherit" }}>HFE-</span>
            <span
              style={{ fontWeight: 900, fontStyle: "italic", color: "#0F766E" }}
            >
              Alijaj
            </span>
          </div>

          {/* Three service icons — bold, filled, no boxes */}
          <div
            style={{
              display: "flex",
              gap: 36,
              marginBottom: 22,
              alignItems: "flex-end",
            }}
          >
            {/* Ceramic tile grid — 2×2 bold tiles, represents shtrim keramike */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor">
              {/* top-left tile */}
              <rect x="4" y="4" width="34" height="34" rx="4" />
              {/* top-right tile */}
              <rect x="42" y="4" width="34" height="34" rx="4" />
              {/* bottom-left tile */}
              <rect x="4" y="42" width="34" height="34" rx="4" />
              {/* bottom-right tile */}
              <rect x="42" y="42" width="34" height="34" rx="4" />
            </svg>

            {/* Faucet — solid silhouette matching reference */}
            <svg width="80" height="88" viewBox="0 0 80 88" fill="currentColor">
              {/* Lever handle (top right) */}
              <rect x="38" y="4" width="36" height="10" rx="5" />
              <rect x="60" y="4" width="10" height="22" rx="5" />
              {/* Main body (vertical column) */}
              <rect x="28" y="10" width="16" height="36" rx="6" />
              {/* Base */}
              <rect x="16" y="44" width="40" height="12" rx="6" />
              {/* Spout arm — curves right then down */}
              <path d="M44 20 L68 20 Q78 20 78 30 L78 52 Q78 64 66 64 L56 64 L56 54 Q64 54 64 48 L64 30 L44 30 Z" />
              {/* Spout tip outlet */}
              <rect x="50" y="63" width="12" height="8" rx="3" />
              {/* Water drop */}
              <path d="M56 76 Q52 82 52 85 Q52 90 56 90 Q60 90 60 85 Q60 82 56 76 Z" />
            </svg>

            {/* Radiator — solid vertical fins with top/bottom rails */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor">
              {/* Top rail */}
              <rect x="2" y="4" width="76" height="10" rx="4" />
              {/* Bottom rail */}
              <rect x="2" y="66" width="76" height="10" rx="4" />
              {/* 5 vertical fins */}
              <rect x="4" y="12" width="12" height="56" rx="3" />
              <rect x="20" y="12" width="12" height="56" rx="3" />
              <rect x="36" y="12" width="12" height="56" rx="3" />
              <rect x="52" y="12" width="12" height="56" rx="3" />
              <rect x="68" y="12" width="8" height="56" rx="3" />
            </svg>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              letterSpacing: "0.08em",
              marginBottom: 22,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Keramikë · Ujësjellës · Ngrohje Qendrore
          </div>

          {/* Divider */}
          <div
            style={{
              width: 48,
              height: 2,
              background: "currentColor",
              marginBottom: 20,
              opacity: 0.5,
            }}
          />

          {/* Location & phone */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Pejë
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.66A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              049 617-818
            </div>
          </div>
        </motion.div>

        {/* ░░ TOP TEAL ACCENT BAR ░░ */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0F766E] via-[#0F766E]/50 to-transparent z-10" />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 z-10"
        >
          <div className="w-px h-12 bg-[#1C1A17]/15 relative overflow-hidden">
            <motion.div
              className="absolute top-0 w-full bg-[#0F766E]"
              animate={{ height: ["0%", "100%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <span className="text-[#6B6560] text-[10px] font-bold uppercase tracking-[0.3em] rotate-90 origin-center mt-4 whitespace-nowrap">
            Scroll
          </span>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-36 pb-24 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
          <div className="max-w-[600px]">
            {/* ── MOBILE LOGO BLOCK (hidden on desktop) ── */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="lg:hidden flex flex-col items-center mb-10"
              style={{ color: "#1C1A17" }}
            >
              {/* Brand name */}
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  marginBottom: 18,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontWeight: 900 }}>HFE-</span>
                <span
                  style={{
                    fontWeight: 900,
                    fontStyle: "italic",
                    color: "#0F766E",
                  }}
                >
                  Alijaj
                </span>
              </div>
              {/* Three icons */}
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  marginBottom: 14,
                  alignItems: "flex-end",
                }}
              >
                {/* Tile grid */}
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 80 80"
                  fill="currentColor"
                >
                  <rect x="4" y="4" width="34" height="34" rx="4" />
                  <rect x="42" y="4" width="34" height="34" rx="4" />
                  <rect x="4" y="42" width="34" height="34" rx="4" />
                  <rect x="42" y="42" width="34" height="34" rx="4" />
                </svg>
                {/* Faucet */}
                <svg
                  width="52"
                  height="58"
                  viewBox="0 0 80 88"
                  fill="currentColor"
                >
                  <rect x="38" y="4" width="36" height="10" rx="5" />
                  <rect x="60" y="4" width="10" height="22" rx="5" />
                  <rect x="28" y="10" width="16" height="36" rx="6" />
                  <rect x="16" y="44" width="40" height="12" rx="6" />
                  <path d="M44 20 L68 20 Q78 20 78 30 L78 52 Q78 64 66 64 L56 64 L56 54 Q64 54 64 48 L64 30 L44 30 Z" />
                  <rect x="50" y="63" width="12" height="8" rx="3" />
                  <path d="M56 76 Q52 82 52 85 Q52 90 56 90 Q60 90 60 85 Q60 82 56 76 Z" />
                </svg>
                {/* Radiator */}
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 80 80"
                  fill="currentColor"
                >
                  <rect x="2" y="4" width="76" height="10" rx="4" />
                  <rect x="2" y="66" width="76" height="10" rx="4" />
                  <rect x="4" y="12" width="12" height="56" rx="3" />
                  <rect x="20" y="12" width="12" height="56" rx="3" />
                  <rect x="36" y="12" width="12" height="56" rx="3" />
                  <rect x="52" y="12" width="12" height="56" rx="3" />
                  <rect x="68" y="12" width="8" height="56" rx="3" />
                </svg>
              </div>
              {/* Subtitle */}
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Keramikë · Ujësjellës · Ngrohje Qendrore
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-[#0F766E]" />
              <span className="text-[#0F766E] text-[11px] font-bold uppercase tracking-[0.35em]">
                Keramikë & Ujësjellës & Ngrohje Qendrore
              </span>
            </motion.div>

            <h1
              className="leading-[0.93] mb-8"
              style={{ letterSpacing: "-0.045em" }}
            >
              <motion.span
                className="block font-black text-[#1C1A17]"
                style={{ fontSize: "clamp(3rem, 7vw, 6.2rem)" }}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.42, ease }}
              >
                Realizojmë
              </motion.span>
              <motion.span
                className="block font-black text-[#0F766E] italic"
                style={{ fontSize: "clamp(3rem, 7vw, 6.2rem)" }}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.56, ease }}
              >
                hapësirat
              </motion.span>
              <motion.span
                className="block text-[#1C1A17]"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6.2rem)",
                  fontWeight: 300,
                }}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.7, ease }}
              >
                tuaja me <span className="font-black">precizitet.</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.66 }}
              className="text-[#5A5550] text-base lg:text-[1.05rem] leading-[1.85] mb-10 max-w-[440px]"
            >
              Ofrojmë shërbime profesionale në shtrim pllakash, ujësjellës dhe
              ngrohje qendrore — punë e pastër, e saktë dhe e qëndrueshme.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#0F766E] hover:bg-[#0D9488] text-white font-bold text-sm px-8 py-4 shadow-[0_6px_28px_rgba(15,118,110,0.28)] hover:shadow-[0_8px_36px_rgba(15,118,110,0.42)] transition-all duration-200"
              >
                Kërko Ofertë Falas
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#1C1A17]/[0.07] hover:bg-[#0F766E]/[0.08] border border-[#1C1A17]/[0.14] hover:border-[#0F766E]/40 text-[#1C1A17] font-semibold text-sm px-8 py-4 transition-all duration-200"
              >
                Shiko Projektet
                <ArrowRight
                  size={14}
                  className="text-[#0F766E] group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SERVICES — Large horizontal cards with photos
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-4 mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#0F766E]" />
                <span className="text-[#0F766E] text-[11px] font-bold uppercase tracking-[0.35em]">
                  Shërbimet
                </span>
              </div>
              <h2
                className="font-black text-[#1C1A17] leading-[1.0] mt-1"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                Çfarë ofrojmë
              </h2>
            </motion.div>
            <div className="flex-1 hidden lg:block" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#7A7570] text-sm leading-relaxed max-w-xs text-right hidden lg:block"
            >
              Shërbimet tona:
            </motion.p>
          </div>

          <div className="space-y-4 lg:space-y-5">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease }}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative flex flex-col lg:flex-row overflow-hidden bg-white hover:bg-[#0D2B29] shadow-sm hover:shadow-2xl transition-all duration-500"
                  style={{ minHeight: "220px" }}
                >
                  <div className="flex-1 p-8 lg:p-10 xl:p-12 flex flex-col justify-between relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="font-black leading-none select-none group-hover:text-white/10 transition-colors duration-500"
                        style={{
                          fontSize: "clamp(3rem, 6vw, 5rem)",
                          color: "#EAE5DD",
                        }}
                      >
                        {s.num}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        className="w-10 h-10 border border-[#E6E1D7] group-hover:border-[#0F766E] group-hover:bg-[#0F766E] flex items-center justify-center transition-all duration-300 mt-1"
                      >
                        <ArrowRight
                          size={14}
                          className="text-[#9A9590] group-hover:text-white group-hover:translate-x-0.5 transition-all"
                        />
                      </motion.div>
                    </div>
                    <div>
                      <p className="text-[#0F766E] group-hover:text-[#34D399] text-[10px] font-bold uppercase tracking-[0.3em] mb-2 transition-colors duration-500">
                        {s.tag}
                      </p>
                      <h3
                        className="font-black text-[#1C1A17] group-hover:text-white leading-tight transition-colors duration-500"
                        style={{
                          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                          letterSpacing: "-0.025em",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-[#7A7570] group-hover:text-white/50 text-sm leading-relaxed mt-3 max-w-sm transition-colors duration-500">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <div className="relative lg:w-[380px] xl:w-[460px] h-56 lg:h-auto overflow-hidden shrink-0">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 460px"
                    />
                    <div className="absolute inset-0 bg-[#0D2B29]/0 group-hover:bg-[#0D2B29]/20 transition-colors duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[#0F766E] font-bold text-sm hover:gap-3.5 transition-all duration-200"
            >
              Të gjitha shërbimet
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PROJECTS — Premium masonry showcase
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#0F766E]" />
                <span className="text-[#0F766E] text-[11px] font-bold uppercase tracking-[0.35em]">
                  Portofolio
                </span>
              </div>
              <h2
                className="font-black text-[#1C1A17] leading-[1.0]"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                Disa Projekte
              </h2>
              <p className="text-[#7A7570] text-sm leading-relaxed mt-3 max-w-sm">
                Çdo projekt i realizuar me kujdes dhe materiale cilesore.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/projects"
                className="group hidden lg:inline-flex items-center gap-2.5 border border-[#1C1A17]/15 hover:border-[#0F766E] hover:bg-[#0F766E] text-[#1C1A17] hover:text-white font-bold text-sm px-6 py-3 transition-all duration-200"
              >
                Shiko të gjitha
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>

          {/* Premium asymmetric grid */}
          <div className="grid grid-cols-2 lg:grid-cols-12 grid-rows-[auto] gap-3 lg:gap-4">
            {/* Hero cell — tall, 5 cols */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="col-span-2 lg:col-span-5 lg:row-span-2"
            >
              <Link
                href="/projects"
                className="group relative block h-64 lg:h-full min-h-[380px] overflow-hidden bg-[#DDD9D3]"
              >
                <Image
                  src={projects[0].src}
                  alt={projects[0].title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                {/* Permanent subtle gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                {/* Hover teal wash */}
                <div className="absolute inset-0 bg-[#0C2D2A]/0 group-hover:bg-[#0C2D2A]/30 transition-colors duration-500" />
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2 translate-y-1 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                    <span className="text-[#34D399] text-[10px] font-black uppercase tracking-[0.25em]">
                      {projects[0].cat}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Top-right cell — 7 cols, shorter */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="col-span-1 lg:col-span-7"
            >
              <Link
                href="/projects"
                className="group relative block h-48 lg:h-[220px] overflow-hidden bg-[#DDD9D3]"
              >
                <Image
                  src={projects[1].src}
                  alt={projects[1].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 1024px) 50vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#0C2D2A]/0 group-hover:bg-[#0C2D2A]/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[#34D399] text-[9px] font-black uppercase tracking-widest">
                    {projects[1].cat}
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Bottom-right split: two cells */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="col-span-1 lg:col-span-4"
            >
              <Link
                href="/projects"
                className="group relative block h-48 lg:h-[220px] overflow-hidden bg-[#DDD9D3]"
              >
                <Image
                  src={projects[2].src}
                  alt={projects[2].title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#0C2D2A]/0 group-hover:bg-[#0C2D2A]/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[#34D399] text-[9px] font-black uppercase tracking-widest">
                    {projects[2].cat}
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.26 }}
              className="col-span-2 lg:col-span-3"
            >
              <Link
                href="/projects"
                className="group relative flex h-48 lg:h-[220px] overflow-hidden bg-[#1C1A17] items-end p-6"
              >
                <Image
                  src={projects[3].src}
                  alt={projects[3].title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-75 transition-all duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="relative z-10">
                  <span className="text-[#34D399] text-[9px] font-black uppercase tracking-widest">
                    {projects[3].cat}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10 w-8 h-8 border border-white/20 group-hover:border-[#0F766E] group-hover:bg-[#0F766E] flex items-center justify-center transition-all duration-300">
                  <ArrowRight
                    size={12}
                    className="text-white/50 group-hover:text-white"
                  />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex items-center justify-between">
            <p className="text-[#9A9590] text-sm hidden lg:block">
              Fotografi &amp; video nga projektet reale
            </p>
            <Link
              href="/projects"
              className="lg:hidden text-[#0F766E] font-bold text-sm"
            >
              Shiko të gjitha punimet →
            </Link>
            <Link
              href="/projects"
              className="group hidden lg:inline-flex items-center gap-2 text-[#0F766E] font-bold text-sm hover:gap-3 transition-all duration-200"
            >
              Shiko portofolin e plotë
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          WHY US — Sticky left · 2×2 hover cards right
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-[#F4F1EC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[420px_1fr] gap-14 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#0F766E]" />
                <span className="text-[#0F766E] text-[11px] font-bold uppercase tracking-[0.35em]">
                  Pse Ne
                </span>
              </div>
              <h2
                className="font-black text-[#1C1A17] leading-[1.0] mb-6"
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                Cilësi e vërtetë,
                <br />
                <span className="text-[#0F766E]">çdo herë.</span>
              </h2>
              <p className="text-[#6B6560] text-sm leading-[1.9] mb-10 max-w-sm">
                Bashkëpunojmë me çdo klient si partner — jo vetëm si kontraktor.
                Qëllimi ynë është rezultati i përsosur, çdo herë.
              </p>
              {/* <div className="border-l-2 border-[#0F766E] pl-5 mb-10">
                <p className="text-[#1C1A17] text-sm italic leading-relaxed">
                  "Punë cilësore, ekip profesional dhe çmime të arsyeshme.
                  Rekomandoj HFE-ALIJAJ pa hezitim."
                </p>
                <p className="text-[#A09890] text-xs font-bold uppercase tracking-wider mt-2">
                  — Klient, Pejë
                </p>
              </div> */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-[#1C1A17] hover:bg-[#0F766E] text-white hover:text-white font-bold text-sm px-7 py-4 transition-all duration-300"
              >
                Na Kontaktoni
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
              {whyPoints.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.55, ease }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-white hover:bg-[#0D2B29] border border-[#E6E1D7] hover:border-[#0D2B29] p-8 transition-all duration-[400ms] cursor-default shadow-sm hover:shadow-2xl"
                  >
                    <div className="w-12 h-12 bg-[#F0FDF9] group-hover:bg-[#0F766E]/20 flex items-center justify-center mb-6 transition-colors duration-300">
                      <Icon size={20} className="text-[#0F766E]" />
                    </div>
                    <h4 className="font-bold text-[#1C1A17] group-hover:text-white text-base mb-3 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-[#7A7570] group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CTA — Premium dark left · warm amber right
      ════════════════════════════════════════════════════════ */}
      <section className="bg-[#1C1A17] overflow-hidden">
        <div className="max-w-7xl mx-auto px-0">
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="px-6 sm:px-8 lg:px-12 xl:px-16 py-20 lg:py-28"
            >
              <span className="text-[#0F766E] text-[11px] font-bold uppercase tracking-[0.35em] block mb-6">
                Filloni Sot
              </span>
              <h2
                className="font-black text-white leading-[1.02] mb-6"
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                Gati për projektin
                <br />
                <span className="text-[#0F766E]">tuaj?</span>
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-10 max-w-sm">
                Na kontaktoni sot dhe merrni ofertë falas brenda 24 orëve. Pa
                asnjë detyrim.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-[#0F766E] hover:bg-[#0D9488] text-white font-bold text-sm px-9 py-4 shadow-[0_8px_28px_rgba(15,118,110,0.22)] hover:shadow-[0_8px_36px_rgba(15,118,110,0.38)] transition-all duration-200"
              >
                Kërko Ofertë Falas
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-[#0F766E] px-6 sm:px-8 lg:px-12 xl:px-16 py-20 lg:py-28 flex flex-col justify-center"
            >
              <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.35em] mb-10">
                Kontaktoni Drejtpërdrejt
              </p>
              <div className="space-y-6">
                <a
                  href="tel:+38349617818"
                  className="group flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-white/15 group-hover:bg-white/25 flex items-center justify-center transition-colors duration-200">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider">
                      Telefon
                    </div>
                    <div className="text-white font-black text-xl leading-none mt-1">
                      049 617-818
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/15 flex items-center justify-center">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider">
                      Vendndodhja
                    </div>
                    <div className="text-white font-bold text-lg leading-none mt-1">
                      Pejë, Kosovë
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-white/60 text-sm">
                  Oferta falas brenda{" "}
                  <strong className="text-white">24 orëve</strong> · Pa detyrim
                  · Shërbim profesional
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
