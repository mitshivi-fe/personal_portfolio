import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MetricCard from "@/app/components/ui/MetricCard";

describe("MetricCard", () => {
  describe("rendering", () => {
    it("renders the value", () => {
      render(<MetricCard value="14M+" label="Users" />);
      expect(screen.getByText("14M+")).toBeInTheDocument();
    });

    it("renders the label", () => {
      render(<MetricCard value="14M+" label="Users Served" />);
      expect(screen.getByText("Users Served")).toBeInTheDocument();
    });

    it("renders both value and label together", () => {
      render(<MetricCard value="75%" label="Performance Improvement" />);
      expect(screen.getByText("75%")).toBeInTheDocument();
      expect(screen.getByText("Performance Improvement")).toBeInTheDocument();
    });
  });

  describe("value styling", () => {
    it("has large font size", () => {
      render(<MetricCard value="100" label="Test" />);
      const value = screen.getByText("100");
      expect(value).toHaveClass("text-3xl");
    });

    it("has larger font size on lg screens", () => {
      render(<MetricCard value="100" label="Test" />);
      const value = screen.getByText("100");
      expect(value).toHaveClass("lg:text-4xl");
    });

    it("has bold font weight", () => {
      render(<MetricCard value="100" label="Test" />);
      const value = screen.getByText("100");
      expect(value).toHaveClass("font-bold");
    });

    it("has primary color", () => {
      render(<MetricCard value="100" label="Test" />);
      const value = screen.getByText("100");
      expect(value).toHaveClass("text-primary-100");
    });
  });

  describe("label styling", () => {
    it("has small font size", () => {
      render(<MetricCard value="100" label="Test Label" />);
      const label = screen.getByText("Test Label");
      expect(label).toHaveClass("text-sm");
    });

    it("has text-200 color", () => {
      render(<MetricCard value="100" label="Test Label" />);
      const label = screen.getByText("Test Label");
      expect(label).toHaveClass("text-text-200");
    });

    it("has top margin", () => {
      render(<MetricCard value="100" label="Test Label" />);
      const label = screen.getByText("Test Label");
      expect(label).toHaveClass("mt-1");
    });
  });

  describe("container styling", () => {
    it("has text-center alignment", () => {
      render(<MetricCard value="100" label="Test" />);
      const container = screen.getByText("100").parentElement;
      expect(container).toHaveClass("text-center");
    });

    it("has padding", () => {
      render(<MetricCard value="100" label="Test" />);
      const container = screen.getByText("100").parentElement;
      expect(container).toHaveClass("p-4");
    });
  });

  describe("edge cases", () => {
    it("handles numeric values", () => {
      render(<MetricCard value="1234567" label="Count" />);
      expect(screen.getByText("1234567")).toBeInTheDocument();
    });

    it("handles special characters in value", () => {
      render(<MetricCard value="$30M" label="Revenue" />);
      expect(screen.getByText("$30M")).toBeInTheDocument();
    });

    it("handles percentage values", () => {
      render(<MetricCard value="87%" label="Improvement" />);
      expect(screen.getByText("87%")).toBeInTheDocument();
    });

    it("handles long labels", () => {
      const longLabel = "This is a very long metric label for testing";
      render(<MetricCard value="100" label={longLabel} />);
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it("handles empty value", () => {
      render(<MetricCard value="" label="Test" />);
      expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("handles empty label", () => {
      render(<MetricCard value="100" label="" />);
      expect(screen.getByText("100")).toBeInTheDocument();
    });
  });
});
