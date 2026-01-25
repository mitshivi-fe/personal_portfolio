import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Main from "@/app/components/Main";

describe("Main", () => {
  describe("rendering", () => {
    it("renders the greeting 'Hi There!'", () => {
      render(<Main />);
      expect(screen.getByText("Hi There!")).toBeInTheDocument();
    });

    it("renders the name 'Shivi Mittal'", () => {
      render(<Main />);
      expect(screen.getByText(/Shivi Mittal/)).toBeInTheDocument();
    });

    it("renders 'Senior frontend Engineer' text", () => {
      render(<Main />);
      expect(screen.getByText(/Senior frontend Engineer/)).toBeInTheDocument();
    });

    it("renders experience text", () => {
      render(<Main />);
      expect(screen.getByText(/6 years of experience/)).toBeInTheDocument();
    });

    it("renders hero image", () => {
      render(<Main />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toBeInTheDocument();
    });
  });

  describe("CTA button", () => {
    it("renders 'Know more about me!' link", () => {
      render(<Main />);
      expect(screen.getByText("Know more about me!")).toBeInTheDocument();
    });

    it("link points to PDF resume", () => {
      render(<Main />);
      const link = screen.getByText("Know more about me!").closest("a");
      expect(link).toHaveAttribute("href", "/Shivi_FE_NITkkr.pdf");
    });

    it("link opens in new tab", () => {
      render(<Main />);
      const link = screen.getByText("Know more about me!").closest("a");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("link has button styling", () => {
      render(<Main />);
      const link = screen.getByText("Know more about me!");
      expect(link).toHaveClass("rounded-md", "bg-primary-100", "text-white");
    });
  });

  describe("hero image", () => {
    it("has correct source", () => {
      render(<Main />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toHaveAttribute("src", "/images/hero_Image.webp");
    });

    it("has priority loading", () => {
      render(<Main />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toHaveAttribute("data-priority", "true");
    });

    it("has correct dimensions", () => {
      render(<Main />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toHaveAttribute("width", "500");
      expect(img).toHaveAttribute("height", "500");
    });

    it("has responsive sizes attribute", () => {
      render(<Main />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toHaveAttribute(
        "data-sizes",
        "(max-width: 1024px) 100vw, 50vw"
      );
    });

    it("has rounded styling", () => {
      render(<Main />);
      const img = screen.getByAltText(
        "Shivi Mittal - Senior Frontend Engineer"
      );
      expect(img).toHaveClass("rounded-lg");
    });
  });

  describe("content mentions", () => {
    it("mentions MNCs", () => {
      render(<Main />);
      expect(screen.getByText(/MNCs/)).toBeInTheDocument();
    });

    it("mentions startups", () => {
      render(<Main />);
      expect(screen.getByText(/startups/)).toBeInTheDocument();
    });

    it("mentions unicorns", () => {
      render(<Main />);
      expect(screen.getByText(/unicorns/)).toBeInTheDocument();
    });

    it("mentions frontend technologies", () => {
      render(<Main />);
      expect(screen.getByText(/React.js/)).toBeInTheDocument();
      expect(screen.getByText(/Next.js/)).toBeInTheDocument();
      expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
    });

    it("mentions mentorship", () => {
      render(<Main />);
      expect(screen.getByText(/mentorship/)).toBeInTheDocument();
    });
  });

  describe("styling", () => {
    it("greeting has primary color", () => {
      render(<Main />);
      const greeting = screen.getByText("Hi There!");
      expect(greeting).toHaveClass("text-primary-100");
    });

    it("greeting has responsive text size", () => {
      render(<Main />);
      const greeting = screen.getByText("Hi There!");
      expect(greeting).toHaveClass("text-2xl", "lg:text-3xl");
    });

    it("name has primary-200 color", () => {
      render(<Main />);
      const nameSpan = screen.getByText(/Shivi Mittal/);
      expect(nameSpan).toHaveClass("text-primary-200");
    });

    it("name has responsive text size", () => {
      render(<Main />);
      const nameSpan = screen.getByText(/Shivi Mittal/);
      expect(nameSpan).toHaveClass("text-lg", "lg:text-2xl");
    });
  });

  describe("layout", () => {
    it("has flex layout", () => {
      const { container } = render(<Main />);
      const innerDiv = container.querySelector(".flex.lg\\:flex-row");
      expect(innerDiv).toBeInTheDocument();
    });

    it("has responsive column/row direction", () => {
      const { container } = render(<Main />);
      const innerDiv = container.querySelector(".flex-col.lg\\:flex-row");
      expect(innerDiv).toBeInTheDocument();
    });

    it("has max-width constraint", () => {
      const { container } = render(<Main />);
      const constrainedDiv = container.querySelector(".max-w-3xl");
      expect(constrainedDiv).toBeInTheDocument();
    });
  });

  describe("semantic structure", () => {
    it("has h1 heading", () => {
      render(<Main />);
      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toHaveTextContent("Hi There!");
    });
  });
});
