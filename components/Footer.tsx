"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Ballina" },
  { href: "/services", label: "Të gjitha shërbimet" },
  { href: "/projects", label: "Projektet" },
  { href: "/contact", label: "Kontakt" },
];

const serviceLinks = [
  { href: "/services/keramika", label: "Shtrim Keramike" },
  { href: "/services/ujsjelles", label: "Instalim Ujësjellës" },
  { href: "/services/nxemje-qendrore", label: "Ngrohje Qendrore" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111009]">
      {/* Top decorative rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0F766E]/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.9fr_1fr_1fr_1.3fr] gap-10 py-16 lg:py-20 border-b border-white/[0.06]">
          {/* ── Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group mb-6 block w-fit"
            >
              <div className="w-10 h-10 overflow-hidden shrink-0 ring-1 ring-white/8">
                <Image
                  src="/hfe-alijaj-fixed.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none gap-0.5">
                <span className="font-black text-white text-sm tracking-tight group-hover:text-[#0F766E] transition-colors duration-200">
                  HFE-ALIJAJ
                </span>
                <span className="text-[10px] text-white/28 font-medium tracking-[0.2em] uppercase">
                  Pejë, Kosovë
                </span>
              </div>
            </Link>

            <p className="text-white/38 text-sm leading-relaxed max-w-xs mb-8">
              Specialist në shtrim pllakash, instalime sanitare dhe ngrohje
              qendrore. Cilësi e garantuar dhe profesionalitet.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/profile.php?id=100080633524507"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook HFE-ALIJAJ"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/32 hover:text-[#0F766E] hover:border-[#0F766E]/40 hover:bg-[#0F766E]/6 transition-all duration-200"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="tel:+38349617818"
                aria-label="Telefon"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/32 hover:text-[#0F766E] hover:border-[#0F766E]/40 hover:bg-[#0F766E]/6 transition-all duration-200"
              >
                <Phone size={13} />
              </a>
              <a
                href="https://wa.me/38349617818"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/32 hover:text-[#0F766E] hover:border-[#0F766E]/40 hover:bg-[#0F766E]/6 transition-all duration-200"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <h4 className="text-[#0F766E] font-black text-[10px] uppercase tracking-[0.3em] mb-7">
              Navigim
            </h4>
            <ul className="space-y-4">
              {navLinks.map((n) => (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    className="text-white/42 text-sm hover:text-white transition-colors duration-150 group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#0F766E] transition-all duration-200 shrink-0" />
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="text-[#0F766E] font-black text-[10px] uppercase tracking-[0.3em] mb-7">
              Shërbimet
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-white/42 text-sm hover:text-white transition-colors duration-150 group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#0F766E] transition-all duration-200 shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="text-[#0F766E] font-black text-[10px] uppercase tracking-[0.3em] mb-7">
              Kontakt
            </h4>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#0F766E]/20 bg-[#0F766E]/8 flex items-center justify-center shrink-0">
                  <Phone size={12} className="text-[#0F766E]" />
                </div>
                <a
                  href="tel:+38349617818"
                  className="text-white/50 text-sm hover:text-[#0F766E] transition-colors font-semibold"
                >
                  049 617-818
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#0F766E]/20 bg-[#0F766E]/8 flex items-center justify-center shrink-0">
                  <MapPin size={12} className="text-[#0F766E]" />
                </div>
                <span className="text-white/50 text-sm">Pejë, Kosovë</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-[#0F766E] hover:bg-[#0D9488] text-white font-black text-xs px-4 py-2.5 transition-colors duration-200 group"
              >
                Dërgo Mesazh
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <p className="text-white/16 text-xs">
            &copy; {year} HFE-ALIJAJ. Të gjitha të drejtat e rezervuara.
          </p>
          <p className="text-white/16 text-xs tracking-wide">Pejë, Kosovë</p>
        </div>
      </div>
    </footer>
  );
}
