import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Achievements from "@/app/components/sections/Achievements";

// Mock the data
vi.mock("@/app/data/achievements", () => ({
  awards: [
    {
      title: "Best Developer",
      company: "Test Corp",
      date: "Jan 2023",
      description: "Awarded for exceptional work",
    },
    {
      title: "Innovation Award",
      company: "Another Corp",
      date: "Jun 2022",
      description: "For creative solutions",
    },
  ],
  metrics: [
    { value: "14M+", label: "Users Served" },
    { value: "75%", label: "Performance Gain" },
    { value: "$30M", label: "Impact" },
  ],
}));

describe("Achievements", () => {
  describe("rendering", () => {
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
  });

  describe("metrics section", () => {
    it("renders 'Impact by Numbers' heading", () => {
      render(<Achievements />);
      expect(screen.getByText("Impact by Numbers")).toBeInTheDocument();
    });

    it("renders all metric values", () => {
      render(<Achievements />);
      expect(screen.getByText("14M+")).toBeInTheDocument();
      expect(screen.getByText("75%")).toBeInTheDocument();
      expect(screen.getByText("$30M")).toBeInTheDocument();
    });

    it("renders all metric labels", () => {
      render(<Achievements />);
      expect(screen.getByText("Users Served")).toBeInTheDocument();
      expect(screen.getByText("Performance Gain")).toBeInTheDocument();
      expect(screen.getByText("Impact")).toBeInTheDocument();
    });

    it("renders MetricCard components", () => {
      const { container } = render(<Achievements />);
      const metricCards = container.querySelectorAll(".text-center.p-4");
      expect(metricCards.length).toBe(3);
    });
  });

  describe("awards section", () => {
    it("renders 'Awards & Recognition' heading", () => {
      render(<Achievements />);
      expect(screen.getByText("Awards & Recognition")).toBeInTheDocument();
    });

    it("renders all award titles", () => {
      render(<Achievements />);
      expect(screen.getByText("Best Developer")).toBeInTheDocument();
      expect(screen.getByText("Innovation Award")).toBeInTheDocument();
    });

    it("renders all company names", () => {
      render(<Achievements />);
      expect(screen.getByText("Test Corp")).toBeInTheDocument();
      expect(screen.getByText("Another Corp")).toBeInTheDocument();
    });

    it("renders all dates", () => {
      render(<Achievements />);
      expect(screen.getByText("Jan 2023")).toBeInTheDocument();
      expect(screen.getByText("Jun 2022")).toBeInTheDocument();
    });

    it("renders all descriptions", () => {
      render(<Achievements />);
      expect(screen.getByText("Awarded for exceptional work")).toBeInTheDocument();
      expect(screen.getByText("For creative solutions")).toBeInTheDocument();
    });

    it("renders award icons", () => {
      const { container } = render(<Achievements />);
      const awardIcons = container.querySelectorAll("svg.w-5.h-5");
      expect(awardIcons.length).toBe(2);
    });
  });

  describe("styling", () => {
    it("has bg-bg-200 background", () => {
      const { container } = render(<Achievements />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("bg-bg-200");
    });

    it("has responsive padding", () => {
      const { container } = render(<Achievements />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("py-16", "lg:py-20");
    });

    it("main heading has correct styling", () => {
      render(<Achievements />);
      const heading = screen.getByText("Achievements");
      expect(heading).toHaveClass("text-3xl", "lg:text-4xl", "font-bold");
    });

    it("heading is centered", () => {
      render(<Achievements />);
      const heading = screen.getByText("Achievements");
      expect(heading).toHaveClass("text-center");
    });
  });

  describe("metrics card styling", () => {
    it("metrics container has white background", () => {
      const { container } = render(<Achievements />);
      const metricsContainer = container.querySelector(".bg-white.rounded-xl");
      expect(metricsContainer).toBeInTheDocument();
    });

    it("metrics container has shadow", () => {
      const { container } = render(<Achievements />);
      const metricsContainer = container.querySelector(".shadow-sm.p-6");
      expect(metricsContainer).toBeInTheDocument();
    });

    it("metrics have responsive grid", () => {
      const { container } = render(<Achievements />);
      const grid = container.querySelector(
        ".grid.grid-cols-2.md\\:grid-cols-3"
      );
      expect(grid).toBeInTheDocument();
    });
  });

  describe("awards card styling", () => {
    it("award cards have white background", () => {
      const { container } = render(<Achievements />);
      const awardCards = container.querySelectorAll(
        ".bg-white.rounded-xl.p-5.shadow-sm"
      );
      expect(awardCards.length).toBe(2);
    });

    it("award cards have hover effect", () => {
      const { container } = render(<Achievements />);
      const awardCards = container.querySelectorAll(".hover\\:shadow-md");
      expect(awardCards.length).toBe(2);
    });

    it("awards section has responsive grid", () => {
      const { container } = render(<Achievements />);
      const grid = container.querySelector(".grid.md\\:grid-cols-3.gap-4");
      expect(grid).toBeInTheDocument();
    });
  });

  describe("semantic structure", () => {
    it("has h2 section heading", () => {
      render(<Achievements />);
      const h2 = screen.getByRole("heading", { level: 2 });
      expect(h2).toHaveTextContent("Achievements");
    });

    it("has h3 subsection headings", () => {
      render(<Achievements />);
      const h3s = screen.getAllByRole("heading", { level: 3 });
      expect(h3s.length).toBe(2);
      expect(h3s[0]).toHaveTextContent("Impact by Numbers");
      expect(h3s[1]).toHaveTextContent("Awards & Recognition");
    });

    it("has h4 award titles", () => {
      render(<Achievements />);
      const h4s = screen.getAllByRole("heading", { level: 4 });
      expect(h4s.length).toBe(2);
    });
  });
});
