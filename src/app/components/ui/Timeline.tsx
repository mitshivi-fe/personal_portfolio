interface TimelineProps {
  children: React.ReactNode;
}

export default function Timeline({ children }: TimelineProps) {
  return <div className="relative space-y-8">{children}</div>;
}
