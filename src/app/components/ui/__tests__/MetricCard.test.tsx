import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MetricCard from "@/app/components/ui/MetricCard";

describe("MetricCard", () => {
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

  it("handles special characters in value", () => {
    render(<MetricCard value="$30M" label="Revenue" />);
    expect(screen.getByText("$30M")).toBeInTheDocument();
  });
});
