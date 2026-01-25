import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "@/app/components/sections/Skills";

// Mock the data
vi.mock("@/app/data/skills", () => ({
  skillCategories: [
    {
      name: "Core Technologies",
      skills: ["JavaScript", "TypeScript"],
    },
    {
      name: "Frameworks",
      skills: ["React", "Next.js"],
    },
    {
      name: "Testing",
      skills: ["Jest", "Vitest"],
    },
  ],
}));

describe("Skills", () => {
  describe("rendering", () => {
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
  });

  describe("skill categories", () => {
    it("renders all category names", () => {
      render(<Skills />);
      expect(screen.getByText("Core Technologies")).toBeInTheDocument();
      expect(screen.getByText("Frameworks")).toBeInTheDocument();
      expect(screen.getByText("Testing")).toBeInTheDocument();
    });

    it("renders all skills within categories", () => {
      render(<Skills />);
      expect(screen.getByText("JavaScript")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("Next.js")).toBeInTheDocument();
      expect(screen.getByText("Jest")).toBeInTheDocument();
      expect(screen.getByText("Vitest")).toBeInTheDocument();
    });

    it("renders correct number of category cards", () => {
      const { container } = render(<Skills />);
      const categoryCards = container.querySelectorAll(".bg-bg-200.rounded-xl");
      expect(categoryCards.length).toBe(3);
    });
  });

  describe("skill badges", () => {
    it("renders skills as badges with primary variant", () => {
      render(<Skills />);
      const jsBadge = screen.getByText("JavaScript");
      expect(jsBadge).toHaveClass("text-primary-100");
    });

    it("renders badges with correct styling", () => {
      render(<Skills />);
      const badge = screen.getByText("React");
      expect(badge).toHaveClass("rounded-full", "px-3", "py-1");
    });
  });

  describe("styling", () => {
    it("has white background", () => {
      const { container } = render(<Skills />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("bg-white");
    });

    it("has responsive padding", () => {
      const { container } = render(<Skills />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("py-16", "lg:py-20");
    });

    it("main heading has correct styling", () => {
      render(<Skills />);
      const heading = screen.getByText("Technical Skills");
      expect(heading).toHaveClass("text-3xl", "lg:text-4xl", "font-bold");
    });

    it("heading is centered", () => {
      render(<Skills />);
      const heading = screen.getByText("Technical Skills");
      expect(heading).toHaveClass("text-center");
    });
  });

  describe("grid layout", () => {
    it("has responsive grid", () => {
      const { container } = render(<Skills />);
      const grid = container.querySelector(
        ".grid.md\\:grid-cols-2.lg\\:grid-cols-3"
      );
      expect(grid).toBeInTheDocument();
    });

    it("has gap between cards", () => {
      const { container } = render(<Skills />);
      const grid = container.querySelector(".gap-6");
      expect(grid).toBeInTheDocument();
    });
  });

  describe("category card styling", () => {
    it("cards have bg-bg-200 background", () => {
      const { container } = render(<Skills />);
      const cards = container.querySelectorAll(".bg-bg-200");
      expect(cards.length).toBeGreaterThanOrEqual(3);
    });

    it("cards have hover shadow effect", () => {
      const { container } = render(<Skills />);
      const cards = container.querySelectorAll(".hover\\:shadow-md");
      expect(cards.length).toBe(3);
    });

    it("cards have transition effect", () => {
      const { container } = render(<Skills />);
      const cards = container.querySelectorAll(".transition-shadow");
      expect(cards.length).toBe(3);
    });
  });

  describe("semantic structure", () => {
    it("has h2 section heading", () => {
      render(<Skills />);
      const h2 = screen.getByRole("heading", { level: 2 });
      expect(h2).toHaveTextContent("Technical Skills");
    });

    it("has h3 category headings", () => {
      render(<Skills />);
      const h3s = screen.getAllByRole("heading", { level: 3 });
      expect(h3s.length).toBe(3);
    });
  });
});
