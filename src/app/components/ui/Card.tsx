import clsx from "clsx";
import Link from "next/link";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

function Card({
  as: Component = "div",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={clsx(
        "group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-800/50 dark:ring-white/10",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

function CardLink({ href, children, ...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link href={href} {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  href?: string;
  children: React.ReactNode;
}

function CardTitle({
  as: Component = "h2",
  href,
  children,
  className,
  ...props
}: CardTitleProps) {
  return (
    <Component
      className={clsx(
        "text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100",
        className
      )}
      {...props}
    >
      {href ? <CardLink href={href}>{children}</CardLink> : children}
    </Component>
  );
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

function CardDescription({ children, className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={clsx(
        "relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

interface CardEyebrowProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  decorate?: boolean;
  children: React.ReactNode;
}

function CardEyebrow({
  as: Component = "p",
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps) {
  return (
    <Component
      className={clsx(
        "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500 dark:text-zinc-400",
        decorate && "pl-3.5",
        className
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-teal-500" />
        </span>
      )}
      {children}
    </Component>
  );
}

interface CardCtaProps {
  children: React.ReactNode;
}

function CardCta({ children }: CardCtaProps) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {children}
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="ml-1 h-4 w-4 stroke-current"
      >
        <path
          d="M6.75 5.75 9.25 8l-2.5 2.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Attach subcomponents
Card.Link = CardLink;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Eyebrow = CardEyebrow;
Card.Cta = CardCta;

export default Card;
