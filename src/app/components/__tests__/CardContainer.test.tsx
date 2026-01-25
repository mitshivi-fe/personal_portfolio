import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CardContainer from "@/app/components/CardContainer";

describe("CardContainer", () => {
  describe("rendering", () => {
    it("renders children correctly", () => {
      render(
        <CardContainer>
          <span data-testid="child">Card Content</span>
        </CardContainer>
      );
      expect(screen.getByTestId("child")).toBeInTheDocument();
      expect(screen.getByText("Card Content")).toBeInTheDocument();
    });

    it("renders multiple children", () => {
      render(
        <CardContainer>
          <div data-testid="first">First Item</div>
          <div data-testid="second">Second Item</div>
        </CardContainer>
      );
      expect(screen.getByTestId("first")).toBeInTheDocument();
      expect(screen.getByTestId("second")).toBeInTheDocument();
    });

    it("renders nested structures", () => {
      render(
        <CardContainer>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </CardContainer>
      );
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
    });
  });

  describe("structure", () => {
    it("has outer wrapper div", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const outerDiv = screen.getByTestId("child").parentElement?.parentElement;
      expect(outerDiv).toBeInTheDocument();
    });

    it("has inner card div", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const innerDiv = screen.getByTestId("child").parentElement;
      expect(innerDiv).toBeInTheDocument();
    });
  });

  describe("outer wrapper styling", () => {
    it("has full width", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const outerDiv =
        screen.getByTestId("child").parentElement?.parentElement?.parentElement;
      expect(outerDiv).toHaveClass("w-full");
    });

    it("has flex centering", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const outerDiv =
        screen.getByTestId("child").parentElement?.parentElement?.parentElement;
      expect(outerDiv).toHaveClass("flex", "justify-center", "items-center");
    });

    it("has flex-grow for expansion", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const outerDiv =
        screen.getByTestId("child").parentElement?.parentElement?.parentElement;
      expect(outerDiv).toHaveClass("flex-grow");
    });
  });

  describe("inner card styling", () => {
    it("has white background", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const cardDiv = screen.getByTestId("child").parentElement?.parentElement;
      expect(cardDiv).toHaveClass("bg-white");
    });

    it("has rounded corners", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const cardDiv = screen.getByTestId("child").parentElement?.parentElement;
      expect(cardDiv).toHaveClass("rounded-lg");
    });

    it("has shadow", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const cardDiv = screen.getByTestId("child").parentElement?.parentElement;
      expect(cardDiv).toHaveClass("shadow");
    });

    it("has overflow hidden", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const cardDiv = screen.getByTestId("child").parentElement?.parentElement;
      expect(cardDiv).toHaveClass("overflow-hidden");
    });
  });

  describe("content wrapper styling", () => {
    it("has responsive padding", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const contentDiv = screen.getByTestId("child").parentElement;
      expect(contentDiv).toHaveClass("px-2", "py-5");
    });

    it("has larger padding on small screens and up", () => {
      render(
        <CardContainer>
          <span data-testid="child">Test</span>
        </CardContainer>
      );
      const contentDiv = screen.getByTestId("child").parentElement;
      expect(contentDiv).toHaveClass("sm:p-4");
    });
  });

  describe("edge cases", () => {
    it("handles empty content", () => {
      const { container } = render(<CardContainer>{null}</CardContainer>);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it("handles text-only content", () => {
      render(<CardContainer>Just text</CardContainer>);
      expect(screen.getByText("Just text")).toBeInTheDocument();
    });
  });
});
