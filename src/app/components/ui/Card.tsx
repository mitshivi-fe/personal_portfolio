interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-bg-300/50 p-6 ${className}`}
    >
      {children}
    </div>
  );
}
