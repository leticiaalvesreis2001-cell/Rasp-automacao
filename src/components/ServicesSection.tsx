"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Cpu, Layout, FileText, Wrench, Terminal, CheckCircle2, X, ArrowRight, LucideIcon } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  icon: LucideIcon;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  scope: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "instalacoes",
    title: "Instalações Elétricas Industriais",
    icon: Zap,
    shortDesc: "Montagem de infraestrutura, cabeamento estruturado de força e comando e adequações de média e baixa tensão.",
    longDesc: "Executamos montagem completa de infraestrutura elétrica industrial (perfilados, leitos, eletrodutos, canaletas) e lançamento de cabos de energia e comando. Realizamos adequações elétricas industriais para otimizar a distribuição de cargas e garantir a conformidade técnica em subestações e linhas de produção.",
    benefits: ["Distribuição equilibrada de carga elétrica", "Infraestrutura robusta de alta durabilidade", "Total conformidade com a norma NBR 5410"],
    scope: ["Lançamento e conectorização de cabos de potência", "Instalação de bandejamento e leitos para cabos", "Adequações em cabines primárias e secundárias", "Infraestrutura elétrica para maquinários industriais"]
  },
  {
    id: "automacao",
    title: "Controle e Automação",
    icon: Cpu,
    shortDesc: "Desenvolvimento de lógicas de intertravamento de máquinas, controle de processos e parametrização de inversores.",
    longDesc: "Projetamos sistemas modernos para o controle automático de processos fabris. Integramos sensores de medição (pressão, vazão, temperatura), atuadores industriais, inversores de frequência e redes industriais de comunicação para eliminar processos manuais e reduzir a variabilidade operacional.",
    benefits: ["Aumento da precisão nos ciclos de produção", "Redução drástica de falhas operacionais humanas", "Integração total dos dados de fábrica"],
    scope: ["Dimensionamento de sensores e instrumentos de medição", "Integração de acionamentos elétricos e inversores", "Configuração de redes de comunicação (Modbus, Profibus, Ethernet/IP)", "Sistemas de automação pneumática e hidráulica"]
  },
  {
    id: "paineis",
    title: "Montagem de Painéis Elétricos",
    icon: Layout,
    shortDesc: "Projetos e montagens de quadros de força (QGDF), CCMs e painéis de controle industriais sob medida.",
    longDesc: "Fabricamos painéis elétricos industriais robustos e organizados, seguindo rigorosamente a norma NBR IEC 61439-1. Desenvolvemos desde Quadros Gerais de Distribuição de Força (QGDF) até Centros de Controle de Motores (CCM) e painéis de automação de CLP e IHM personalizados.",
    benefits: ["Layout lógico que facilita a manutenção preventiva", "Componentes homologados das melhores marcas (WEG, Cemar)", "Proteção robusta contra sobrecargas e curtos-circuitos"],
    scope: ["Painéis de Automação com CLP e IHMs integrados", "Centros de Controle de Motores (CCM fixo e extraível)", "Quadros de Distribuição e Força (QGDF)", "Quadros de Comando e Sinalização"]
  },
  {
    id: "projetos",
    title: "Projetos Elétricos",
    icon: FileText,
    shortDesc: "Elaboração de diagramas unifilares e multifilares, dimensionamento de redes elétricas industriais em CAD.",
    longDesc: "Desenvolvemos esquemas elétricos detalhados (diagramas unifilares, multifilares, plantas de encaminhamento e detalhes de montagem) utilizando softwares líderes como AutoCAD Electrical e EPLAN. Nossos engenheiros calculam e dimensionam dispositivos de proteção e cabos com responsabilidade CREA.",
    benefits: ["Documentação técnica 'As-Built' completa", "Prevenção de custos excessivos por superdimensionamento", "Projetos aprovados e certificados pelo CREA"],
    scope: ["Diagramas lógicos e diagramas funcionais", "Projetos de iluminação e força industrial", "Estudos de curto-circuito e coordenação de proteção", "Especificação detalhada de lista de materiais (BOM)"]
  },
  {
    id: "manutencao",
    title: "Manutenção Industrial",
    icon: Wrench,
    shortDesc: "Manutenção corretiva rápida, preventiva programada e análise termográfica para eliminar paradas de fábrica.",
    longDesc: "Oferecemos soluções em assistência técnica preventiva e corretiva para minimizar o tempo de parada (downtime). Realizamos diagnósticos elétricos, calibração de malhas de controle, reaperto técnico de conexões, testes de isolamento e termografia preditiva em painéis de alta e baixa tensão.",
    benefits: ["Redução substancial de paradas inesperadas", "Prolongamento da vida útil de componentes caros", "Identificação de anomalias térmicas antes que virem quebras"],
    scope: ["Análise termográfica infravermelha de painéis", "Substituição preventiva de contatores, relés e disjuntores", "Calibração de instrumentos de controle de campo", "Plantão técnico de emergência para correção de falhas"]
  },
  {
    id: "programacao",
    title: "Programação de CLPs e IHMs",
    icon: Terminal,
    shortDesc: "Desenvolvimento de lógicas de comando em Ladder, blocos funcionais e interfaces dinâmicas para operadores.",
    longDesc: "Escrevemos códigos robustos e documentados para Controladores Lógicos Programáveis (CLPs) e projetamos telas táteis intuitivas para Interfaces Homem-Máquina (IHMs). Trabalhamos com lógicas de segurança (Safety) e malhas PID complexas utilizando plataformas Siemens, Rockwell Automation, Delta e Panasonic.",
    benefits: ["Interfaces limpas de fácil leitura para o operador", "Estrutura de software modularizada com autodiagnóstico", "Lógicas de segurança blindadas contra falhas críticas"],
    scope: ["Lógicas de CLP em linguagem Ladder, Texto Estruturado e SFC", "Telas de IHM dinâmicas com gráficos e controle de alarmes", "Parametrização de malhas fechadas PID de temperatura e pressão", "Comunicação e supervisão de dados de máquinas (SCADA)"]
  }
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const handleSelectService = (service: ServiceItem) => {
    setActiveService(service);
  };

  const handleCloseModal = () => {
    setActiveService(null);
  };

  return (
    <section id="services" className="relative py-24 bg-brand-surface bg-tech-grid border-b border-brand-border/60">
      
      {/* Background radial overlay */}
      <div className="absolute inset-0 bg-brand-dark/40 z-0 pointer-events-none" />

      {/* Glow secundário */}
      <div className="absolute bottom-1/4 right-0 w-[30vw] h-[30vw] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
            NOSSO PORTFÓLIO DE ENGENHARIA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-extrabold text-white tracking-tight mb-6 leading-tight">
            Serviços de Engenharia e Tecnologia Industrial
          </h2>
          <p className="text-gray-400 font-sans text-base leading-relaxed">
            Oferecemos soluções elétricas e de automação ponta a ponta, projetadas para impulsionar a segurança, a conformidade de normas reguladoras e a lucratividade do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between items-start h-full border border-brand-border group relative overflow-hidden"
              >
                {/* Visual tech grid light indicator on top-right */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-primary/10 to-transparent pointer-events-none transition-all duration-300 group-hover:from-brand-primary/20" />

                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border text-brand-primary flex items-center justify-center mb-8 shadow-md transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-title font-bold text-white mb-4 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed font-sans mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Benefits List */}
                  <ul className="space-y-3.5 mb-8">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => handleSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-brand-primary transition-colors duration-200 mt-auto group/btn cursor-pointer"
                >
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal - Renderized with AnimatePresence */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-brand-dark/90 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="relative w-full max-w-3xl rounded-2xl bg-brand-card border border-brand-border p-6 md:p-10 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                aria-label="Fechar modal"
                className="absolute top-5 right-5 p-2 rounded-lg bg-brand-surface border border-brand-border hover:border-brand-primary text-gray-400 hover:text-brand-primary transition-all duration-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border text-brand-primary flex items-center justify-center shadow-lg">
                  {(() => {
                    const IconComp = activeService.icon;
                    return <IconComp className="w-6 h-6" />;
                  })()}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest block">
                    SERVIÇO ESPECIALIZADO
                  </span>
                  <h3 className="text-xl sm:text-2xl font-title font-extrabold text-white">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans mb-8">
                {activeService.longDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-brand-border/60 pt-8">
                {/* Column 1: Scope of Work */}
                <div>
                  <h4 className="text-xs font-title font-bold text-white uppercase tracking-wider mb-4">
                    Escopo de Execução
                  </h4>
                  <ul className="space-y-3">
                    {activeService.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-400 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Value/Benefits */}
                <div>
                  <h4 className="text-xs font-title font-bold text-white uppercase tracking-wider mb-4">
                    Benefícios e Resultados
                  </h4>
                  <ul className="space-y-3">
                    {activeService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-brand-border/60 pt-8 mt-4">
                <a
                  href="#contact"
                  onClick={handleCloseModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold transition-all duration-300 glow-primary text-sm sm:w-auto text-center"
                >
                  Solicitar Orçamento Deste Serviço
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-3.5 rounded-xl bg-brand-surface border border-brand-border hover:border-gray-400 text-gray-300 font-bold transition-colors duration-200 text-sm sm:w-auto text-center cursor-pointer"
                >
                  Voltar para lista
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
