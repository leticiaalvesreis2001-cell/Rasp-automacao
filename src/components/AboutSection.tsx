"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { CheckCircle, Shield, Award, Users } from "lucide-react";
import Image from "next/image";

// Componente auxiliar de contador progressivo animado
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(spanRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView && spanRef.current) {
      const node = spanRef.current;
      const controls = animate(0, value, { 
        duration: 2.2, 
        ease: [0.16, 1, 0.3, 1], // Ease out expo para contagem premium
        onUpdate(latest) {
          node.textContent = String(Math.round(latest));
        }
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <span className="font-title font-extrabold text-5xl sm:text-6xl text-brand-primary tracking-tight">
      {prefix}
      <span ref={spanRef}>0</span>
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const textRef = useRef(null);
  const isInViewText = useInView(textRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 100, prefix: "+", suffix: "", label: "Projetos Realizados", icon: CheckCircle },
    { value: 50, prefix: "+", suffix: "", label: "Clientes Atendidos", icon: Users },
    { value: 10, prefix: "+", suffix: "", label: "Anos de Experiência", icon: Award },
    { value: 98, prefix: "", suffix: "%", label: "Satisfação dos Clientes", icon: Shield },
  ];

  return (
    <section id="about" className="relative py-24 bg-brand-dark overflow-hidden border-b border-brand-border/60">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-brand-secondary/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Text & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          
          {/* Left Column: Text Institutional */}
          <div ref={textRef} className="lg:col-span-6 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInViewText ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
                SOBRE A EMPRESA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-extrabold text-white tracking-tight mb-6 leading-tight">
                Engenharia de Alta Performance em Automação Industrial
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInViewText ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-gray-300 font-sans text-base leading-relaxed"
            >
              <p>
                A <strong>Rasp Automação</strong> é referência em soluções tecnológicas integradas para os setores industrial, comercial e residencial de alto padrão. Unindo o rigor da engenharia elétrica com softwares avançados de automação, ajudamos indústrias a otimizar processos, reduzir desperdícios e operar com máxima segurança.
              </p>
              <p>
                Nossa atuação abrange desde a concepção de <strong>projetos elétricos</strong> complexos até a <strong>montagem de painéis de força e controle</strong>, <strong>programação avançada de CLPs e IHMs</strong> e manutenção corretiva/preventiva. Todos os nossos processos seguem estritamente as normas brasileiras e internacionais de segurança e operação, como a <strong>NR10</strong> e <strong>NR12</strong>.
              </p>
              <p>
                Com profissionais altamente qualificados e uma sólida rede de marcas parceiras de padrão internacional, oferecemos uma consultoria ágil e focada em resultados que transformam a produtividade da sua empresa.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Modern Tech Image with border effects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInViewText ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-brand-border/80 aspect-[4/3] w-full group shadow-2xl shadow-brand-dark/80"
          >
            {/* Tech grid border glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-brand-secondary/20 z-10 pointer-events-none rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 z-0 bg-brand-surface">
              <Image
                src="/Rasp-automacao/images/about_company.png"
                alt="Engenheiro elétrico programando painel de controle"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Glowing corner highlights */}
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-brand-primary z-20" />
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-brand-primary z-20" />
            <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-brand-secondary z-20" />
            <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-brand-secondary z-20" />
          </motion.div>

        </div>

        {/* Bottom: Animated Stats Cards in a 4-column row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pt-12 border-t border-brand-border/40">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 flex flex-col justify-between items-start border border-brand-border hover:border-brand-primary/30 transition-all duration-300 group shadow-lg shadow-brand-dark/40"
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {/* Small glowing dot index */}
                  <span className="text-xs text-brand-border font-title font-semibold tracking-widest group-hover:text-brand-primary/50 transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline">
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-sm font-title font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
