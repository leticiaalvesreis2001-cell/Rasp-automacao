"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Carlos Eduardo",
    role: "Gerente de Manutenção",
    company: "Indústria Alimentícia Ltda.",
    content:
      "A Rasp Automação transformou completamente nossa linha de produção. O projeto de automação reduziu nossas paradas não programadas em 60% e a equipe cumpriu rigorosamente todos os prazos estabelecidos. Profissionais de altíssimo nível.",
    rating: 5,
    initials: "CE",
  },
  {
    id: "t2",
    name: "Ana Paula Mendes",
    role: "Diretora de Operações",
    company: "Metalúrgica Precisão S.A.",
    content:
      "Contratamos a Rasp para o retrofit elétrico completo da nossa planta. O resultado superou nossas expectativas em todos os aspectos: documentação impecável, execução segura e uma economia de energia de 25% após a adequação.",
    rating: 5,
    initials: "AM",
  },
  {
    id: "t3",
    name: "Roberto Santos",
    role: "Engenheiro de Processos",
    company: "Química Industrial do Brasil",
    content:
      "A programação do CLP e IHM ficou excepcional. As telas são intuitivas, os alarmes inteligentes evitam falsos positivos e a lógica de controle PID entregou precisão de temperatura que nunca alcançamos antes. Recomendo sem hesitar.",
    rating: 5,
    initials: "RS",
  },
  {
    id: "t4",
    name: "Fernanda Lima",
    role: "Coordenadora de Facilities",
    company: "Centro Logístico Premium",
    content:
      "O sistema de climatização automatizado da Rasp nos proporcionou um controle preciso de temperatura e umidade no nosso galpão de 8.000m². O dashboard de monitoramento remoto é um diferencial incrível.",
    rating: 5,
    initials: "FL",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const active = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-brand-surface bg-tech-grid border-b border-brand-border/60"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark/40 z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[25vw] h-[25vw] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
            O QUE NOSSOS CLIENTES DIZEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-extrabold text-white tracking-tight mb-6 leading-tight">
            Depoimentos e Resultados
          </h2>
          <p className="text-gray-400 font-sans text-base leading-relaxed">
            A satisfação dos nossos clientes é o reflexo da qualidade e
            comprometimento que entregamos em cada projeto.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-panel rounded-2xl border border-brand-border p-8 md:p-12 min-h-[320px] overflow-hidden">
            {/* Decorative Quote */}
            <div className="absolute top-6 right-8 text-brand-primary/10">
              <Quote className="w-24 h-24" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Content */}
                <blockquote className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans mb-8 max-w-3xl italic">
                  &ldquo;{active.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center text-brand-primary font-title font-bold text-sm">
                    {active.initials}
                  </div>
                  <div>
                    <p className="text-sm font-title font-bold text-white">
                      {active.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {active.role} • {active.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-6 right-6 flex gap-3 z-20">
              <button
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? 1 : -1);
                  setCurrent(idx);
                }}
                aria-label={`Ir para depoimento ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current
                    ? "w-8 bg-brand-primary"
                    : "w-2 bg-brand-border hover:bg-brand-border-glow"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
