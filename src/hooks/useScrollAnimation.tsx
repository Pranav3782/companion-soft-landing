import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Component wrapper for easier use
interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const AnimateOnScroll = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: AnimateOnScrollProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const baseStyles: React.CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: `${delay}ms`,
  };

  const animations = {
    "fade-up": {
      hidden: { opacity: 0, transform: "translateY(40px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "scale-in": {
      hidden: { opacity: 0, transform: "scale(0.9)" },
      visible: { opacity: 1, transform: "scale(1)" },
    },
    "slide-left": {
      hidden: { opacity: 0, transform: "translateX(60px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "slide-right": {
      hidden: { opacity: 0, transform: "translateX(-60px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
  };

  const currentAnimation = animations[animation];
  const animationStyles = isVisible
    ? currentAnimation.visible
    : currentAnimation.hidden;

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...baseStyles, ...animationStyles }}
    >
      {children}
    </div>
  );
};
