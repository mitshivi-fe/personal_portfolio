import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Experience from "@/app/components/sections/Experience";

// Mock the data
vi.mock("@/app/data/experience", () => ({
  experiences: [
    {
      id: "company-1",
      company: "Test Company 1",
      role: "Senior Engineer",
      startDate: "Jan 2023",
      endDate: "Present",
      location: "Remote",
      highlights: ["Built features", "Led team"],
      technologies: ["React", "TypeScript"],
    },
    {
      id: "company-2",
      company: "Test Company 2",
      role: "Frontend Developer",
      startDate: "Jan 2021",
      endDate: "Dec 2022",
      location: "San Francisco",
      highlights: ["Improved performance"],
      technologies: ["Vue", "JavaScript"],
    },
  ],
}));

describe("Experience", () => {
  describe("rendering", () => {
    it("renders as a section element", () => {
      const { container } = render(<Experience />);
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    it("has correct id for navigation", () => {
      const { container } = render(<Experience />);
      expect(container.querySelector("#experience")).toBeInTheDocument();
    });

    it("renders section heading", () => {
      render(<Experience />);
      expect(screen.getByText("Work Experience")).toBeInTheDocument();
    });
  });

  describe("timeline rendering", () => {
    it("renders Timeline component", () => {
      const { container } = render(<Experience />);
      const timeline = container.querySelector(".space-y-8");
      expect(timeline).toBeInTheDocument();
    });

    it("renders all experience items", () => {
      render(<Experience />);
      expect(screen.getByText("Test Company 1")).toBeInTheDocument();
      expect(screen.getByText("Test Company 2")).toBeInTheDocument();
    });

    it("renders roles for all companies", () => {
      render(<Experience />);
      expect(screen.getByText("Senior Engineer")).toBeInTheDocument();
      expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    });

    it("renders formatted periods", () => {
      render(<Experience />);
      expect(screen.getByText("Jan 2023 - Present")).toBeInTheDocument();
      expect(screen.getByText("Jan 2021 - Dec 2022")).toBeInTheDocument();
    });

    it("renders locations", () => {
      render(<Experience />);
      expect(screen.getByText("Remote")).toBeInTheDocument();
      expect(screen.getByText("San Francisco")).toBeInTheDocument();
    });

    it("renders highlights", () => {
      render(<Experience />);
      expect(screen.getByText("Built features")).toBeInTheDocument();
      expect(screen.getByText("Led team")).toBeInTheDocument();
      expect(screen.getByText("Improved performance")).toBeInTheDocument();
    });

    it("renders technology badges", () => {
      render(<Experience />);
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
      expect(screen.getByText("Vue")).toBeInTheDocument();
      expect(screen.getByText("JavaScript")).toBeInTheDocument();
    });
  });

  describe("isLast prop handling", () => {
    it("marks last item correctly", () => {
      const { container } = render(<Experience />);
      // The last timeline item should not have the connecting line
      // We check by counting timeline lines - should be 1 less than total items
      const timelineLines = container.querySelectorAll(".w-0\\.5.bg-bg-300");
      expect(timelineLines.length).toBe(1); // Only first item has the line
    });
  });

  describe("styling", () => {
    it("has bg-bg-200 background", () => {
      const { container } = render(<Experience />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("bg-bg-200");
    });

    it("has responsive padding", () => {
      const { container } = render(<Experience />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("py-16", "lg:py-20");
    });

    it("main heading has correct styling", () => {
      render(<Experience />);
      const heading = screen.getByText("Work Experience");
      expect(heading).toHaveClass("text-3xl", "lg:text-4xl", "font-bold");
    });

    it("heading is centered", () => {
      render(<Experience />);
      const heading = screen.getByText("Work Experience");
      expect(heading).toHaveClass("text-center");
    });
  });

  describe("semantic structure", () => {
    it("has h2 heading", () => {
      render(<Experience />);
      const h2 = screen.getByRole("heading", { level: 2 });
      expect(h2).toHaveTextContent("Work Experience");
    });

    it("has company headings as h3", () => {
      render(<Experience />);
      const h3s = screen.getAllByRole("heading", { level: 3 });
      expect(h3s.length).toBe(2);
    });
  });
});
