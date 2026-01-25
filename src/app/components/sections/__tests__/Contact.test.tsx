import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "@/app/components/sections/Contact";

// Mock the data
vi.mock("@/app/data/socialLinks", () => ({
  contactInfo: {
    email: "test@example.com",
    linkedIn: "https://linkedin.com/in/test",
    github: "https://github.com/test",
  },
}));

describe("Contact", () => {
  describe("rendering", () => {
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

    it("renders description text", () => {
      render(<Contact />);
      expect(
        screen.getByText(/Whether you need frontend expertise/i)
      ).toBeInTheDocument();
    });
  });

  describe("email link", () => {
    it("renders email link", () => {
      render(<Contact />);
      const emailLink = screen.getByText("test@example.com").closest("a");
      expect(emailLink).toBeInTheDocument();
    });

    it("email link has correct mailto href", () => {
      render(<Contact />);
      const emailLink = screen.getByText("test@example.com").closest("a");
      expect(emailLink).toHaveAttribute("href", "mailto:test@example.com");
    });

    it("email button has primary styling", () => {
      render(<Contact />);
      const emailLink = screen.getByText("test@example.com").closest("a");
      expect(emailLink).toHaveClass("bg-primary-100", "text-white");
    });

    it("email button has email icon", () => {
      render(<Contact />);
      const emailLink = screen.getByText("test@example.com").closest("a");
      const icon = emailLink?.querySelector("svg");
      expect(icon).toBeInTheDocument();
    });
  });

  describe("social links", () => {
    it("renders LinkedIn link", () => {
      render(<Contact />);
      const linkedInLink = screen.getByLabelText("LinkedIn");
      expect(linkedInLink).toBeInTheDocument();
    });

    it("LinkedIn link has correct href", () => {
      render(<Contact />);
      const linkedInLink = screen.getByLabelText("LinkedIn");
      expect(linkedInLink).toHaveAttribute(
        "href",
        "https://linkedin.com/in/test"
      );
    });

    it("LinkedIn link opens in new tab", () => {
      render(<Contact />);
      const linkedInLink = screen.getByLabelText("LinkedIn");
      expect(linkedInLink).toHaveAttribute("target", "_blank");
      expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("renders GitHub link", () => {
      render(<Contact />);
      const githubLink = screen.getByLabelText("GitHub");
      expect(githubLink).toBeInTheDocument();
    });

    it("GitHub link has correct href", () => {
      render(<Contact />);
      const githubLink = screen.getByLabelText("GitHub");
      expect(githubLink).toHaveAttribute("href", "https://github.com/test");
    });

    it("GitHub link opens in new tab", () => {
      render(<Contact />);
      const githubLink = screen.getByLabelText("GitHub");
      expect(githubLink).toHaveAttribute("target", "_blank");
      expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("social link icons", () => {
    it("LinkedIn has SVG icon", () => {
      render(<Contact />);
      const linkedInLink = screen.getByLabelText("LinkedIn");
      const icon = linkedInLink.querySelector("svg");
      expect(icon).toBeInTheDocument();
    });

    it("GitHub has SVG icon", () => {
      render(<Contact />);
      const githubLink = screen.getByLabelText("GitHub");
      const icon = githubLink.querySelector("svg");
      expect(icon).toBeInTheDocument();
    });

    it("icons have correct size class", () => {
      render(<Contact />);
      const linkedInLink = screen.getByLabelText("LinkedIn");
      const icon = linkedInLink.querySelector("svg");
      expect(icon).toHaveClass("w-8", "h-8");
    });
  });

  describe("styling", () => {
    it("has white background", () => {
      const { container } = render(<Contact />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("bg-white");
    });

    it("has responsive padding", () => {
      const { container } = render(<Contact />);
      const section = container.querySelector("section");
      expect(section).toHaveClass("py-16", "lg:py-20");
    });

    it("content is centered", () => {
      const { container } = render(<Contact />);
      const innerDiv = container.querySelector(".text-center");
      expect(innerDiv).toBeInTheDocument();
    });

    it("main heading has correct styling", () => {
      render(<Contact />);
      const heading = screen.getByText("Let's Work Together");
      expect(heading).toHaveClass("text-3xl", "lg:text-4xl", "font-bold");
    });
  });

  describe("accessibility", () => {
    it("social links have aria-labels", () => {
      render(<Contact />);
      expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
      expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    });

    it("email link includes visible email text", () => {
      render(<Contact />);
      expect(screen.getByText("test@example.com")).toBeInTheDocument();
    });
  });

  describe("semantic structure", () => {
    it("has h2 heading", () => {
      render(<Contact />);
      const h2 = screen.getByRole("heading", { level: 2 });
      expect(h2).toHaveTextContent("Let's Work Together");
    });
  });

  describe("hover states", () => {
    it("email button has hover class", () => {
      render(<Contact />);
      const emailLink = screen.getByText("test@example.com").closest("a");
      expect(emailLink).toHaveClass("hover:bg-primary-200");
    });

    it("social links have hover class", () => {
      render(<Contact />);
      const linkedInLink = screen.getByLabelText("LinkedIn");
      expect(linkedInLink).toHaveClass("hover:text-primary-100");
    });
  });
});
