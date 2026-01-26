"use client";

import AnimatedNumber from "@/app/components/AnimatedNumber";

interface MetricCardProps {
  value: string;
  label: string;
}

function parseMetricValue(value: string): { number: number; prefix: string; suffix: string } {
  // Handle different formats: "14M+", "75%", "$30M", "2M+", "87%", "40%"
  const prefixMatch = value.match(/^(\$)/);
  const prefix = prefixMatch ? prefixMatch[1] : "";

  const numberMatch = value.match(/(\d+(?:\.\d+)?)/);
  const number = numberMatch ? parseFloat(numberMatch[1]) : 0;

  const suffixMatch = value.match(/(\d+(?:\.\d+)?)(.+)$/);
  const suffix = suffixMatch ? suffixMatch[2] : "";

  return { number, prefix, suffix };
}

export default function MetricCard({ value, label }: MetricCardProps) {
  const { number, prefix, suffix } = parseMetricValue(value);

  return (
    <div className="text-center p-4 rounded-xl bg-white dark:bg-zinc-800 ring-1 ring-zinc-900/5 dark:ring-white/10">
      <div className="text-2xl lg:text-3xl font-bold text-teal-500">
        {prefix}
        <AnimatedNumber value={number} suffix={suffix} duration={1200} />
      </div>
      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
        {label}
      </div>
    </div>
  );
}
