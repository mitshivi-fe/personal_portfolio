import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Achievements from "@/app/components/sections/Achievements";

describe("Achievements", () => {
  it("renders as a section element", () => {
    const { container } = render(<Achievements />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("has correct id for navigation", () => {
    const { container } = render(<Achievements />);
    expect(container.querySelector("#achievements")).toBeInTheDocument();
  });

  it("renders section heading", () => {
    render(<Achievements />);
    expect(screen.getByText("Achievements")).toBeInTheDocument();
  });

  it("renders Impact by Numbers section", () => {
    render(<Achievements />);
    expect(screen.getByText("Impact by Numbers")).toBeInTheDocument();
  });

  it("renders Awards section", () => {
    render(<Achievements />);
    expect(screen.getByText("Awards & Recognition")).toBeInTheDocument();
  });
});
