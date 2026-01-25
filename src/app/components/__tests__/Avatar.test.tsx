import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Avatar from "@/app/components/Avatar";

describe("Avatar", () => {
  describe("rendering", () => {
    it("renders an image with correct src", () => {
      render(<Avatar src="/test-image.jpg" alt="Test User" />);
      const img = screen.getByAltText("Test User");
      expect(img).toHaveAttribute("src", "/test-image.jpg");
    });

    it("renders with correct alt text", () => {
      render(<Avatar src="/test.jpg" alt="Profile Picture" />);
      expect(screen.getByAltText("Profile Picture")).toBeInTheDocument();
    });

    it("applies rounded-full class for circular shape", () => {
      render(<Avatar src="/test.jpg" alt="Test" />);
      const img = screen.getByAltText("Test");
      expect(img).toHaveClass("rounded-full");
    });

    it("applies inline-block display class", () => {
      render(<Avatar src="/test.jpg" alt="Test" />);
      const img = screen.getByAltText("Test");
      expect(img).toHaveClass("inline-block");
    });
  });

  describe("dimensions", () => {
    it("renders with fixed width of 100", () => {
      render(<Avatar src="/test.jpg" alt="Test" />);
      const img = screen.getByAltText("Test");
      expect(img).toHaveAttribute("width", "100");
    });

    it("renders with fixed height of 100", () => {
      render(<Avatar src="/test.jpg" alt="Test" />);
      const img = screen.getByAltText("Test");
      expect(img).toHaveAttribute("height", "100");
    });
  });

  describe("priority prop", () => {
    it("defaults priority to false", () => {
      render(<Avatar src="/test.jpg" alt="Test" />);
      const img = screen.getByAltText("Test");
      expect(img).toHaveAttribute("data-priority", "false");
    });

    it("sets priority to true when specified", () => {
      render(<Avatar src="/test.jpg" alt="Test" priority />);
      const img = screen.getByAltText("Test");
      expect(img).toHaveAttribute("data-priority", "true");
    });

    it("explicitly sets priority to false", () => {
      render(<Avatar src="/test.jpg" alt="Test" priority={false} />);
      const img = screen.getByAltText("Test");
      expect(img).toHaveAttribute("data-priority", "false");
    });
  });

  describe("edge cases", () => {
    it("handles empty alt text", () => {
      const { container } = render(<Avatar src="/test.jpg" alt="" />);
      // Images with empty alt become presentational, so we query directly
      const img = container.querySelector("img");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "");
    });

    it("handles special characters in alt text", () => {
      render(<Avatar src="/test.jpg" alt="User's Photo & Profile" />);
      expect(screen.getByAltText("User's Photo & Profile")).toBeInTheDocument();
    });

    it("handles external URLs", () => {
      render(
        <Avatar src="https://example.com/image.jpg" alt="External Image" />
      );
      const img = screen.getByAltText("External Image");
      expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
    });
  });
});
