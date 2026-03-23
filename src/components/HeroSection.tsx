import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg" 
          alt="Gothic model with piercings"
          fill
          priority
          className="object-cover object-top animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-void/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mt-20">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-silver mb-6 animate-fade-up">
          New Winter Collection
        </p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8 animate-fade-up">
          Embrace the Darkness
        </h2>
        <p className="font-body text-sm md:text-base text-silver max-w-md mx-auto mb-10 leading-relaxed animate-fade-up">
          Adorne-se com piercings que transcendem o ordinário.
          Prata, obsidiana e simbolismo oculto.
        </p>
        <a href="#bestsellers" className="inline-block font-body text-xs tracking-[0.2em] uppercase border border-foreground/60 text-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-500 active:scale-[0.97] animate-fade-up">
          Shop Now
        </a>
      </div>
    </section>
  );
}