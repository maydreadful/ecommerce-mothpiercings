// Arquivo: components/BestsellersSection.tsx
"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BestsellersSection() {
  // Dados simulados para substituir a chamada do banco de dados temporariamente
  const products = [
    { id: "1", name: "Serpentine Septum Ring", price: 34.00, image_url: "/product-1.jpg", tag: "NEW" },
    { id: "2", name: "Chain Helix Set", price: 42.00, image_url: "/product-2.jpg", tag: "RESTOCK" },
    { id: "3", name: "Ouroboros Lip Ring", price: 28.00, image_url: "/product-3.jpg", tag: null },
    { id: "4", name: "Obsidian Crown Stud", price: 56.00, image_url: "/product-4.jpg", tag: null },
  ];

  return (
    <section id="bestsellers" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-blood mb-3 animate-fade-up">
            Most Wanted
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground animate-fade-up" style={{ animationDelay: '100ms' }}>
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${150 + i * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-card">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {product.tag && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-[0.15em] uppercase font-body px-3 py-1 z-10">
                    {product.tag}
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                  <button
                    onClick={() => alert(`Adicionado: ${product.name}`)}
                    className="w-full bg-foreground/90 text-background font-body text-xs tracking-[0.15em] uppercase py-3 flex items-center justify-center gap-2 hover:bg-foreground transition-colors duration-300 active:scale-[0.97]"
                  >
                    <ShoppingBag size={14} />
                    Add to Cart
                  </button>
                </div>
              </div>

              <h3 className="font-body text-sm text-silver group-hover:text-foreground transition-colors duration-300 mb-1">
                {product.name}
              </h3>
              <p className="font-body text-sm text-foreground tracking-wide">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <Link
            href="/produtos"
            className="inline-block font-body text-xs tracking-[0.2em] uppercase border border-border text-silver px-10 py-4 hover:border-foreground hover:text-foreground transition-all duration-500 active:scale-[0.97]"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}