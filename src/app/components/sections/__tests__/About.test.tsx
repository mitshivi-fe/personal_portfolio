import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/app/components/sections/About";

describe("About", () => {
  it("renders as a section element", () => {
    const { container } = render(<About />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("has correct id for navigation", () => {
    const { container } = render(<About />);
    expect(container.querySelector("#about")).toBeInTheDocument();
  });

  it("renders section heading", () => {
    render(<About />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders Professional Journey section", () => {
    render(<About />);
    expect(screen.getByText("Professional Journey")).toBeInTheDocument();
  });

  it("renders Beyond Code section", () => {
    render(<About />);
    expect(screen.getByText("Beyond Code")).toBeInTheDocument();
  });

  it("renders Education section", () => {
    render(<About />);
    expect(screen.getByText("Education")).toBeInTheDocument();
  });
});
