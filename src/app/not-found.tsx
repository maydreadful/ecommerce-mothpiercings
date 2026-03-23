// Arquivo: app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-void">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-display text-blood tracking-widest">404</h1>
        <p className="mb-8 text-sm font-body tracking-[0.2em] uppercase text-silver">
          A escuridão engoliu esta página
        </p>
        <Link href="/" className="inline-block font-body text-xs tracking-[0.2em] uppercase border border-foreground/60 text-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-500">
          Retornar ao Início
        </Link>
      </div>
    </div>
  );
}