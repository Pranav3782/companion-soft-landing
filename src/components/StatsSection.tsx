import { Users, Shuffle, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Waitlist Members",
    color: "bg-mint",
  },
  {
    icon: Shuffle,
    value: "4",
    label: "Connection Modes",
    color: "bg-lavender",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Authentic",
    color: "bg-peach",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center p-8 rounded-3xl ${stat.color} shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-foreground mb-4" />
              <span className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </span>
              <span className="text-muted-foreground font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
