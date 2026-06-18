"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: "projeto-1",
    title: "Linha de Envase Automatizada",
    category: "Automação Industrial",
    description:
      "Projeto completo de automação de linha de envase para indústria de bebidas. Incluiu programação de CLP Siemens S7-1500, IHM Comfort Panel e integração com sistema SCADA para monitoramento em tempo real.",
    tags: ["CLP Siemens", "SCADA", "IHM", "Inversor de Frequência"],
    gradient: "from-orange-500/20 to-red-600/20",
    image: "/images/portfolio_envase.png",
  },
  {
    id: "projeto-2",
    title: "CCM para Fábrica de Ração",
    category: "Painéis Elétricos",
    description:
      "Fabricação e montagem de Centro de Controle de Motores (CCM) extraível para fábrica de ração animal. 24 gavetas com partida direta e soft-starter, quadro geral de 3200A com barramento de cobre.",
    tags: ["CCM", "Soft-Starter", "NBR IEC 61439", "WEG"],
    gradient: "from-blue-500/20 to-cyan-600/20",
    image: "/images/portfolio_ccm.png",
  },
  {
    id: "projeto-3",
    title: "Retrofit Elétrico Industrial",
    category: "Projetos Elétricos",
    description:
      "Retrofit completo de infraestrutura elétrica de planta fabril com 40 anos de operação. Adequação de subestação de 13.8kV, novo QGDF e redistribuição de cargas com estudo de curto-circuito.",
    tags: ["Retrofit", "Subestação", "QGDF", "NBR 5410"],
    gradient: "from-emerald-500/20 to-teal-600/20",
    image: "/images/portfolio_retrofit.png",
  },
  {
    id: "projeto-4",
    title: "Sistema de Climatização Automatizado",
    category: "Controle e Automação",
    description:
      "Automação de sistema de climatização para galpão de 8.000m². Controle PID de temperatura e umidade com CLP Delta, integração com sensores wireless e dashboard web para monitoramento remoto.",
    tags: ["CLP Delta", "PID", "IoT", "Dashboard"],
    gradient: "from-violet-500/20 to-purple-600/20",
    image: "/images/portfolio_climatizacao.png",
  },
  {
    id: "projeto-5",
    title: "Manutenção Preventiva Programada",
    category: "Manutenção Industrial",
    description:
      "Contrato de manutenção preventiva programada para indústria alimentícia. Inspeções mensais com termografia infravermelha, reaperto técnico, testes de isolamento e relatórios de conformidade.",
    tags: ["Termografia", "Preventiva", "NR10", "Relatórios"],
    gradient: "from-amber-500/20 to-yellow-600/20",
    image: "/images/about_company.png",
  },
  {
    id: "projeto-6",
    title: "Painel de Automação CLP+IHM",
    category: "Programação CLP/IHM",
    description:
      "Desenvolvimento de lógica de controle em Ladder e Texto Estruturado para CLP Rockwell Allen-Bradley. Telas de IHM com gráficos de tendência, alarmes inteligentes e receitas parametrizáveis.",
    tags: ["Rockwell", "Ladder", "IHM", "Alarmes"],
    gradient: "from-rose-500/20 to-pink-600/20",
    image: "/images/hero_bg.png",
  },
];

export default function PortfolioSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) =>
      prev === 0 ? portfolioData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) =>
      prev === portfolioData.length - 1 ? 0 : prev + 1
    );
  };

  const active = portfolioData[activeIdx];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-brand-surface bg-tech-grid border-b border-brand-border/60"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark/40 z-0 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[30vw] h-[30vw] rounded-full bg-brand-secondary/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
            CASES DE SUCESSO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-extrabold text-white tracking-tight mb-6 leading-tight">
            Portfólio de Projetos
          </h2>
          <p className="text-gray-400 font-sans text-base leading-relaxed">
            Conheça alguns dos projetos que realizamos e os resultados entregues
            para nossos clientes em diversos segmentos industriais.
          </p>
        </div>

        {/* Portfolio Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Slide */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-2xl glass-panel border border-brand-border min-h-[440px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-8 w-full"
              >
                {/* Imagem do Projeto */}
                <div className="md:col-span-5 relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-brand-border/60 bg-brand-surface shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-transparent to-brand-secondary/10 z-10 pointer-events-none" />
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Conteúdo do Projeto */}
                <div className="md:col-span-7 flex flex-col justify-between text-left">
                  <div>
                    {/* Category Badge */}
                    <span className="inline-block text-[10px] font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3 py-1.5 rounded-full mb-4">
                      {active.category}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-title font-extrabold text-white mb-3 relative z-10 leading-tight">
                      {active.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-6 relative z-10">
                      {active.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 relative z-10 mb-6">
                      {active.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold text-gray-300 bg-brand-surface border border-brand-border px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Counter */}
                    <div className="flex items-center gap-3 relative z-10">
                      <span className="text-xs text-gray-500 font-title font-semibold">
                        {String(activeIdx + 1).padStart(2, "0")} /{" "}
                        {String(portfolioData.length).padStart(2, "0")}
                      </span>
                      <div className="flex-1 h-[2px] bg-brand-border rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-brand-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${((activeIdx + 1) / portfolioData.length) * 100}%`,
                          }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-6 right-6 flex gap-3 z-20">
              <button
                onClick={handlePrev}
                aria-label="Projeto anterior"
                className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Próximo projeto"
                className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right - Thumbnails List */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {portfolioData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setDirection(idx > activeIdx ? 1 : -1);
                  setActiveIdx(idx);
                }}
                className={`text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  idx === activeIdx
                    ? "bg-brand-card border-brand-primary/50 shadow-lg shadow-brand-primary/10"
                    : "bg-brand-surface/50 border-brand-border hover:border-brand-border-glow"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-title font-bold tracking-wider ${
                      idx === activeIdx
                        ? "text-brand-primary"
                        : "text-gray-500"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4
                      className={`text-sm font-title font-bold transition-colors duration-200 ${
                        idx === activeIdx ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
