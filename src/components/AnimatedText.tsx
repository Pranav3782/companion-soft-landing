import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
  delay?: number;
  onComplete?: () => void;
}

const AnimatedText = ({
  text,
  className = "",
  letterClassName = "",
  delay = 0,
  onComplete,
}: AnimatedTextProps) => {
  const shouldReduceMotion = useReducedMotion();

  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 12,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  // Respect reduced motion preference
  if (shouldReduceMotion) {
    return <span className={`${className} ${letterClassName}`.trim()}>{text}</span>;
  }

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onComplete}
      aria-label={text}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block ${letterClassName}`.trim()}
          style={{
            whiteSpace: letter === " " ? "pre" : "normal",
            willChange: "transform, opacity, filter",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
