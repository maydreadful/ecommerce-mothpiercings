import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import CartDrawer from "@/components/CartDrawer";

// Configuração da fonte Serif (Elegante/Gótica) para os títulos
const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--font-cinzel",
});

// Configuração da fonte Sans-Serif (Limpa) para os textos
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Moth Piercing | Adorne sua Escuridão",
  description: "Piercings e joias corporais alternativas em titânio e aço cirúrgico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body 
        className={`${montserrat.variable} ${cinzel.variable} font-body bg-background text-foreground antialiased overflow-x-hidden min-h-screen`}
      >
        {/* O conteúdo das suas páginas (Home, Login, Carrinho) vai aparecer aqui */}
        {children}
        
        {/* O Carrinho Lateral fica aqui para poder ser aberto de qualquer página */}
        <CartDrawer />
      </body>
    </html>
  );
}