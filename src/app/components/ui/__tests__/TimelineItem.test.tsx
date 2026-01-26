import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TimelineItem from "@/app/components/ui/TimelineItem";

const defaultProps = {
  company: "Test Company",
  role: "Software Engineer",
  period: "Jan 2023 - Present",
  location: "San Francisco, CA",
  highlights: ["Built features", "Led team"],
  technologies: ["React", "TypeScript"],
};

describe("TimelineItem", () => {
  it("renders company name", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("Test Company")).toBeInTheDocument();
  });

  it("renders role", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("renders period", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("Jan 2023 - Present")).toBeInTheDocument();
  });

  it("renders location", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("San Francisco, CA")).toBeInTheDocument();
  });

  it("renders all highlights", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("Built features")).toBeInTheDocument();
    expect(screen.getByText("Led team")).toBeInTheDocument();
  });

  it("renders all technology badges", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("handles empty highlights array", () => {
    render(<TimelineItem {...defaultProps} highlights={[]} />);
    expect(screen.getByText("Test Company")).toBeInTheDocument();
  });

  it("handles empty technologies array", () => {
    render(<TimelineItem {...defaultProps} technologies={[]} />);
    expect(screen.getByText("Test Company")).toBeInTheDocument();
  });
});
