import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Container from "@/app/components/Container";

describe("Container", () => {
  it("renders children correctly", () => {
    render(
      <Container>
        <span data-testid="child">Content</span>
      </Container>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
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

  it("handles empty children", () => {
    const { container } = render(<Container>{null}</Container>);
    expect(container.querySelector("div")).toBeInTheDocument();
  });
});
