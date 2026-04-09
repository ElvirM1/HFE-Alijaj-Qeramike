"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, MapPin, ExternalLink, Send, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSent(true);
      reset();
    }
  };

  return (
    <main className="bg-[#FAFAF8] pt-[72px]">
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#E4E0DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[#0F766E] text-xs font-black uppercase tracking-[0.3em] mb-4"
            >
              Kontakt
            </motion.p>
            <h1
              className="font-black text-[#1A1714] mb-5 leading-tight"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Na Kontaktoni
            </h1>
            <p className="text-[#6B6460] text-lg leading-relaxed">
              Dergo mesazh ose telefononi direkt. Pergjigjemi brenda 24 oreve me
              nje oferte falas per projektin tuaj.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left � info cards */}
            <div className="lg:col-span-2 space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: "049 617-818",
                  href: "tel:+38349617818",
                  sub: "Telefononi çdo ditë",
                },
                {
                  icon: MapPin,
                  label: "Adresa",
                  value: "Peje, Kosove",
                  href: null,
                  sub: "Shërbim në të gjithë vendin",
                },
                {
                  icon: ExternalLink,
                  label: "Facebook",
                  value: "HFE-ALIJAJ",
                  href: "https://www.facebook.com/profile.php?id=100080633524507",
                  sub: "Na ndiqni në Facebook",
                },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.12,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 bg-white border border-[#E4E0DB] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#F0FDF9] border border-[#0F766E]/15 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#0F766E]" />
                    </div>
                    <div>
                      <div className="text-[#9B9490] text-xs font-bold uppercase tracking-widest mb-0.5">
                        {c.label}
                      </div>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={
                            c.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noopener noreferrer"
                          className="text-[#1A1714] font-bold text-sm hover:text-[#0F766E] transition-colors"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <span className="text-[#1A1714] font-bold text-sm">
                          {c.value}
                        </span>
                      )}
                      <div className="text-[#9B9490] text-xs mt-0.5">
                        {c.sub}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* WhatsApp */}
              <a
                href="https://wa.me/38349617818"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-black text-sm py-4 rounded-2xl transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Bisedo në WhatsApp
              </a>
            </div>

            {/* Right � form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="lg:col-span-3 bg-white border border-[#E4E0DB] rounded-3xl p-6 sm:p-8 shadow-sm"
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-black text-[#1A1714] text-xl">
                    Mesazhi u dërgua!
                  </h3>
                  <p className="text-[#6B6460]">
                    Do t&apos;ju kontaktojmë sa më shpejt.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-[#0F766E] font-bold text-sm hover:underline"
                  >
                    Dërgo mesazh tjetër
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <h2 className="font-black text-[#1A1714] text-xl mb-1">
                      Kërko Ofertë Falas
                    </h2>
                    <p className="text-[#9B9490] text-sm">
                      Plotësoni formularin dhe ju përgjigjemi brenda 24 orëve.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#6B6460] text-xs font-bold uppercase tracking-widest mb-2">
                        Emri *
                      </label>
                      <input
                        {...register("name", { required: true })}
                        placeholder="Emri juaj"
                        className={`w-full bg-[#FAFAF8] border ${errors.name ? "border-red-400" : "border-[#E4E0DB]"} rounded-xl px-4 py-3.5 text-sm text-[#1A1714] placeholder-[#C4BFBA] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all`}
                      />
                    </div>
                    <div>
                      <label className="block text-[#6B6460] text-xs font-bold uppercase tracking-widest mb-2">
                        Telefoni *
                      </label>
                      <input
                        {...register("phone", { required: true })}
                        placeholder="04X XXX-XXX"
                        className={`w-full bg-[#FAFAF8] border ${errors.phone ? "border-red-400" : "border-[#E4E0DB]"} rounded-xl px-4 py-3.5 text-sm text-[#1A1714] placeholder-[#C4BFBA] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#6B6460] text-xs font-bold uppercase tracking-widest mb-2">
                      Shërbimi
                    </label>
                    <select
                      {...register("service")}
                      className="w-full bg-[#FAFAF8] border border-[#E4E0DB] rounded-xl px-4 py-3.5 text-sm text-[#1A1714] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Zgjidhni shërbimin...</option>
                      <option value="shtrim-pllakash">Shtrim Keramike</option>
                      <option value="ujesjelles">Instalim Ujësjellës</option>
                      <option value="ngrohje">Ngrohje Qendrore</option>
                      <option value="tjeter">Tjetër</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#6B6460] text-xs font-bold uppercase tracking-widest mb-2">
                      Mesazhi *
                    </label>
                    <textarea
                      {...register("message", { required: true })}
                      rows={5}
                      placeholder="Përshkruani projektin tuaj..."
                      className={`w-full bg-[#FAFAF8] border ${errors.message ? "border-red-400" : "border-[#E4E0DB]"} rounded-xl px-4 py-3.5 text-sm text-[#1A1714] placeholder-[#C4BFBA] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 transition-all resize-none`}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-full bg-[#0F766E] hover:bg-[#0D9488] disabled:opacity-60 text-white font-black text-sm py-4 rounded-2xl transition-colors flex items-center justify-center gap-2.5"
                  >
                    <Send size={15} />
                    {isSubmitting ? "Duke dërguar..." : "Dërgo Mesazhin"}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
