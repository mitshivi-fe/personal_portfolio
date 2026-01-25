interface MetricCardProps {
  value: string;
  label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="text-center p-4 rounded-xl bg-white dark:bg-zinc-800 ring-1 ring-zinc-900/5 dark:ring-white/10">
      <div className="text-2xl lg:text-3xl font-bold text-teal-500">
        {value}
      </div>
      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
        {label}
      </div>
    </div>
  );
}
