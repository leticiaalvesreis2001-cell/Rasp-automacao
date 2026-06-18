import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rasp Automação | Soluções Inteligentes em Automação Industrial",
  description:
    "Líder em automação industrial, projetos elétricos, montagem de painéis elétricos, programação de CLPs e IHMs, e manutenção técnica especializada. Aumente a produtividade de sua empresa com segurança.",
  keywords: [
    "Automação Industrial",
    "Projetos Elétricos",
    "Painéis Elétricos",
    "Programação CLP",
    "Programação IHM",
    "Manutenção Industrial",
    "Instalações Elétricas Industriais",
    "Montagem de Painéis",
    "Controle e Automação",
    "Engenharia Elétrica SP",
  ],
  authors: [{ name: "Rasp Automação" }],
  creator: "Rasp Automação",
  publisher: "Rasp Automação",
  metadataBase: new URL("https://raspautomacao.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://raspautomacao.com.br",
    title: "Rasp Automação | Soluções Inteligentes em Automação Industrial",
    description:
      "Desenvolvemos engenharia elétrica e automação de alta performance. Projetos elétricos, CLPs, IHMs, painéis e manutenção industrial.",
    siteName: "Rasp Automação",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rasp Automação - Automação e Painéis Elétricos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasp Automação | Engenharia e Automação Industrial",
    description:
      "Aumente a eficiência operacional e segurança da sua indústria com nossas soluções de automação e painéis elétricos.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="bg-brand-dark text-gray-100 min-h-screen flex flex-col antialiased selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
