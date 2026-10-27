interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export default function GradientText({
  children,
  className = "",
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component
      className={`bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 ${className}`}
    >
      {children}
    </Component>
  );
}

