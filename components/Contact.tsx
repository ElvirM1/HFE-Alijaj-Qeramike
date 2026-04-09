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

export default function Contact() {
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
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-[#13151c] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-transparent via-[#0F766E]/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#0F766E]" />
            <span className="text-[#0F766E] text-xs font-black uppercase tracking-[0.3em]">
              Kontakt
            </span>
            <div className="w-6 h-px bg-[#0F766E]" />
          </div>
          <h2
            className="font-black text-[#f0ede8] leading-tight"
            style={{
              fontSize: "clamp(1.9rem,4vw,3rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Na Kontaktoni
          </h2>
          <p className="text-[#7a7570] mt-3 max-w-md mx-auto">
            Dërgoni mesazh ose telefononi direkt — përgjigjemi shpejt.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Phone,
                label: "Telefon",
                value: "049 617-818",
                href: "tel:+38349617818",
              },
              {
                icon: MapPin,
                label: "Vendndodhja",
                value: "Pejë, Kosovë",
                href: null,
              },
              {
                icon: ExternalLink,
                label: "Facebook",
                value: "HFE-ALIJAJ",
                href: "https://www.facebook.com/profile.php?id=100080633524507",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="flex items-start gap-4 bg-[#0c0d10] border border-white/6 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0F766E]/12 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#0F766E]" />
                  </div>
                  <div>
                    <div className="text-[#6b6560] text-xs font-bold uppercase tracking-widest mb-0.5">
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={
                          c.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        className="text-[#f0ede8] text-sm font-semibold hover:text-[#0F766E] transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-[#f0ede8] text-sm font-semibold">
                        {c.value}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* WhatsApp button */}
            <a
              href="https://wa.me/38349617818"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25d366] text-white font-black text-sm py-3.5 rounded-xl hover:bg-[#20bd5a] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat në WhatsApp
            </a>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 bg-[#0c0d10] border border-white/6 rounded-2xl p-6 sm:p-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center gap-4 py-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#0F766E]/15 flex items-center justify-center">
                  <CheckCircle size={28} className="text-[#0F766E]" />
                </div>
                <h3 className="text-[#f0ede8] font-bold text-lg">
                  Mesazhi u dërgua!
                </h3>
                <p className="text-[#7a7570] text-sm">
                  Do t'ju kontaktojmë sa më shpejt të jetë e mundur.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-[#0F766E] text-sm font-bold hover:underline"
                >
                  Dërgo tjetër
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#6b6560] text-xs font-bold uppercase tracking-widest mb-2">
                      Emri *
                    </label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Emri juaj"
                      className={`w-full bg-[#13151c] border ${errors.name ? "border-red-500/60" : "border-white/8"} rounded-xl px-4 py-3 text-sm text-[#f0ede8] placeholder-[#4a4540] outline-none focus:border-[#0F766E]/60 transition-colors`}
                    />
                  </div>
                  <div>
                    <label className="block text-[#6b6560] text-xs font-bold uppercase tracking-widest mb-2">
                      Telefoni *
                    </label>
                    <input
                      {...register("phone", { required: true })}
                      placeholder="04X XXX-XXX"
                      className={`w-full bg-[#13151c] border ${errors.phone ? "border-red-500/60" : "border-white/8"} rounded-xl px-4 py-3 text-sm text-[#f0ede8] placeholder-[#4a4540] outline-none focus:border-[#0F766E]/60 transition-colors`}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#6b6560] text-xs font-bold uppercase tracking-widest mb-2">
                    Shërbimi
                  </label>
                  <select
                    {...register("service")}
                    className="w-full bg-[#13151c] border border-white/8 rounded-xl px-4 py-3 text-sm text-[#f0ede8] outline-none focus:border-[#0F766E]/60 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Zgjidhni shërbimin...</option>
                    <option value="shtrim-pllakash">Shtrim Pllakash</option>
                    <option value="instalime-sanitare">
                      Instalime Sanitare
                    </option>
                    <option value="ngrohje-dysheme">Ngrohje Dysheme</option>
                    <option value="tjeter">Tjetër</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#6b6560] text-xs font-bold uppercase tracking-widest mb-2">
                    Mesazhi *
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={5}
                    placeholder="Përshkruani projektin tuaj..."
                    className={`w-full bg-[#13151c] border ${errors.message ? "border-red-500/60" : "border-white/8"} rounded-xl px-4 py-3 text-sm text-[#f0ede8] placeholder-[#4a4540] outline-none focus:border-[#0F766E]/60 transition-colors resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0F766E] text-[#0c0d10] font-black text-sm py-4 rounded-xl hover:bg-[#f5b849] transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send size={15} />
                  {isSubmitting ? "Duke dërguar..." : "Dërgo Mesazhin"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
