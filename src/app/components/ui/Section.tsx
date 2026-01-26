// src/app/components/Section.tsx
import Container from "../Container";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className }: SectionProps) {
  const titleId = `${id}-title`;
  return (
    <section id={id} className={`py-16 lg:py-20 ${className}`} aria-labelledby={titleId}>
      <Container>
        <h2 id={titleId} className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 text-center tracking-tight">
          {title}
        </h2>
        {children}
      </Container>
    </section>
  );
}
