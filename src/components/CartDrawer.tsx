"use client";

import { X, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem } = useCartStore();

  // Calcula o valor total somando o preço * quantidade de cada joia
  const totalPrice = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <>
      {/* Overlay escuro que fecha o carrinho ao clicar fora dele */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-void/60 backdrop-blur-sm z-[60] transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* A Gaveta Lateral */}
      <div 
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-[400px] bg-card border-l border-border z-[70] transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabeçalho */}
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h2 className="font-display text-xl tracking-[0.1em] text-foreground">SEU ALTAR</h2>
          <button onClick={closeCart} className="text-silver hover:text-foreground transition-colors">
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        {/* Lista de Joias */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
              <span className="font-body text-xs uppercase tracking-[0.2em]">O altar está vazio</span>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 items-center bg-background p-3 border border-border group">
                <div className="relative w-20 h-24 bg-secondary flex-shrink-0">
                  <Image src={item.product.image_url} alt={item.product.name} fill className="object-cover opacity-80" />
                </div>
                <div className="flex-1">
                  <h3 className="font-body text-[10px] tracking-[0.15em] text-silver uppercase mb-2">{item.product.name}</h3>
                  <p className="text-foreground font-body tracking-widest text-sm">${item.product.price.toFixed(2)}</p>
                  <span className="text-xs text-muted-foreground">Qtd: {item.quantity}</span>
                </div>
                <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors p-2">
                  <Trash2 size={16} strokeWidth={1.5} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Rodapé (Total e Checkout) */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between mb-6 font-body text-sm">
              <span className="text-silver uppercase tracking-widest">Subtotal</span>
              <span className="text-foreground">${totalPrice.toFixed(2)}</span>
            </div>
            <Link 
              href="/cart" 
              onClick={closeCart}
              className="w-full block text-center bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase py-4 font-bold hover:bg-primary/90 transition-colors"
            >
              Finalizar Pedido
            </Link>
          </div>
        )}
      </div>
    </>
  );
}