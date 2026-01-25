import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/Footer";

describe("Footer", () => {
  it("renders as a footer element", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders GitHub link with correct href", () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText("Follow on GitHub");
    expect(githubLink).toHaveAttribute("href", "https://github.com/shivimittal");
  });

  it("renders LinkedIn link with correct href", () => {
    render(<Footer />);
    const linkedInLink = screen.getByLabelText("Follow on LinkedIn");
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/shivi-mittal-nitkkr/"
    );
  });

  it("renders copyright text with current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${currentYear}.*Shivi Mittal`))
    ).toBeInTheDocument();
  });

  it("opens social links in new tab", () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText("Follow on GitHub");
    expect(githubLink).toHaveAttribute("target", "_blank");
  });
});
