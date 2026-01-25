import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "@/app/components/ui/Card";

describe("Card", () => {
  describe("rendering", () => {
    it("renders children correctly", () => {
      render(
        <Card>
          <span data-testid="child">Card Content</span>
        </Card>
      );
      expect(screen.getByTestId("child")).toBeInTheDocument();
      expect(screen.getByText("Card Content")).toBeInTheDocument();
    });

    it("renders multiple children", () => {
      render(
        <Card>
          <h3>Title</h3>
          <p>Description</p>
        </Card>
      );
      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
    });

    it("renders nested structures", () => {
      render(
        <Card>
          <div>
            <span>Nested content</span>
          </div>
        </Card>
      );
      expect(screen.getByText("Nested content")).toBeInTheDocument();
    });

    it("renders text children", () => {
      render(<Card>Plain text</Card>);
      expect(screen.getByText("Plain text")).toBeInTheDocument();
    });
  });

  describe("styling", () => {
    it("has white background", () => {
      render(
        <Card>
          <span data-testid="child">Test</span>
        </Card>
      );
      const card = screen.getByTestId("child").parentElement;
      expect(card).toHaveClass("bg-white");
    });

    it("has rounded-xl corners", () => {
      render(
        <Card>
          <span data-testid="child">Test</span>
        </Card>
      );
      const card = screen.getByTestId("child").parentElement;
      expect(card).toHaveClass("rounded-xl");
    });

    it("has shadow-sm", () => {
      render(
        <Card>
          <span data-testid="child">Test</span>
        </Card>
      );
      const card = screen.getByTestId("child").parentElement;
      expect(card).toHaveClass("shadow-sm");
    });

    it("has border", () => {
      render(
        <Card>
          <span data-testid="child">Test</span>
        </Card>
      );
      const card = screen.getByTestId("child").parentElement;
      expect(card).toHaveClass("border", "border-bg-300/50");
    });

    it("has padding", () => {
      render(
        <Card>
          <span data-testid="child">Test</span>
        </Card>
      );
      const card = screen.getByTestId("child").parentElement;
      expect(card).toHaveClass("p-6");
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(
        <Card className="custom-class">
          <span data-testid="child">Test</span>
        </Card>
      );
      const card = screen.getByTestId("child").parentElement;
      expect(card).toHaveClass("custom-class");
    });

    it("defaults to empty className", () => {
      render(
        <Card>
          <span data-testid="child">Test</span>
        </Card>
      );
      const card = screen.getByTestId("child").parentElement;
      expect(card).toBeInTheDocument();
    });

    it("preserves base classes with custom className", () => {
      render(
        <Card className="mt-4">
          <span data-testid="child">Test</span>
        </Card>
      );
      const card = screen.getByTestId("child").parentElement;
      expect(card).toHaveClass("bg-white", "rounded-xl", "mt-4");
    });

    it("handles multiple custom classes", () => {
      render(
        <Card className="mt-4 hover:shadow-lg">
          <span data-testid="child">Test</span>
        </Card>
      );
      const card = screen.getByTestId("child").parentElement;
      expect(card).toHaveClass("mt-4", "hover:shadow-lg");
    });
  });

  describe("edge cases", () => {
    it("handles empty children", () => {
      const { container } = render(<Card>{null}</Card>);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it("handles empty className", () => {
      render(
        <Card className="">
          <span data-testid="child">Test</span>
        </Card>
      );
      const card = screen.getByTestId("child").parentElement;
      expect(card).toBeInTheDocument();
    });

    it("handles fragment children", () => {
      render(
        <Card>
          <>
            <span>Child 1</span>
            <span>Child 2</span>
          </>
        </Card>
      );
      expect(screen.getByText("Child 1")).toBeInTheDocument();
      expect(screen.getByText("Child 2")).toBeInTheDocument();
    });
  });
});
