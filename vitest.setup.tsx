import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock next/image
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    width,
    height,
    priority,
    className,
    sizes,
  }: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
    sizes?: string;
  }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        data-priority={priority}
        className={className}
        data-sizes={sizes}
      />
    );
  },
}));

// Mock next/link
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    target,
    rel,
    className,
    "aria-label": ariaLabel,
    onClick,
  }: {
    children: React.ReactNode;
    href: string;
    target?: string;
    rel?: string;
    className?: string;
    "aria-label"?: string;
    onClick?: () => void;
  }) => {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  },
}));
