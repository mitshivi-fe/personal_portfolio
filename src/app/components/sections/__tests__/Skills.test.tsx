import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "@/app/components/sections/Skills";

describe("Skills", () => {
  it("renders as a section element", () => {
    const { container } = render(<Skills />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("has correct id for navigation", () => {
    const { container } = render(<Skills />);
    expect(container.querySelector("#skills")).toBeInTheDocument();
  });

  it("renders section heading", () => {
    render(<Skills />);
    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
  });

  it("renders skill categories", () => {
    render(<Skills />);
    expect(screen.getByText("Core Technologies")).toBeInTheDocument();
  });
});
