import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-20">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-mint/50 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-peach/40 rounded-full blur-3xl animate-blob animation-delay-300" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-lavender/30 rounded-full blur-3xl animate-blob animation-delay-600" />

      <div className="container relative z-10 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-5 py-2.5 mb-8 animate-fade-up shadow-soft">
            <Sparkles className="w-4 h-4 text-sage" />
            <span className="text-sm font-medium text-muted-foreground">
              Join 10,000+ people on the waitlist
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up animation-delay-100">
            Meet people who
            <br />
            <span className="text-sage">feel like home</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up animation-delay-200">
            Real connections. Real moments.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-10 animate-fade-up animation-delay-300">
            No endless scrolling.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Join the waitlist
              <Sparkles className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
              Learn More
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-sage rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
