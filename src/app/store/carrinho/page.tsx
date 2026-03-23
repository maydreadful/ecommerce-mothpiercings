// Arquivo: app/cart/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, Trash2, CreditCard, QrCode, ArrowLeft, ShoppingBag, Package } from "lucide-react";
import Header from "@/components/Header";
// import Footer from "@/components/Footer"; // Descomente quando criarmos o Footer

export default function CartPage() {
  // Simulando dados para você ver a tela funcionando (depois trocaremos pelo Zustand/Banco de Dados)
  const isUserLoggedIn = true; 
  const [items, setItems] = useState([
    {
      id: "1",
      product_id: "p1",
      quantity: 1,
      product: { name: "Obsidian Crown Stud", price: 42.0, image_url: "/product-4.jpg" } // Lembre de ter a imagem na pasta public!
    }
  ]);

  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  
  // Estados para os formulários
  const [address, setAddress] = useState({ street: "", number: "", complement: "", neighborhood: "", city: "", state: "", zip: "" });
  const [cardData, setCardData] = useState({ number: "", name: "", expiry: "", cvv: "" });

  // Cálculos do carrinho
  const totalPrice = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const shipping = totalPrice >= 66.6 ? 0 : 9.90;
  const grandTotal = totalPrice + shipping;

  // Classe padrão para os inputs que substituem o Shadcn UI
  const inputClassName = "w-full bg-secondary border border-border text-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-blood transition-colors duration-300 placeholder:text-muted-foreground";

  if (!isUserLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container max-w-lg mx-auto text-center">
            <ShoppingBag className="mx-auto mb-6 text-muted-foreground" size={48} />
            <h2 className="font-display text-2xl text-foreground mb-4">Faça login para ver seu carrinho</h2>
            <Link href="/auth" className="inline-block font-body text-xs tracking-[0.2em] uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-500 active:scale-[0.97]">
              Entrar
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          
          <Link href="/" className="inline-flex items-center gap-2 text-silver hover:text-foreground transition-colors duration-300 font-body text-sm mb-8">
            <ArrowLeft size={16} /> Continuar comprando
          </Link>

          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-10">Checkout</h2>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="mx-auto mb-6 text-muted-foreground" size={48} />
              <p className="font-body text-silver text-lg mb-6">Seu carrinho está vazio</p>
              <Link href="/" className="font-body text-xs tracking-[0.2em] uppercase border border-border text-silver px-10 py-4 hover:border-foreground hover:text-foreground transition-all duration-500">
                Ver produtos
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_420px] gap-10">
              
              {/* COLUNA ESQUERDA: Itens, Endereço e Pagamento */}
              <div className="space-y-10">
                
                {/* 1. Itens do Carrinho */}
                <section>
                  <h3 className="font-display text-lg text-foreground mb-6 flex items-center gap-3">
                    <ShoppingBag size={18} className="text-blood" />
                    Carrinho ({totalItems} {totalItems === 1 ? "item" : "itens"})
                  </h3>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 bg-card p-4 border border-border group hover:border-muted-foreground/30 transition-colors duration-300">
                        <div className="w-20 h-20 bg-secondary flex-shrink-0 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.product.image_url} alt={item.product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-body text-sm text-foreground truncate">{item.product.name}</h4>
                          <p className="font-body text-sm text-blood mt-1">${item.product.price.toFixed(2)}</p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button onClick={() => setItems([])} className="text-muted-foreground hover:text-destructive transition-colors duration-300">
                            <Trash2 size={14} />
                          </button>
                          <span className="font-body text-sm text-foreground">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 2. Endereço */}
                <section>
                  <h3 className="font-display text-lg text-foreground mb-6 flex items-center gap-3">
                    <Package size={18} className="text-blood" />
                    Endereço de entrega
                  </h3>
                  <div className="bg-card border border-border p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_120px] gap-4">
                      <div>
                        <label className="font-body text-xs tracking-[0.1em] uppercase text-silver mb-2 block">Rua *</label>
                        <input value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} className={inputClassName} placeholder="Rua das Sombras" />
                      </div>
                      <div>
                        <label className="font-body text-xs tracking-[0.1em] uppercase text-silver mb-2 block">Número *</label>
                        <input value={address.number} onChange={(e) => setAddress({ ...address, number: e.target.value })} className={inputClassName} placeholder="666" />
                      </div>
                    </div>
                    {/* Mais campos de endereço podem vir aqui seguindo o mesmo padrão */}
                  </div>
                </section>

                {/* 3. Pagamento */}
                <section>
                  <h3 className="font-display text-lg text-foreground mb-6 flex items-center gap-3">
                    <CreditCard size={18} className="text-blood" />
                    Pagamento
                  </h3>
                  <div className="bg-card border border-border p-6">
                    <div className="flex gap-3 mb-6">
                      <button onClick={() => setPaymentMethod("pix")} className={`flex-1 flex items-center justify-center gap-2 py-3 border font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 ${paymentMethod === "pix" ? "border-primary text-primary bg-primary/10" : "border-border text-silver hover:border-foreground"}`}>
                        <QrCode size={16} /> PIX
                      </button>
                      <button onClick={() => setPaymentMethod("card")} className={`flex-1 flex items-center justify-center gap-2 py-3 border font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 ${paymentMethod === "card" ? "border-primary text-primary bg-primary/10" : "border-border text-silver hover:border-foreground"}`}>
                        <CreditCard size={16} /> Cartão
                      </button>
                    </div>

                    {paymentMethod === "pix" ? (
                      <div className="text-center py-6">
                        <div className="w-40 h-40 mx-auto bg-secondary border border-border flex items-center justify-center mb-4">
                          <QrCode size={80} className="text-muted-foreground" />
                        </div>
                        <p className="font-body text-sm text-silver">O QR Code será gerado após a confirmação</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <label className="font-body text-xs tracking-[0.1em] uppercase text-silver mb-2 block">Número do cartão</label>
                          <input className={inputClassName} placeholder="0000 0000 0000 0000" maxLength={19} />
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              </div>

              {/* COLUNA DIREITA: Resumo do Pedido */}
              <div>
                <div className="sticky top-32 bg-card border border-border p-6">
                  <h3 className="font-display text-lg text-foreground mb-6">Resumo do pedido</h3>
                  
                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-silver">Subtotal</span>
                      <span className="text-foreground tabular-nums">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-silver">Frete</span>
                      <span className={`tabular-nums ${shipping === 0 ? "text-green-500" : "text-foreground"}`}>
                        {shipping === 0 ? "Grátis" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-8">
                    <span className="font-display text-base text-foreground">Total</span>
                    <span className="font-display text-lg text-foreground tabular-nums">${grandTotal.toFixed(2)}</span>
                  </div>

                  <button className="w-full bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase py-4 hover:bg-primary/90 transition-colors duration-300">
                    Finalizar pedido
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}