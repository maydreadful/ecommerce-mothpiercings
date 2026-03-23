// Arquivo: app/auth/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-void flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--silver)) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-silver hover:text-foreground transition-colors duration-300 mb-8 font-body text-sm tracking-[0.1em] uppercase">
          <ArrowLeft size={16} /> Voltar
        </Link>

        <div className="text-center mb-10">
          <h1 className="font-display text-3xl tracking-[0.15em] text-foreground">
            MOTH<span className="text-blood">PIERCING</span>
          </h1>
          <p className="text-silver font-body text-sm tracking-[0.2em] uppercase mt-3">
            {isLogin ? "Bem-vindo de volta" : "Junte-se ao coven"}
          </p>
        </div>

        <div className="bg-card border border-border p-8 md:p-10">
          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-silver font-body mb-2">Nome</label>
                <input type="text" className="w-full bg-transparent border border-border text-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-blood transition-colors duration-300" placeholder="Seu nome" />
              </div>
            )}
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-silver font-body mb-2">Email</label>
              <input type="email" className="w-full bg-transparent border border-border text-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-blood transition-colors duration-300" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-silver font-body mb-2">Senha</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} className="w-full bg-transparent border border-border text-foreground px-4 py-3 pr-12 font-body text-sm focus:outline-none focus:border-blood transition-colors duration-300" placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-silver hover:text-foreground">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="button" className="w-full border border-foreground text-foreground py-3 font-body text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-void transition-all duration-500 active:scale-[0.98]">
              {isLogin ? "Entrar" : "Criar Conta"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-border" />
            <span className="text-muted-foreground font-body text-xs tracking-[0.1em] uppercase">ou</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <button onClick={() => setIsLogin(!isLogin)} className="w-full text-center text-silver hover:text-foreground font-body text-sm transition-colors duration-300">
            {isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Faça login"}
          </button>
        </div>
      </div>
    </div>
  );
}