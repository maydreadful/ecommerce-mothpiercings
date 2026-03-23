import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import BestsellersSection from "@/components/BestsellersSection";
// import Footer from "@/components/Footer"; // Se você já tiver o Footer do Lovable, pode importar!

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <BestsellersSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}