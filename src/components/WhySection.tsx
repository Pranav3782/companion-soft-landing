import { Shield, Heart, Zap } from "lucide-react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "No public location sharing. Mutual matching required. Your safety is our priority.",
    color: "bg-mint",
  },
  {
    icon: Heart,
    title: "Authentic Moments",
    description:
      "Real experiences over endless scrolling. Connect through shared activities, not profiles.",
    color: "bg-peach",
  },
  {
    icon: Zap,
    title: "Instant Connection",
    description:
      "Post what you feel like doing. Others join if they vibe with it. Simple as that.",
    color: "bg-lavender",
  },
];

const WhySection = () => {
  return (
    <section id="why-companion" className="py-20 md:py-28 bg-background">
      <div className="container px-4 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sage font-semibold mb-4">
            Why Companion
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            We all talk online.
            <br />
            <span className="text-muted-foreground">
              But sometimes, it still feels like
            </span>
            <br />
            <span className="text-sage">no one's really there.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Companion helps you find people nearby for simple shared activities.
            A walk. Reading together. Chai. Whatever feels right in the moment.
          </p>
        </AnimateOnScroll>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <AnimateOnScroll
              key={feature.title}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50 h-full">
                <div
                  className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
