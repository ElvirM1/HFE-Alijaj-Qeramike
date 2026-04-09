"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

const subServices = [
  { href: "/services/keramika", label: "Shtrim Keramike" },
  { href: "/services/ujsjelles", label: "Instalim Ujësjellës" },
  { href: "/services/nxemje-qendrore", label: "Ngrohje Qendrore" },
];

const links = [
  { href: "/", label: "Ballina" },
  { href: "/services", label: "Shërbimet", sub: subServices },
  { href: "/projects", label: "Projektet" },
  { href: "/contact", label: "Kontakti" },
];

// Underline hover indicator
function NavUnderline() {
  return (
    <motion.span
      layoutId="nav-underline"
      className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#0F766E]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Universal nav handler: always scroll to top, close mobile menu
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setOpen(false);
    if (href === pathname) {
      // Same page — just smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Different page — instant reset then navigate
      window.scrollTo({ top: 0, behavior: "instant" });
      router.push(href);
    }
  };

  const isHomepage = pathname === "/";
  const isTransparent = isHomepage && !scrolled && !open;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-white/70 backdrop-blur-md"
          : scrolled
            ? "bg-white border-b border-[#E6E1D7] shadow-sm"
            : "bg-white/96 backdrop-blur-sm border-b border-[#E6E1D7]/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo — image only, no duplicate text */}
          <Link
            href="/"
            aria-label="HFE-ALIJAJ Ballina"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-2.5 group"
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-9 h-9 overflow-hidden shrink-0 ring-1 ring-[#1C1A17]/10 group-hover:ring-[#0F766E]/40 transition-all duration-200"
            >
              <Image
                src="/hfe-alijaj-fixed.png"
                alt=""
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <span className="font-black text-sm tracking-tight transition-colors duration-200 group-hover:text-[#0F766E] text-[#1C1A17]">
              HFE-ALIJAJ
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((link) =>
              link.sub ? (
                <div key={link.href} className="group relative">
                  <button
                    onMouseEnter={() => setActiveNav(link.href)}
                    onMouseLeave={() => setActiveNav(null)}
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-[#0F766E]"
                        : "text-[#1C1A17] hover:text-[#0F766E]"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className="mt-px group-hover:rotate-180 transition-transform duration-200"
                    />
                    {isActive(link.href) && !isTransparent && <NavUnderline />}
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#E6E1D7] py-1.5 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 translate-y-1 group-hover:translate-y-0 shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-4 py-2.5 text-[13px] text-[#6E6A62] hover:text-[#0F766E] hover:bg-[#F0FDF9] font-medium border-b border-[#E6E1D7] mb-1 transition-colors"
                    >
                      Të gjitha shërbimet
                    </Link>
                    {link.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={(e) => handleNavClick(e, s.href)}
                        className={`block px-4 py-2.5 text-[13px] transition-colors hover:bg-[#F0FDF9] hover:text-[#0F766E] ${
                          pathname === s.href
                            ? "text-[#0F766E] font-semibold"
                            : "text-[#1C1A17]"
                        }`}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setActiveNav(link.href)}
                  onMouseLeave={() => setActiveNav(null)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-[#0F766E]"
                      : "text-[#1C1A17] hover:text-[#0F766E]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && !isTransparent && <NavUnderline />}
                </Link>
              ),
            )}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+38349617818"
              className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200 text-[#1C1A17] hover:text-[#0F766E]"
            >
              <Phone size={13} className="text-[#0F766E]" />
              049 617-818
            </a>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href="/contact"
                className="bg-[#0F766E] hover:bg-[#0D9488] text-white text-sm font-bold px-5 py-2.5 transition-colors duration-200"
              >
                Kërko Ofertë
              </Link>
            </motion.div>
          </div>

          {/* Mobile: phone link + toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+38349617818"
              className="flex items-center gap-1.5 text-[#1C1A17] font-semibold text-sm px-2 py-1"
              aria-label="Na telefono"
            >
              <Phone size={13} className="text-[#0F766E]" />
              <span className="text-xs font-bold tracking-tight">
                049 617-818
              </span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center transition-colors text-[#1C1A17]"
              aria-label="Hap menunë"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden bg-white border-t border-[#E6E1D7]"
          >
            <nav className="px-4 pt-4 pb-6 space-y-0.5">
              {links.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-3 py-3.5 text-sm font-semibold transition-colors ${
                      isActive(link.href) ? "text-[#0F766E]" : "text-[#1C1A17]"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.sub && (
                    <div className="pl-3 border-l-2 border-[#E6E1D7] ml-3 mb-2 space-y-0.5">
                      {link.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={(e) => handleNavClick(e, s.href)}
                          className={`block px-3 py-2.5 text-sm transition-colors ${
                            pathname === s.href
                              ? "text-[#0F766E] font-semibold"
                              : "text-[#6E6A62] hover:text-[#0F766E]"
                          }`}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-[#E6E1D7] space-y-2.5">
                <a
                  href="tel:+38349617818"
                  className="flex items-center justify-center gap-2 text-[#1C1A17] font-medium py-3.5 border border-[#E6E1D7] text-sm hover:border-[#0F766E]/30 transition-colors"
                >
                  <Phone size={13} className="text-[#0F766E]" />
                  049 617-818
                </a>
                <Link
                  href="/contact"
                  onClick={(e) => handleNavClick(e, "/contact")}
                  className="block bg-[#0F766E] hover:bg-[#0D9488] text-white font-bold text-sm py-3.5 text-center transition-colors"
                >
                  Kërko Ofertë Falas
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
