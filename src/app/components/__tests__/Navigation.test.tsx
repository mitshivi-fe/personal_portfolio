import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navigation from "@/app/components/Navigation";

describe("Navigation", () => {
  it("renders the logo/name", () => {
    render(<Navigation />);
    expect(screen.getByText("Shivi Mittal")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navigation />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Achievements")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders resume link", () => {
    render(<Navigation />);
    const resumeLinks = screen.getAllByText("Resume");
    expect(resumeLinks.length).toBeGreaterThan(0);
  });

  it("renders profile image", () => {
    render(<Navigation />);
    expect(screen.getByAltText("Shivi Mittal")).toBeInTheDocument();
  });
});
