"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck, Cpu, Zap, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Scroll Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen h-[100vh] min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-brand-dark pt-16 bg-tech-grid"
    >
      {/* Background Parallax - Glows and Gradients */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Imagem de Fundo Premium */}
        <Image
          src="/images/hero_bg.png"
          alt="Painel de automação industrial de alta tecnologia"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25 mix-blend-luminosity select-none"
        />

        {/* Glow Laranja */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] max-w-[550px] rounded-full bg-brand-primary/22 blur-[130px] animate-pulse-slow" />
        {/* Glow Azul */}
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[40vw] h-[40vw] max-w-[650px] rounded-full bg-brand-secondary/22 blur-[160px]" />
        
        {/* Decorative Grid Line Highlights */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/30 to-brand-dark" />
      </motion.div>

      {/* Cyberpunk Tech Lines (Visual Representation) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-primary/0 via-brand-primary/50 to-brand-primary/0" />
        <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-secondary/0 via-brand-secondary/50 to-brand-secondary/0" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div style={{ y: textY, opacity: opacityText }} className="flex flex-col items-center">
          
          {/* Badge: Trust indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-card/85 border border-brand-border backdrop-blur-sm mb-6 shadow-lg shadow-brand-dark/50"
          >
            <ShieldCheck className="w-4 h-4 text-brand-primary" />
            <span className="text-xs font-semibold text-gray-200 tracking-wide uppercase">
              Engenharia Registrada CREA & Conformidade NR10/NR12
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-title font-extrabold tracking-tight mb-6 leading-[1.1] max-w-5xl"
          >
            <span className="text-gradient-primary">Soluções Inteligentes em</span>{" "}
            <span className="text-gradient-brand glow-primary">Automação Industrial</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed font-sans"
          >
            Projetos elétricos, automação industrial, montagem de painéis e manutenção especializada para aumentar a produtividade e a segurança da sua empresa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mb-16"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold transition-all duration-300 glow-primary hover:shadow-brand-primary/50 group text-base"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a
              href="https://wa.me/5511963987438"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-primary text-gray-200 hover:text-white font-bold transition-all duration-300 text-base group"
            >
              <MessageSquare className="w-5 h-5 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Highlight Cards/Indicators (Confiança) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full border-t border-brand-border/60 pt-8"
          >
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-brand-border">
                <Cpu className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white uppercase tracking-wider">Alta Tecnologia</p>
                <p className="text-xs text-gray-400">Hardwares de ponta</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-brand-border">
                <Zap className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white uppercase tracking-wider">Eficiência Energética</p>
                <p className="text-xs text-gray-400">Economia e performance</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-end">
              <div className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-brand-border">
                <ShieldCheck className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white uppercase tracking-wider">Segurança Máxima</p>
                <p className="text-xs text-gray-400">Conformidade técnica integral</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-dark to-transparent z-10 pointer-events-none" />
    </section>
  );
}
