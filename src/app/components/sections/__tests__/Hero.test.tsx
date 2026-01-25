import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/app/components/sections/Hero";

describe("Hero", () => {
  it("renders as a section element", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("renders the name", () => {
    render(<Hero />);
    expect(screen.getByText("Shivi Mittal")).toBeInTheDocument();
  });

  it("renders the role title", () => {
    render(<Hero />);
    expect(screen.getByText("Senior Frontend Engineer")).toBeInTheDocument();
  });

  it("renders the user count", () => {
    render(<Hero />);
    expect(screen.getByText("14M+ users")).toBeInTheDocument();
  });

  it("renders hero image", () => {
    render(<Hero />);
    const img = screen.getByAltText("Shivi Mittal - Senior Frontend Engineer");
    expect(img).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
    expect(screen.getByText("Download Resume")).toBeInTheDocument();
  });

  it("Connect button links to contact section", () => {
    render(<Hero />);
    const connectBtn = screen.getByText("Let's Connect").closest("a");
    expect(connectBtn).toHaveAttribute("href", "#contact");
  });
});
