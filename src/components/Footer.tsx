"use client";

import { ShieldCheck, Phone, Mail, MapPin, ArrowUp, Linkedin, Facebook, Instagram } from "lucide-react";

const navigation = {
  main: [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Processo", href: "#process" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ],
  services: [
    { name: "Instalações Elétricas", href: "#services" },
    { name: "Controle e Automação", href: "#services" },
    { name: "Montagem de Painéis", href: "#services" },
    { name: "Projetos Elétricos", href: "#services" },
    { name: "Manutenção Industrial", href: "#services" },
    { name: "Programação de CLPs e IHMs", href: "#services" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center glow-primary">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <span className="font-title font-extrabold text-lg tracking-tight">
                <span className="text-white">RASP</span>{" "}
                <span className="text-brand-primary">AUTOMAÇÃO</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Engenharia especializada em soluções de automação industrial, projetos de alta complexidade, montagem de painéis elétricos e manutenção industrial voltados ao aumento da produtividade e segurança operacional.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Rasp Automação" className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Rasp Automação" className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Rasp Automação" className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-sm font-title font-bold uppercase tracking-wider text-white mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-gray-400 hover:text-brand-primary transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Shortcut */}
          <div>
            <h3 className="text-sm font-title font-bold uppercase tracking-wider text-white mb-6">
              Nossos Serviços
            </h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-gray-400 hover:text-brand-primary transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Location Map & Contact */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-title font-bold uppercase tracking-wider text-white mb-4">
                Contato & Atendimento
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>(11) 96398-7438</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                  <a href="mailto:contato@raspautomacao.com.br" className="hover:text-brand-primary transition-colors">
                    contato@raspautomacao.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>São Paulo, SP - Atendimento Nacional</span>
                </li>
              </ul>
            </div>
            {/* Map Frame Stylized */}
            <div className="relative w-full h-32 rounded-lg overflow-hidden border border-brand-border bg-brand-surface shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975765080075!2d-46.65649432467262!3d-23.56134967880026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f943179d9777!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) opacity(50%)" }}
                allowFullScreen={false}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Rasp Automação"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Rasp Automação. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Voltar ao topo da página"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-brand-surface border border-brand-border hover:border-brand-primary text-gray-400 hover:text-brand-primary transition-all duration-300 text-xs font-semibold group cursor-pointer"
          >
            Voltar ao topo
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
