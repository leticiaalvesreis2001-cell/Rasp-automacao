"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Lightbulb,
  Wrench,
  TestTube,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Levantamento Técnico",
    description:
      "Visita técnica ao site para levantamento de dados, entendimento do processo atual e coleta de requisitos operacionais.",
    color: "text-orange-400",
    borderColor: "border-orange-500/20",
    bgGlow: "bg-orange-500/10",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Projeto e Engenharia",
    description:
      "Elaboração de diagramas, dimensionamento de componentes, especificação de materiais e planejamento detalhado da execução.",
    color: "text-amber-400",
    borderColor: "border-amber-500/20",
    bgGlow: "bg-amber-500/10",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Fabricação e Montagem",
    description:
      "Montagem de painéis, instalação de infraestrutura elétrica e cabeamento seguindo rigorosamente o projeto aprovado.",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    bgGlow: "bg-cyan-500/10",
  },
  {
    number: "04",
    icon: TestTube,
    title: "Programação e Testes",
    description:
      "Desenvolvimento de lógicas de CLP/IHM, parametrização de inversores e testes de ponto a ponto em bancada e campo.",
    color: "text-blue-400",
    borderColor: "border-blue-500/20",
    bgGlow: "bg-blue-500/10",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Comissionamento",
    description:
      "Startup assistido com verificação de todas as proteções, sequência de partida, ajustes finos e validação de performance.",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    bgGlow: "bg-emerald-500/10",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Suporte Pós-Entrega",
    description:
      "Documentação As-Built, treinamento de operadores e suporte técnico contínuo com plantão de emergência disponível.",
    color: "text-violet-400",
    borderColor: "border-violet-500/20",
    bgGlow: "bg-violet-500/10",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 bg-brand-dark overflow-hidden border-b border-brand-border/60"
    >
      {/* Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-brand-primary/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
            METODOLOGIA DE TRABALHO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-extrabold text-white tracking-tight mb-6 leading-tight">
            Nosso Processo de Execução
          </h2>
          <p className="text-gray-400 font-sans text-base leading-relaxed">
            Seguimos uma metodologia estruturada em 6 etapas para garantir a
            qualidade, segurança e previsibilidade em cada projeto que
            executamos.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-brand-primary/30 via-brand-secondary/30 to-brand-primary/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle */}
                  <div
                    className={`relative z-10 w-[72px] h-[72px] rounded-2xl ${step.bgGlow} border ${step.borderColor} flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`w-7 h-7 ${step.color}`} />
                    {/* Number badge */}
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-[10px] font-title font-bold text-brand-primary">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-title font-bold text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans max-w-xs">
                    {step.description}
                  </p>

                  {/* Arrow connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 text-brand-border">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
