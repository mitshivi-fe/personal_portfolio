import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/Footer";

describe("Footer", () => {
  describe("rendering", () => {
    it("renders as a footer element", () => {
      render(<Footer />);
      expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });

    it("renders GitHub link", () => {
      render(<Footer />);
      expect(screen.getByText("GitHub")).toBeInTheDocument();
    });

    it("renders LinkedIn link", () => {
      render(<Footer />);
      expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    });

    it("renders copyright text with current year", () => {
      render(<Footer />);
      const currentYear = new Date().getFullYear();
      expect(
        screen.getByText(new RegExp(`${currentYear}.*Shivi Mittal`))
      ).toBeInTheDocument();
    });

    it("renders 'Made with love in India' text", () => {
      render(<Footer />);
      expect(screen.getByText(/Made with love in India/)).toBeInTheDocument();
    });
  });

  describe("social links", () => {
    it("renders GitHub link with correct href", () => {
      render(<Footer />);
      const githubLink = screen.getByText("GitHub").closest("a");
      expect(githubLink).toHaveAttribute(
        "href",
        "https://github.com/shivimittal"
      );
    });

    it("renders LinkedIn link with correct href", () => {
      render(<Footer />);
      const linkedInLink = screen.getByText("LinkedIn").closest("a");
      expect(linkedInLink).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/shivi-mittal-nitkkr/"
      );
    });

    it("opens social links in new tab", () => {
      render(<Footer />);
      const githubLink = screen.getByText("GitHub").closest("a");
      const linkedInLink = screen.getByText("LinkedIn").closest("a");

      expect(githubLink).toHaveAttribute("target", "_blank");
      expect(linkedInLink).toHaveAttribute("target", "_blank");
    });

    it("has noopener noreferrer for security", () => {
      render(<Footer />);
      const githubLink = screen.getByText("GitHub").closest("a");
      const linkedInLink = screen.getByText("LinkedIn").closest("a");

      expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
      expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("accessibility", () => {
    it("has sr-only text for social icons", () => {
      render(<Footer />);
      const srOnlyElements = document.querySelectorAll(".sr-only");
      expect(srOnlyElements.length).toBeGreaterThan(0);
    });

    it("renders SVG icons with aria-hidden", () => {
      render(<Footer />);
      const svgElements = document.querySelectorAll("svg[aria-hidden='true']");
      expect(svgElements.length).toBe(2);
    });
  });

  describe("styling", () => {
    it("has white background", () => {
      render(<Footer />);
      const footer = screen.getByRole("contentinfo");
      expect(footer).toHaveClass("bg-white");
    });

    it("has full width", () => {
      render(<Footer />);
      const footer = screen.getByRole("contentinfo");
      expect(footer).toHaveClass("w-full");
    });

    it("has border top", () => {
      render(<Footer />);
      const footer = screen.getByRole("contentinfo");
      expect(footer).toHaveClass("border-t");
    });
  });
});
