import { Button } from "@/components/ui/button";
import { Heart, ArrowDown } from "lucide-react";

interface Website {
  name: string;
  banner_url?: string;
}

export const Hero = ({ website }: { website?: Website }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: website?.banner_url
            ? `url(${website.banner_url})`
            : `url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <Heart className="h-12 w-12 text-accent mr-4" />
          <h1 className="text-5xl md:text-7xl font-bold">
            {website?.name || "Veldor"}
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Creating Magical Wedding Moments & Big Seed Solutions
        </p>
        
        <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto">
          Transform your special day with our premium wedding services and innovative solutions. 
          We bring dreams to life with elegance, precision, and care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("services")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            Our Services
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white hover:text-accent transition-colors"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};