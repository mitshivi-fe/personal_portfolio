import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/app/components/Header";

describe("Header", () => {
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
