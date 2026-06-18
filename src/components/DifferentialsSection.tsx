"use client";

import { motion } from "framer-motion";
import {
  Clock,
  BadgeCheck,
  Headphones,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const differentials = [
  {
    icon: BadgeCheck,
    title: "Registro CREA Ativo",
    description:
      "Todos os projetos são assinados por engenheiros com registro ativo no CREA, garantindo responsabilidade técnica e validade legal perante órgãos reguladores.",
    highlight: "Responsabilidade Técnica",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade NR10 & NR12",
    description:
      "Executamos cada projeto seguindo rigorosamente as normas reguladoras NR10 (Segurança em Eletricidade) e NR12 (Segurança de Máquinas), protegendo seus colaboradores.",
    highlight: "Segurança Normativa",
  },
  {
    icon: Clock,
    title: "Prazos Confiáveis",
    description:
      "Planejamento detalhado com cronogramas realistas e entregas pontuais. Nosso histórico de cumprimento de prazos é um dos pilares da confiança dos nossos clientes.",
    highlight: "Compromisso com Prazo",
  },
  {
    icon: Headphones,
    title: "Suporte Técnico Ágil",
    description:
      "Suporte pós-entrega com plantão técnico de emergência. Estamos prontos para atuar rapidamente em caso de paradas não programadas ou urgências fabris.",
    highlight: "Atendimento 24h",
  },
  {
    icon: TrendingUp,
    title: "ROI Comprovado",
    description:
      "Nossas soluções de automação entregam retorno sobre o investimento mensurável, com redução comprovada de custos operacionais e aumento de produtividade.",
    highlight: "Resultados Mensuráveis",
  },
  {
    icon: Lightbulb,
    title: "Inovação Contínua",
    description:
      "Investimos constantemente em capacitação e novas tecnologias para oferecer as melhores soluções do mercado, incluindo IoT industrial e Indústria 4.0.",
    highlight: "Tecnologia de Ponta",
  },
];

export default function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="relative py-24 bg-brand-dark overflow-hidden border-b border-brand-border/60"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] rounded-full bg-brand-primary/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[25vw] h-[25vw] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
            POR QUE NOS ESCOLHER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-extrabold text-white tracking-tight mb-6 leading-tight">
            Diferenciais que Garantem Excelência
          </h2>
          <p className="text-gray-400 font-sans text-base leading-relaxed">
            Combinamos expertise técnica com compromisso operacional para
            entregar projetos que superam as expectativas dos nossos clientes.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-panel glass-panel-hover rounded-2xl p-8 border border-brand-border group relative overflow-hidden"
              >
                {/* Corner glow */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-brand-primary/10 to-transparent pointer-events-none transition-all duration-300 group-hover:from-brand-primary/20" />

                {/* Highlight Badge */}
                <span className="inline-block text-[10px] font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full mb-6">
                  {item.highlight}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border text-brand-primary flex items-center justify-center mb-6 shadow-md transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-105">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-title font-bold text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
