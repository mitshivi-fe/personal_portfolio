import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TimelineItem from "@/app/components/ui/TimelineItem";

const defaultProps = {
  company: "Test Company",
  role: "Software Engineer",
  period: "Jan 2023 - Present",
  location: "San Francisco, CA",
  highlights: ["Built features", "Led team"],
  technologies: ["React", "TypeScript"],
};

describe("TimelineItem", () => {
  describe("rendering", () => {
    it("renders company name", () => {
      render(<TimelineItem {...defaultProps} />);
      expect(screen.getByText("Test Company")).toBeInTheDocument();
    });

    it("renders role", () => {
      render(<TimelineItem {...defaultProps} />);
      expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    });

    it("renders period", () => {
      render(<TimelineItem {...defaultProps} />);
      expect(screen.getByText("Jan 2023 - Present")).toBeInTheDocument();
    });

    it("renders location", () => {
      render(<TimelineItem {...defaultProps} />);
      expect(screen.getByText("San Francisco, CA")).toBeInTheDocument();
    });

    it("renders all highlights", () => {
      render(<TimelineItem {...defaultProps} />);
      expect(screen.getByText("Built features")).toBeInTheDocument();
      expect(screen.getByText("Led team")).toBeInTheDocument();
    });

    it("renders all technology badges", () => {
      render(<TimelineItem {...defaultProps} />);
      expect(screen.getByText("React")).toBeInTheDocument();
      expect(screen.getByText("TypeScript")).toBeInTheDocument();
    });
  });

  describe("timeline visual elements", () => {
    it("renders timeline dot", () => {
      const { container } = render(<TimelineItem {...defaultProps} />);
      const dot = container.querySelector(".rounded-full.bg-primary-100");
      expect(dot).toBeInTheDocument();
    });

    it("renders timeline line when not last item", () => {
      const { container } = render(
        <TimelineItem {...defaultProps} isLast={false} />
      );
      const line = container.querySelector(".w-0\\.5.bg-bg-300");
      expect(line).toBeInTheDocument();
    });

    it("does not render timeline line when last item", () => {
      const { container } = render(
        <TimelineItem {...defaultProps} isLast={true} />
      );
      const line = container.querySelector(".w-0\\.5.bg-bg-300");
      expect(line).not.toBeInTheDocument();
    });

    it("defaults isLast to false", () => {
      const { container } = render(<TimelineItem {...defaultProps} />);
      const line = container.querySelector(".w-0\\.5.bg-bg-300");
      expect(line).toBeInTheDocument();
    });
  });

  describe("company name styling", () => {
    it("has heading style", () => {
      render(<TimelineItem {...defaultProps} />);
      const company = screen.getByText("Test Company");
      expect(company.tagName).toBe("H3");
    });

    it("has bold font weight", () => {
      render(<TimelineItem {...defaultProps} />);
      const company = screen.getByText("Test Company");
      expect(company).toHaveClass("font-bold");
    });

    it("has large text size", () => {
      render(<TimelineItem {...defaultProps} />);
      const company = screen.getByText("Test Company");
      expect(company).toHaveClass("text-xl");
    });
  });

  describe("role styling", () => {
    it("has primary color", () => {
      render(<TimelineItem {...defaultProps} />);
      const role = screen.getByText("Software Engineer");
      expect(role).toHaveClass("text-primary-100");
    });

    it("has medium font weight", () => {
      render(<TimelineItem {...defaultProps} />);
      const role = screen.getByText("Software Engineer");
      expect(role).toHaveClass("font-medium");
    });
  });

  describe("highlights list", () => {
    it("renders as unordered list", () => {
      const { container } = render(<TimelineItem {...defaultProps} />);
      const list = container.querySelector("ul");
      expect(list).toBeInTheDocument();
    });

    it("renders list items for each highlight", () => {
      const { container } = render(<TimelineItem {...defaultProps} />);
      const listItems = container.querySelectorAll("li");
      expect(listItems.length).toBe(2);
    });

    it("renders bullet points for highlights", () => {
      const { container } = render(<TimelineItem {...defaultProps} />);
      const bullets = container.querySelectorAll("li span.text-primary-100");
      expect(bullets.length).toBe(2);
    });
  });

  describe("technologies", () => {
    it("renders Badge components for each technology", () => {
      render(<TimelineItem {...defaultProps} />);
      const badges = screen.getAllByText(/React|TypeScript/);
      expect(badges.length).toBe(2);
    });

    it("renders technologies with neutral variant", () => {
      render(<TimelineItem {...defaultProps} />);
      const reactBadge = screen.getByText("React");
      expect(reactBadge).toHaveClass("text-text-200");
    });
  });

  describe("card styling", () => {
    it("has white background", () => {
      const { container } = render(<TimelineItem {...defaultProps} />);
      const card = container.querySelector(".bg-white");
      expect(card).toBeInTheDocument();
    });

    it("has rounded corners", () => {
      const { container } = render(<TimelineItem {...defaultProps} />);
      const card = container.querySelector(".rounded-xl");
      expect(card).toBeInTheDocument();
    });

    it("has shadow", () => {
      const { container } = render(<TimelineItem {...defaultProps} />);
      const card = container.querySelector(".shadow-sm");
      expect(card).toBeInTheDocument();
    });

    it("has border", () => {
      const { container } = render(<TimelineItem {...defaultProps} />);
      const card = container.querySelector(".border");
      expect(card).toBeInTheDocument();
    });
  });

  describe("edge cases", () => {
    it("handles empty highlights array", () => {
      render(<TimelineItem {...defaultProps} highlights={[]} />);
      expect(screen.getByText("Test Company")).toBeInTheDocument();
    });

    it("handles empty technologies array", () => {
      render(<TimelineItem {...defaultProps} technologies={[]} />);
      expect(screen.getByText("Test Company")).toBeInTheDocument();
    });

    it("handles long company name", () => {
      const longCompany = "A Very Long Company Name That Spans Multiple Lines";
      render(<TimelineItem {...defaultProps} company={longCompany} />);
      expect(screen.getByText(longCompany)).toBeInTheDocument();
    });

    it("handles many highlights", () => {
      const manyHighlights = [
        "Highlight 1",
        "Highlight 2",
        "Highlight 3",
        "Highlight 4",
        "Highlight 5",
      ];
      render(<TimelineItem {...defaultProps} highlights={manyHighlights} />);
      manyHighlights.forEach((highlight) => {
        expect(screen.getByText(highlight)).toBeInTheDocument();
      });
    });

    it("handles many technologies", () => {
      const manyTechs = ["React", "TypeScript", "Node.js", "GraphQL", "Docker"];
      render(<TimelineItem {...defaultProps} technologies={manyTechs} />);
      manyTechs.forEach((tech) => {
        expect(screen.getByText(tech)).toBeInTheDocument();
      });
    });

    it("handles special characters in text", () => {
      render(
        <TimelineItem
          {...defaultProps}
          company="O'Reilly & Associates"
          highlights={["Improved API's performance by 50%"]}
        />
      );
      expect(screen.getByText("O'Reilly & Associates")).toBeInTheDocument();
      expect(
        screen.getByText("Improved API's performance by 50%")
      ).toBeInTheDocument();
    });
  });
});
