import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Experience from "@/app/components/sections/Experience";

describe("Experience", () => {
  it("renders as a section element", () => {
    const { container } = render(<Experience />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("has correct id for navigation", () => {
    const { container } = render(<Experience />);
    expect(container.querySelector("#experience")).toBeInTheDocument();
  });

  it("renders section heading", () => {
    render(<Experience />);
    expect(screen.getByText("Work Experience")).toBeInTheDocument();
  });

  it("renders company names from data", () => {
    render(<Experience />);
    expect(screen.getByText("New Relic")).toBeInTheDocument();
  });
});
