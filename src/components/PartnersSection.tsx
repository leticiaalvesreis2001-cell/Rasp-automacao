"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Cpu, Award } from "lucide-react";

const partners = [
  { name: "WEG", type: "Motores & Drives" },
  { name: "Delta", type: "Automação Industrial" },
  { name: "Panasonic", type: "Sensores & CLPs" },
  { name: "Metaltex", type: "Componentes Elétricos" },
  { name: "Prysmian", type: "Cabos & Condutores" },
  { name: "Cemar", type: "Painéis & Quadros" },
];

export default function PartnersSection() {
  // Duplicamos a lista de parceiros para criar o efeito contínuo infinito do marquee
  const marqueePartners = [...partners, ...partners, ...partners];

  return (
    <section className="relative py-12 bg-brand-surface border-b border-brand-border/60 overflow-hidden select-none">
      
      {/* Background glow sutil */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[20vw] h-[20vw] rounded-full bg-brand-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center lg:text-left relative z-10">
        <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-1">
          TECNOLOGIA HOMOLOGADA
        </span>
        <h2 className="text-xs font-title font-semibold text-gray-400 uppercase tracking-wider">
          Trabalhamos com os melhores fabricantes globais
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden py-4 flex flex-row mask-image-horizontal">
        {/* Efeitos de sombra nas laterais para suavizar a entrada/saída */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-surface to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex gap-12 shrink-0 animate-marquee min-w-full">
          {marqueePartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 py-3.5 rounded-xl border border-brand-border bg-brand-card/40 hover:bg-brand-card hover:border-brand-primary/40 transition-all duration-300 group shadow-md"
            >
              {/* Ícone decorativo minimalista com base no parceiro */}
              <div className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-secondary group-hover:text-brand-primary group-hover:scale-105 transition-all duration-300">
                {partner.name === "WEG" || partner.name === "Delta" ? (
                  <Cpu className="w-4 h-4" />
                ) : partner.name === "Panasonic" ? (
                  <Award className="w-4 h-4" />
                ) : (
                  <Cpu className="w-4 h-4 text-brand-secondary" />
                )}
              </div>
              
              <div className="text-left">
                <span className="font-title font-extrabold text-base tracking-wider text-gray-300 group-hover:text-white transition-colors duration-200">
                  {partner.name}
                </span>
                <span className="block text-[9px] text-gray-500 uppercase tracking-widest font-sans">
                  {partner.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
