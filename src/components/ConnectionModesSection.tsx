import { Heart, Users, UsersRound, Briefcase } from "lucide-react";

const modes = [
  {
    icon: Heart,
    title: "Date Mode",
    description:
      "Meet someone special naturally through shared moments and genuine connections",
    color: "bg-peach",
    emoji: "❤️",
  },
  {
    icon: Users,
    title: "Friend Mode",
    description:
      "Find good people to hang out with and build lasting friendships",
    color: "bg-mint",
    emoji: "🤝",
  },
  {
    icon: UsersRound,
    title: "Group Mode",
    description:
      "Join circles that feel like home and connect with communities",
    color: "bg-lavender",
    emoji: "👥",
  },
  {
    icon: Briefcase,
    title: "Business Mode",
    description:
      "Meet people who work like you — and get you professionally",
    color: "bg-secondary",
    emoji: "💼",
  },
];

const ConnectionModesSection = () => {
  return (
    <section id="connection-modes" className="py-20 md:py-28 bg-card">
      <div className="container px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sage font-semibold mb-4">
            Connection Modes
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Four Ways to Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From dating to chai circles to co-working — Companion brings people
            together, your way
          </p>
        </div>

        {/* Modes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {modes.map((mode, index) => (
            <div
              key={mode.title}
              className="group bg-background rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div
                  className={`w-16 h-16 ${mode.color} rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  {mode.emoji}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {mode.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectionModesSection;
