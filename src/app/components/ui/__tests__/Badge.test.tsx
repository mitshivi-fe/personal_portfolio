import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "@/app/components/ui/Badge";

describe("Badge", () => {
  it("renders the label text", () => {
    render(<Badge label="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    render(<Badge label="Test" />);
    const badge = screen.getByText("Test");
    expect(badge.tagName).toBe("SPAN");
  });

  it("handles special characters", () => {
    render(<Badge label="React & TypeScript" />);
    expect(screen.getByText("React & TypeScript")).toBeInTheDocument();
  });
});
