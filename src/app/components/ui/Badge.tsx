interface BadgeProps {
  label: string;
  variant?: "primary" | "accent" | "neutral";
}

export default function Badge({ label, variant = "primary" }: BadgeProps) {
  const variants = {
    primary: "bg-primary-100/10 text-primary-100 border-primary-100/20",
    accent: "bg-accent-100/10 text-accent-200 border-accent-100/20",
    neutral: "bg-bg-200 text-text-200 border-bg-300",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
