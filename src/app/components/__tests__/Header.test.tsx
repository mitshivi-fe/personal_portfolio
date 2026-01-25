import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/app/components/Header";

describe("Header", () => {
  describe("rendering", () => {
    it("renders the header container", () => {
      render(<Header />);
      const container = screen.getByRole("img").closest("div");
      expect(container).toBeInTheDocument();
    });

    it("renders the Avatar component", () => {
      render(<Header />);
      expect(screen.getByAltText("Shivi Mittal")).toBeInTheDocument();
    });

    it("renders the correct profile image", () => {
      render(<Header />);
      const img = screen.getByAltText("Shivi Mittal");
      expect(img).toHaveAttribute("src", "/images/shi_thumbnail.jpg");
    });

    it("sets avatar as priority image", () => {
      render(<Header />);
      const img = screen.getByAltText("Shivi Mittal");
      expect(img).toHaveAttribute("data-priority", "true");
    });
  });

  describe("styling", () => {
    it("has flex layout classes", () => {
      render(<Header />);
      const container = screen.getByRole("img").closest("div");
      expect(container).toHaveClass("flex", "items-center");
    });

    it("has responsive padding classes", () => {
      render(<Header />);
      const container = screen.getByRole("img").closest("div");
      expect(container).toHaveClass("px-6", "py-2");
    });

    it("has max-width constraint", () => {
      render(<Header />);
      const container = screen.getByRole("img").closest("div");
      expect(container).toHaveClass("max-w-7xl");
    });
  });
});
