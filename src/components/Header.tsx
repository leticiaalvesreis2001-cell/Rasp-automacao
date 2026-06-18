"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Processo", href: "#process" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-brand-dark/80 backdrop-blur-md border-b border-brand-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative w-9 h-9 rounded-lg bg-brand-primary flex items-center justify-center glow-primary transition-transform duration-300 group-hover:scale-105">
                <ShieldCheck className="w-5 h-5 text-white" />
                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-title font-extrabold text-xl tracking-tight">
                <span className="text-white">RASP</span>{" "}
                <span className="text-brand-primary">AUTOMAÇÃO</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-300 hover:text-brand-primary transition-colors duration-300 relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-brand-primary text-sm font-bold text-white hover:bg-brand-primary-hover transition-all duration-300 glow-primary hover:shadow-brand-primary/40 group"
            >
              Orçamento
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              aria-label="Abrir menu principal"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-dark/95 backdrop-blur-lg px-6 py-6 lg:hidden flex flex-col"
          >
            {/* Header in mobile panel */}
            <div className="flex items-center justify-between mb-8">
              <a
                href="#home"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center glow-primary">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <span className="font-title font-extrabold text-lg tracking-tight">
                  <span className="text-white">RASP</span>{" "}
                  <span className="text-brand-primary">AUTOMAÇÃO</span>
                </span>
              </a>
              <button
                type="button"
                aria-label="Fechar menu principal"
                className="-m-2.5 rounded-lg p-2.5 text-gray-300 hover:text-white cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Links mobile */}
            <div className="flex flex-col gap-y-4 my-auto items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-semibold text-gray-200 hover:text-brand-primary transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Footer/CTA */}
            <div className="mt-auto flex flex-col gap-4 items-center">
              <a
                href="#contact"
                className="w-full text-center px-6 py-3 rounded-lg bg-brand-primary font-bold text-white hover:bg-brand-primary-hover transition-colors duration-200 glow-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar Orçamento
              </a>
              <span className="text-xs text-gray-500">
                (11) 96398-7438 • contato@raspautomacao.com.br
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
