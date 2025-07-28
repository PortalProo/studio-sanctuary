import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { Trust } from "@/components/Trust";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Integrations />
      <Trust />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
