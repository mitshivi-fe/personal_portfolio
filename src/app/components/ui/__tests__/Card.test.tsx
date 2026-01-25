import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "@/app/components/ui/Card";

describe("Card", () => {
  it("renders children correctly", () => {
    render(
      <Card>
        <span data-testid="child">Card Content</span>
      </Card>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
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

  it("applies custom className", () => {
    render(
      <Card className="custom-class">
        <span data-testid="child">Test</span>
      </Card>
    );
    const card = screen.getByTestId("child").parentElement;
    expect(card).toHaveClass("custom-class");
  });
});
