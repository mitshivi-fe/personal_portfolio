import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "@/app/components/sections/Hero";

describe("Hero", () => {
  describe("rendering", () => {
    it("renders as a section element", () => {
      const { container } = render(<Hero />);
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    it("renders the name 'Shivi Mittal'", () => {
      render(<Hero />);
      expect(screen.getByText("Shivi Mittal")).toBeInTheDocument();
    });

    it("renders 'Hi, I'm' greeting", () => {
      render(<Hero />);
      expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument();
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
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toBeInTheDocument();
    });
  });

  describe("stats badges", () => {
    it("renders experience badge", () => {
      render(<Hero />);
      expect(screen.getByText("6+ Years Experience")).toBeInTheDocument();
    });

    it("renders MNCs badge", () => {
      render(<Hero />);
      expect(screen.getByText("MNCs")).toBeInTheDocument();
    });

    it("renders Startups badge", () => {
      render(<Hero />);
      expect(screen.getByText("Startups")).toBeInTheDocument();
    });

    it("renders Unicorns badge", () => {
      render(<Hero />);
      expect(screen.getByText("Unicorns")).toBeInTheDocument();
    });
  });

  describe("CTA buttons", () => {
    it("renders 'Let's Connect' button", () => {
      render(<Hero />);
      expect(screen.getByText("Let's Connect")).toBeInTheDocument();
    });

    it("Connect button links to contact section", () => {
      render(<Hero />);
      const connectBtn = screen.getByText("Let's Connect").closest("a");
      expect(connectBtn).toHaveAttribute("href", "#contact");
    });

    it("renders 'Download Resume' button", () => {
      render(<Hero />);
      expect(screen.getByText("Download Resume")).toBeInTheDocument();
    });

    it("Resume button links to PDF", () => {
      render(<Hero />);
      const resumeBtn = screen.getByText("Download Resume").closest("a");
      expect(resumeBtn).toHaveAttribute("href", "/Shivi_FE_NITkkr.pdf");
    });

    it("Resume button opens in new tab", () => {
      render(<Hero />);
      const resumeBtn = screen.getByText("Download Resume").closest("a");
      expect(resumeBtn).toHaveAttribute("target", "_blank");
      expect(resumeBtn).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("hero image", () => {
    it("has correct source", () => {
      render(<Hero />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toHaveAttribute("src", "/images/hero_Image.webp");
    });

    it("has priority loading", () => {
      render(<Hero />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toHaveAttribute("data-priority", "true");
    });

    it("has correct dimensions", () => {
      render(<Hero />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toHaveAttribute("width", "450");
      expect(img).toHaveAttribute("height", "450");
    });

    it("has rounded styling", () => {
      render(<Hero />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toHaveClass("rounded-2xl");
    });

    it("has shadow styling", () => {
      render(<Hero />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toHaveClass("shadow-lg");
    });
  });

  describe("styling", () => {
    it("has responsive padding", () => {
      const { container } = render(<Hero />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("py-12", "lg:py-20");
    });

    it("name has primary color", () => {
      render(<Hero />);
      const name = screen.getByText("Shivi Mittal");
      expect(name).toHaveClass("text-primary-100");
    });

    it("main heading has correct size", () => {
      render(<Hero />);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveClass("text-4xl", "lg:text-5xl", "xl:text-6xl");
    });
  });
});
