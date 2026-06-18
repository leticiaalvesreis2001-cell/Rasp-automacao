"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [selectedService, setSelectedService] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simula envio — em produção, conectar à API
    setTimeout(() => {
      setFormStatus("sent");
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 bg-brand-dark overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-[30vw] h-[30vw] rounded-full bg-brand-primary/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[25vw] h-[25vw] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
            FALE CONOSCO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-extrabold text-white tracking-tight mb-6 leading-tight">
            Solicite seu Orçamento
          </h2>
          <p className="text-gray-400 font-sans text-base leading-relaxed">
            Entre em contato conosco para discutir seu projeto. Nossa equipe
            técnica está pronta para entender suas necessidades e oferecer a
            melhor solução.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Quick Contact Cards */}
            <div className="glass-panel rounded-2xl border border-brand-border p-6 flex items-start gap-4 group hover:border-brand-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-title font-bold text-white mb-1">
                  Telefone / WhatsApp
                </h3>
                <p className="text-sm text-gray-400">(11) 96398-7438</p>
                <a
                  href="https://wa.me/5511963987438"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-brand-primary font-semibold mt-1 hover:underline"
                >
                  Abrir WhatsApp
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl border border-brand-border p-6 flex items-start gap-4 group hover:border-brand-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-title font-bold text-white mb-1">
                  E-mail
                </h3>
                <a
                  href="mailto:contato@raspautomacao.com.br"
                  className="text-sm text-gray-400 hover:text-brand-primary transition-colors"
                >
                  contato@raspautomacao.com.br
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-2xl border border-brand-border p-6 flex items-start gap-4 group hover:border-brand-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-title font-bold text-white mb-1">
                  Localização
                </h3>
                <p className="text-sm text-gray-400">
                  São Paulo, SP — Atendimento Nacional
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl border border-brand-border p-6 flex items-start gap-4 group hover:border-brand-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-title font-bold text-white mb-1">
                  Horário de Atendimento
                </h3>
                <p className="text-sm text-gray-400">
                  Seg a Sex: 08:00 — 18:00
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Plantão 24h para emergências industriais
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-2xl border border-brand-border p-8 md:p-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Nome */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-title font-bold text-gray-300 uppercase tracking-wider"
                  >
                    Nome Completo
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all duration-300"
                  />
                </div>

                {/* Empresa */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-company"
                    className="text-xs font-title font-bold text-gray-300 uppercase tracking-wider"
                  >
                    Empresa
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Nome da empresa"
                    className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all duration-300"
                  />
                </div>

                {/* E-mail */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-title font-bold text-gray-300 uppercase tracking-wider"
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all duration-300"
                  />
                </div>

                {/* Telefone */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-phone"
                    className="text-xs font-title font-bold text-gray-300 uppercase tracking-wider"
                  >
                    Telefone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Serviço de interesse */}
              <div className="flex flex-col gap-2 mb-6">
                <label
                  htmlFor="contact-service"
                  className="text-xs font-title font-bold text-gray-300 uppercase tracking-wider"
                >
                  Serviço de Interesse
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all duration-300 appearance-none cursor-pointer ${
                    selectedService === "" ? "text-gray-500" : "text-white"
                  }`}
                >
                  <option value="" disabled className="bg-brand-surface text-gray-500">
                    Selecione um serviço
                  </option>
                  <option value="instalacoes" className="bg-brand-surface text-white">
                    Instalações Elétricas Industriais
                  </option>
                  <option value="automacao" className="bg-brand-surface text-white">
                    Controle e Automação
                  </option>
                  <option value="paineis" className="bg-brand-surface text-white">
                    Montagem de Painéis Elétricos
                  </option>
                  <option value="projetos" className="bg-brand-surface text-white">
                    Projetos Elétricos
                  </option>
                  <option value="manutencao" className="bg-brand-surface text-white">
                    Manutenção Industrial
                  </option>
                  <option value="programacao" className="bg-brand-surface text-white">
                    Programação de CLPs e IHMs
                  </option>
                  <option value="outro" className="bg-brand-surface text-white">
                    Outro
                  </option>
                </select>
              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-2 mb-8">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-title font-bold text-gray-300 uppercase tracking-wider"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Descreva brevemente o que precisa..."
                  className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "sending" || formStatus === "sent"}
                className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 cursor-pointer ${
                  formStatus === "sent"
                    ? "bg-emerald-600 text-white"
                    : formStatus === "sending"
                    ? "bg-brand-primary/60 text-white/60"
                    : "bg-brand-primary hover:bg-brand-primary-hover text-white glow-primary hover:shadow-brand-primary/50"
                }`}
              >
                {formStatus === "idle" && (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Solicitação
                  </>
                )}
                {formStatus === "sending" && (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                )}
                {formStatus === "sent" && (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Mensagem Enviada!
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Respondemos em até 24 horas úteis. Para urgências, ligue
                diretamente.
              </p>
            </form>
          </motion.div>
        </div>

        {/* WhatsApp Floating Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 glass-panel rounded-2xl border border-brand-border p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-[#25D366]" />
            </div>
            <div>
              <h3 className="text-base font-title font-bold text-white">
                Prefere uma resposta imediata?
              </h3>
              <p className="text-sm text-gray-400">
                Fale direto com nosso time técnico pelo WhatsApp.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5511963987438"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold transition-all duration-300 text-sm shrink-0 shadow-lg shadow-[#25D366]/20 group"
          >
            <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            Conversar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
