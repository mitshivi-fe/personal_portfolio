import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Container from "@/app/components/Container";

describe("Container", () => {
  describe("rendering", () => {
    it("renders children correctly", () => {
      render(
        <Container>
          <span data-testid="child">Content</span>
        </Container>
      );
      expect(screen.getByTestId("child")).toBeInTheDocument();
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("renders multiple children", () => {
      render(
        <Container>
          <div data-testid="first">First</div>
          <div data-testid="second">Second</div>
        </Container>
      );
      expect(screen.getByTestId("first")).toBeInTheDocument();
      expect(screen.getByTestId("second")).toBeInTheDocument();
    });

    it("renders text children", () => {
      render(<Container>Plain text content</Container>);
      expect(screen.getByText("Plain text content")).toBeInTheDocument();
    });

    it("renders nested components", () => {
      render(
        <Container>
          <div>
            <span>Nested content</span>
          </div>
        </Container>
      );
      expect(screen.getByText("Nested content")).toBeInTheDocument();
    });
  });

  describe("styling", () => {
    it("has background color class", () => {
      render(
        <Container>
          <span data-testid="child">Test</span>
        </Container>
      );
      const container = screen.getByTestId("child").parentElement;
      expect(container).toHaveClass("bg-bg-200");
    });

    it("has minimum height of full screen", () => {
      render(
        <Container>
          <span data-testid="child">Test</span>
        </Container>
      );
      const container = screen.getByTestId("child").parentElement;
      expect(container).toHaveClass("min-h-screen");
    });

    it("has full width", () => {
      render(
        <Container>
          <span data-testid="child">Test</span>
        </Container>
      );
      const container = screen.getByTestId("child").parentElement;
      expect(container).toHaveClass("w-full");
    });

    it("has padding", () => {
      render(
        <Container>
          <span data-testid="child">Test</span>
        </Container>
      );
      const container = screen.getByTestId("child").parentElement;
      expect(container).toHaveClass("p-4");
    });

    it("has flex column layout", () => {
      render(
        <Container>
          <span data-testid="child">Test</span>
        </Container>
      );
      const container = screen.getByTestId("child").parentElement;
      expect(container).toHaveClass("flex", "flex-col");
    });
  });

  describe("edge cases", () => {
    it("handles empty children", () => {
      const { container } = render(<Container>{null}</Container>);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it("handles fragment children", () => {
      render(
        <Container>
          <>
            <span>Fragment child 1</span>
            <span>Fragment child 2</span>
          </>
        </Container>
      );
      expect(screen.getByText("Fragment child 1")).toBeInTheDocument();
      expect(screen.getByText("Fragment child 2")).toBeInTheDocument();
    });
  });
});
