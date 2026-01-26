import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "@/app/components/sections/Contact";

vi.mock("@/app/data/socialLinks", () => ({
  contactInfo: {
    email: "test@example.com",
    linkedIn: "https://linkedin.com/in/test",
    github: "https://github.com/test",
  },
}));

describe("Contact", () => {
  it("renders as a section element", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("has correct id for navigation", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("renders section heading", () => {
    render(<Contact />);
    expect(screen.getByText("Let's Work Together")).toBeInTheDocument();
  });

  it("renders email link", () => {
    render(<Contact />);
    const emailLink = screen.getByText("test@example.com").closest("a");
    expect(emailLink).toHaveAttribute("href", "mailto:test@example.com");
  });

  it("renders social links", () => {
    render(<Contact />);
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
  });
});
