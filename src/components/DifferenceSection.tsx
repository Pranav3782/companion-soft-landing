import { Check } from "lucide-react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const differences = [
  {
    title: "No fake profiles",
    description: "Every user is verified and authentic",
  },
  {
    title: "No weird messages",
    description: "Connect through shared activities, not DMs",
  },
  {
    title: "No pressure",
    description: "Meet at your own pace, on your own terms",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop",
    alt: "Sharing chai",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
    alt: "Walking together",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop",
    alt: "Book club",
  },
  {
    src: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=1974&auto=format&fit=crop",
    alt: "Group laughing",
  },
];

const DifferenceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Makes Us Different
          </h2>
        </AnimateOnScroll>

        {/* Difference Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {differences.map((diff, index) => (
            <AnimateOnScroll
              key={diff.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="bg-card rounded-3xl p-6 shadow-soft border border-border/50 h-full">
                <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-foreground" strokeWidth={3} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {diff.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {diff.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Tagline */}
        <AnimateOnScroll animation="fade-up" delay={300} className="mb-12">
          <p className="text-center text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Just small moments that turn into{" "}
            <span className="text-foreground font-semibold">real memories</span>
          </p>
        </AnimateOnScroll>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <AnimateOnScroll
              key={image.alt}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
