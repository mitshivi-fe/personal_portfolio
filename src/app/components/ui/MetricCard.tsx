interface MetricCardProps {
  value: string;
  label: string;
}

export default function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="text-center p-4">
      <div className="text-3xl lg:text-4xl font-bold text-primary-100">
        {value}
      </div>
      <div className="text-sm text-text-200 mt-1">{label}</div>
    </div>
  );
}
