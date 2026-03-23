// Arquivo: components/CategoriesSection.tsx
import Link from "next/link";
import Image from "next/image";

// Trocamos os imports do Lovable por caminhos diretos da pasta public/
const categories = [
  { name: "Ear Piercings", image: "/cat-ears.jpg" },
  { name: "Septum & Nose", image: "/cat-nose.jpg" },
  { name: "Lip & Labret", image: "/cat-lips.jpg" },
  { name: "Body Piercings", image: "/cat-body.jpg" },
  { name: "Eyebrow", image: "/cat-eyebrow.jpg" },
  { name: "Occult Collection", image: "/cat-occult.jpg" },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-blood mb-3 animate-fade-up">
            Explore
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground animate-fade-up" style={{ animationDelay: '100ms' }}>
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href="#"
              className="group relative overflow-hidden aspect-[3/4] animate-fade-up block"
              style={{ animationDelay: `${150 + i * 80}ms` }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-void/40 group-hover:bg-void/60 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-5 md:p-7 z-10">
                <div className="w-full">
                  <h3 className="font-display text-sm md:text-base tracking-[0.12em] text-foreground group-hover:translate-y-[-4px] transition-transform duration-500">
                    {cat.name}
                  </h3>
                  <div className="h-px w-0 group-hover:w-full bg-blood transition-all duration-700 mt-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}