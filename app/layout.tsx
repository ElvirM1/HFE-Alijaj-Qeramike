import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HFE-ALIJAJ | Ekspert ne Shtrim Pllakash & Instalime",
    template: "%s | HFE-ALIJAJ",
  },
  description:
    "HFE-ALIJAJ - Kompani profesionale: shtrim pllakash, ujesjelles, nxemje qendrore. 10+ vite eksperience ne Peje, Kosove.",
  icons: {
    icon: "/hfe-alijaj-fixed.png",
    apple: "/hfe-alijaj-fixed.png",
    shortcut: "/hfe-alijaj-fixed.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq" className={inter.variable}>
      <body className="bg-[#FAF7F0] text-[#1C1A17] antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
