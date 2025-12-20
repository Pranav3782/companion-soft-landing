import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-mint/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-peach/30 rounded-full blur-3xl" />

      <div className="container px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up">
            This isn't another app.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up animation-delay-100">
            It's a way to{" "}
            <span className="text-sage font-semibold">feel connected</span>{" "}
            again.
          </p>
          <p className="text-lg text-muted-foreground mb-10 animate-fade-up animation-delay-200">
            Because everyone deserves a real companion
          </p>

          <Button
            variant="hero"
            size="lg"
            className="animate-fade-up animation-delay-300"
          >
            Join the Waitlist
            <Sparkles className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
