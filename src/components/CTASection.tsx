import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-mint/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-peach/30 rounded-full blur-3xl" />

      <div className="container px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              This isn't another app.
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={100}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              It's a way to{" "}
              <span className="text-sage font-semibold">feel connected</span>{" "}
              again.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground mb-10">
              Because everyone deserves a real companion
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <Button variant="hero" size="lg">
              Join the Waitlist
              <Sparkles className="w-5 h-5 ml-1" />
            </Button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
