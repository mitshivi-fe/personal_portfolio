import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Timeline from "@/app/components/ui/Timeline";

describe("Timeline", () => {
  describe("rendering", () => {
    it("renders children correctly", () => {
      render(
        <Timeline>
          <div data-testid="child">Timeline Item</div>
        </Timeline>
      );
      expect(screen.getByTestId("child")).toBeInTheDocument();
    });

    it("renders multiple children", () => {
      render(
        <Timeline>
          <div data-testid="item1">Item 1</div>
          <div data-testid="item2">Item 2</div>
          <div data-testid="item3">Item 3</div>
        </Timeline>
      );
      expect(screen.getByTestId("item1")).toBeInTheDocument();
      expect(screen.getByTestId("item2")).toBeInTheDocument();
      expect(screen.getByTestId("item3")).toBeInTheDocument();
    });

    it("renders text children", () => {
      render(<Timeline>Timeline text content</Timeline>);
      expect(screen.getByText("Timeline text content")).toBeInTheDocument();
    });

    it("renders complex nested structures", () => {
      render(
        <Timeline>
          <article>
            <header>Experience 1</header>
            <section>Details</section>
          </article>
        </Timeline>
      );
      expect(screen.getByText("Experience 1")).toBeInTheDocument();
      expect(screen.getByText("Details")).toBeInTheDocument();
    });
  });

  describe("styling", () => {
    it("has relative positioning", () => {
      render(
        <Timeline>
          <div data-testid="child">Test</div>
        </Timeline>
      );
      const timeline = screen.getByTestId("child").parentElement;
      expect(timeline).toHaveClass("relative");
    });

    it("has vertical spacing between items", () => {
      render(
        <Timeline>
          <div data-testid="child">Test</div>
        </Timeline>
      );
      const timeline = screen.getByTestId("child").parentElement;
      expect(timeline).toHaveClass("space-y-8");
    });
  });

  describe("edge cases", () => {
    it("handles empty children", () => {
      const { container } = render(<Timeline>{null}</Timeline>);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it("handles fragment children", () => {
      render(
        <Timeline>
          <>
            <div>Fragment child 1</div>
            <div>Fragment child 2</div>
          </>
        </Timeline>
      );
      expect(screen.getByText("Fragment child 1")).toBeInTheDocument();
      expect(screen.getByText("Fragment child 2")).toBeInTheDocument();
    });

    it("preserves children order", () => {
      render(
        <Timeline>
          <div data-testid="first">First</div>
          <div data-testid="second">Second</div>
          <div data-testid="third">Third</div>
        </Timeline>
      );

      const container = screen.getByTestId("first").parentElement;
      const children = container?.children;

      expect(children?.[0]).toHaveTextContent("First");
      expect(children?.[1]).toHaveTextContent("Second");
      expect(children?.[2]).toHaveTextContent("Third");
    });
  });
});
