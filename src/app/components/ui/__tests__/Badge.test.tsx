import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "@/app/components/ui/Badge";

describe("Badge", () => {
  describe("rendering", () => {
    it("renders the label text", () => {
      render(<Badge label="React" />);
      expect(screen.getByText("React")).toBeInTheDocument();
    });

    it("renders as a span element", () => {
      render(<Badge label="Test" />);
      const badge = screen.getByText("Test");
      expect(badge.tagName).toBe("SPAN");
    });
  });

  describe("variants", () => {
    it("applies primary variant by default", () => {
      render(<Badge label="Test" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass(
        "bg-primary-100/10",
        "text-primary-100",
        "border-primary-100/20"
      );
    });

    it("applies primary variant when specified", () => {
      render(<Badge label="Test" variant="primary" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass(
        "bg-primary-100/10",
        "text-primary-100",
        "border-primary-100/20"
      );
    });

    it("applies accent variant", () => {
      render(<Badge label="Test" variant="accent" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass(
        "bg-accent-100/10",
        "text-accent-200",
        "border-accent-100/20"
      );
    });

    it("applies neutral variant", () => {
      render(<Badge label="Test" variant="neutral" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("bg-bg-200", "text-text-200", "border-bg-300");
    });
  });

  describe("styling", () => {
    it("has inline-flex display", () => {
      render(<Badge label="Test" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("inline-flex");
    });

    it("has rounded-full for pill shape", () => {
      render(<Badge label="Test" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("rounded-full");
    });

    it("has border", () => {
      render(<Badge label="Test" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("border");
    });

    it("has correct padding", () => {
      render(<Badge label="Test" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("px-3", "py-1");
    });

    it("has small font size", () => {
      render(<Badge label="Test" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("text-sm");
    });

    it("has medium font weight", () => {
      render(<Badge label="Test" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("font-medium");
    });

    it("centers items", () => {
      render(<Badge label="Test" />);
      const badge = screen.getByText("Test");
      expect(badge).toHaveClass("items-center");
    });
  });

  describe("edge cases", () => {
    it("handles empty label", () => {
      render(<Badge label="" />);
      const badge = document.querySelector("span.inline-flex");
      expect(badge).toBeInTheDocument();
    });

    it("handles long label text", () => {
      const longText = "This is a very long badge label for testing purposes";
      render(<Badge label={longText} />);
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it("handles special characters", () => {
      render(<Badge label="React & TypeScript" />);
      expect(screen.getByText("React & TypeScript")).toBeInTheDocument();
    });

    it("handles numbers in label", () => {
      render(<Badge label="Version 2.0" />);
      expect(screen.getByText("Version 2.0")).toBeInTheDocument();
    });
  });
});
