import clsx from "clsx";

interface BadgeProps {
  label: string;
  variant?: "primary" | "accent" | "neutral";
}

export default function Badge({ label, variant = "primary" }: BadgeProps) {
  const variants = {
    primary:
      "bg-teal-500/10 text-teal-600 dark:text-teal-400 ring-teal-500/20",
    accent:
      "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 ring-cyan-500/20",
    neutral:
      "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 ring-zinc-200 dark:ring-zinc-700",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ring-1 ring-inset transition-colors",
        variants[variant]
      )}
    >
      {label}
    </span>
  );
}
