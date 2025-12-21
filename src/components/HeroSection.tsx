import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import AnimatedText from "@/components/AnimatedText";

const HeroSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Calculate delay for second line based on first line length
  const firstLineText = "Meet people who";
  const firstLineDuration = firstLineText.length * 0.025 + 0.3; // slightly faster stagger

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-20">
        {/* Decorative Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-mint/50 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-peach/40 rounded-full blur-3xl animate-blob animation-delay-300" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-lavender/30 rounded-full blur-3xl animate-blob animation-delay-600" />

        <div className="container relative z-10 px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge - Delay: 0ms */}
            <div className="animate-hero-badge">
              <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-5 py-2.5 mb-8 shadow-soft">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  Join 10,000+ people on the waitlist
                </span>
              </div>
            </div>

            {/* Headline with letter-by-letter animation */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <AnimatedText 
                text={firstLineText}
                delay={0.1}
              />
              <br />
              <AnimatedText 
                text="feel like home"
                delay={firstLineDuration + 0.1}
                letterClassName="text-gradient-animated"
              />
            </h1>

            {/* Subheadline - Simple fade up */}
            <div className="animate-hero-subheading">
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                <span className="text-gradient-animated">Real connections.</span> Real moments.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-10">
                No endless scrolling.
              </p>
            </div>

            {/* CTAs - Delay: 300ms */}
            <div className="animate-hero-buttons">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="w-full sm:w-auto" onClick={() => setIsWaitlistOpen(true)}>
                  Join the waitlist
                  <Sparkles className="w-5 h-5 ml-1" />
                </Button>
                <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="#why-companion">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  );
};

export default HeroSection;
