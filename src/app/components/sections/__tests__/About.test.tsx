import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/app/components/sections/About";

describe("About", () => {
  describe("rendering", () => {
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
  });

  describe("professional journey section", () => {
    it("renders Professional Journey heading", () => {
      render(<About />);
      expect(screen.getByText("Professional Journey")).toBeInTheDocument();
    });

    it("mentions years of experience", () => {
      render(<About />);
      expect(screen.getByText(/6 years of experience/i)).toBeInTheDocument();
    });

    it("mentions New Relic", () => {
      render(<About />);
      expect(screen.getByText("New Relic")).toBeInTheDocument();
    });

    it("mentions CoinDCX", () => {
      render(<About />);
      expect(screen.getByText("CoinDCX")).toBeInTheDocument();
    });

    it("mentions $30M acquisition", () => {
      render(<About />);
      expect(screen.getByText("$30M acquisition")).toBeInTheDocument();
    });

    it("mentions 14M+ users", () => {
      render(<About />);
      expect(screen.getByText(/14M\+ users/)).toBeInTheDocument();
    });
  });

  describe("beyond code section", () => {
    it("renders Beyond Code heading", () => {
      render(<About />);
      expect(screen.getByText("Beyond Code")).toBeInTheDocument();
    });

    it("mentions community service", () => {
      render(<About />);
      expect(screen.getByText(/community service/i)).toBeInTheDocument();
    });

    it("mentions Helpage Orphans", () => {
      render(<About />);
      expect(screen.getByText(/Helpage Orphans/)).toBeInTheDocument();
    });

    it("mentions hobbies", () => {
      render(<About />);
      expect(screen.getByText(/sketching/)).toBeInTheDocument();
    });

    it("mentions travel", () => {
      render(<About />);
      expect(screen.getByText(/10\+ cities/)).toBeInTheDocument();
    });
  });

  describe("education section", () => {
    it("renders Education heading", () => {
      render(<About />);
      expect(screen.getByText("Education")).toBeInTheDocument();
    });

    it("mentions NIT Kurukshetra", () => {
      render(<About />);
      expect(
        screen.getByText(/National Institute of Technology, Kurukshetra/)
      ).toBeInTheDocument();
    });

    it("mentions B.Tech degree", () => {
      render(<About />);
      expect(
        screen.getByText(/Bachelor of Technology \(2014 - 2018\)/)
      ).toBeInTheDocument();
    });

    it("mentions JEE Mains rank", () => {
      render(<About />);
      expect(screen.getByText(/JEE Mains AIR 14098/)).toBeInTheDocument();
    });
  });

  describe("styling", () => {
    it("has white background", () => {
      const { container } = render(<About />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("bg-white");
    });

    it("has responsive padding", () => {
      const { container } = render(<About />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("py-16", "lg:py-20");
    });

    it("main heading has correct styling", () => {
      render(<About />);
      const heading = screen.getByText("About Me");
      expect(heading).toHaveClass("text-3xl", "lg:text-4xl", "font-bold");
    });

    it("cards have bg-bg-200 background", () => {
      const { container } = render(<About />);
      const cards = container.querySelectorAll(".bg-bg-200");
      expect(cards.length).toBe(3);
    });

    it("cards have rounded corners", () => {
      const { container } = render(<About />);
      const cards = container.querySelectorAll(".rounded-xl");
      expect(cards.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe("semantic structure", () => {
    it("has correct heading hierarchy", () => {
      render(<About />);
      const h2 = screen.getByRole("heading", { level: 2 });
      expect(h2).toHaveTextContent("About Me");

      const h3s = screen.getAllByRole("heading", { level: 3 });
      expect(h3s.length).toBe(3);
    });

    it("professional section has correct subheadings", () => {
      render(<About />);
      const h3s = screen.getAllByRole("heading", { level: 3 });
      const titles = h3s.map((h) => h.textContent);
      expect(titles).toContain("Professional Journey");
      expect(titles).toContain("Beyond Code");
      expect(titles).toContain("Education");
    });
  });
});
