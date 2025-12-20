import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "1",
    title: "Post Your Moment",
    description:
      "Share what you feel like doing right now. A walk in the park, grabbing chai, reading at a cafe, or anything else.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
    caption: "Looking for someone to grab coffee and chat about books ☕📚",
  },
  {
    number: "2",
    title: "Others Join In",
    description:
      "People nearby see your moment. If they vibe with it, they swipe right. Mutual interest? You're matched!",
    image:
      "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=1974&auto=format&fit=crop",
    caption: "3 people nearby are interested in joining you! 🎉",
  },
  {
    number: "3",
    title: "Meet For Real",
    description:
      "Connect in the real world. Safe, natural, and authentic. No pressure, no pretending.",
    image:
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1974&auto=format&fit=crop",
    caption: "Just people being people. 🌿",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container px-4 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <span className="inline-block text-sage font-semibold mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Three Simple Steps to
            <br />
            <span className="text-sage">Real Connections</span>
          </h2>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group h-full">
                <div className="relative rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 bg-card border border-border/50 h-full flex flex-col">
                  {/* Image with overlay */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    
                    {/* Step Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center font-heading font-bold text-foreground">
                        {step.number}
                      </div>
                      <span className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
                        Step {step.number}
                      </span>
                    </div>

                    {/* Caption Bubble */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-3 shadow-soft">
                        <p className="text-sm text-foreground font-medium">
                          {step.caption}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom tagline */}
        <AnimateOnScroll animation="fade-up" delay={450} className="mt-12">
          <p className="text-center text-lg text-muted-foreground max-w-xl mx-auto">
            No pressure. No pretending.{" "}
            <span className="text-foreground font-medium">
              Just people being people.
            </span>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowItWorksSection;
