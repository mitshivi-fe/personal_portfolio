import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from "@/app/components/Navigation";

describe("Navigation", () => {
  beforeEach(() => {
    document.body.style.overflow = "unset";
  });

  afterEach(() => {
    document.body.style.overflow = "unset";
  });

  describe("rendering", () => {
    it("renders the navigation element", () => {
      render(<Navigation />);
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("renders the logo image", () => {
      render(<Navigation />);
      expect(screen.getByAltText("Shivi Mittal")).toBeInTheDocument();
    });

    it("renders the name text on larger screens", () => {
      render(<Navigation />);
      expect(screen.getByText("Shivi Mittal")).toBeInTheDocument();
    });

    it("renders all nav items", () => {
      render(<Navigation />);
      expect(screen.getAllByText("About").length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText("Experience").length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText("Skills").length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText("Achievements").length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText("Contact").length).toBeGreaterThanOrEqual(1);
    });

    it("renders Resume button in desktop nav", () => {
      render(<Navigation />);
      expect(screen.getByText("Resume")).toBeInTheDocument();
    });

    it("renders mobile menu button", () => {
      render(<Navigation />);
      expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
    });
  });

  describe("navigation links", () => {
    it("links to correct sections", () => {
      render(<Navigation />);
      const aboutLinks = screen.getAllByText("About");
      const aboutLink = aboutLinks[0].closest("a");
      expect(aboutLink).toHaveAttribute("href", "#about");
    });

    it("Resume link opens in new tab", () => {
      render(<Navigation />);
      const resumeLink = screen.getByText("Resume").closest("a");
      expect(resumeLink).toHaveAttribute("target", "_blank");
      expect(resumeLink).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("Resume link points to PDF", () => {
      render(<Navigation />);
      const resumeLink = screen.getByText("Resume").closest("a");
      expect(resumeLink).toHaveAttribute("href", "/Shivi_FE_NITkkr.pdf");
    });
  });

  describe("mobile menu toggle", () => {
    it("shows hamburger icon initially", () => {
      render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");
      const svg = button.querySelector("svg");
      const paths = svg?.querySelectorAll("path");
      expect(paths?.length).toBe(1);
      expect(paths?.[0]).toHaveAttribute("d", expect.stringContaining("M4 6h16"));
    });

    it("opens mobile menu on button click", async () => {
      const user = userEvent.setup();
      render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");

      await user.click(button);

      // Check for Download Resume (only shown in mobile menu)
      expect(screen.getByText("Download Resume")).toBeInTheDocument();
    });

    it("shows close icon when menu is open", async () => {
      const user = userEvent.setup();
      render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");

      await user.click(button);

      const svg = button.querySelector("svg");
      const paths = svg?.querySelectorAll("path");
      expect(paths?.[0]).toHaveAttribute("d", expect.stringContaining("M6 18L18 6"));
    });

    it("closes mobile menu on second click", async () => {
      const user = userEvent.setup();
      render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");

      await user.click(button);
      expect(screen.getByText("Download Resume")).toBeInTheDocument();

      await user.click(button);
      expect(screen.queryByText("Download Resume")).not.toBeInTheDocument();
    });

    it("closes menu when clicking a nav link", async () => {
      const user = userEvent.setup();
      render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");

      await user.click(button);

      // Click on a nav item in the mobile menu (the larger text one)
      const aboutLinks = screen.getAllByText("About");
      const mobileAboutLink = aboutLinks.find(
        (link) => link.closest("a")?.classList.contains("text-2xl")
      );

      if (mobileAboutLink) {
        await user.click(mobileAboutLink);
      }

      expect(screen.queryByText("Download Resume")).not.toBeInTheDocument();
    });

    it("closes menu when clicking backdrop", async () => {
      const user = userEvent.setup();
      render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");

      await user.click(button);

      // Find the backdrop element
      const backdrop = document.querySelector(".absolute.inset-0.bg-white");
      if (backdrop) {
        await user.click(backdrop);
      }

      expect(screen.queryByText("Download Resume")).not.toBeInTheDocument();
    });
  });

  describe("body scroll prevention", () => {
    it("prevents body scroll when menu is open", async () => {
      const user = userEvent.setup();
      render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");

      await user.click(button);
      expect(document.body.style.overflow).toBe("hidden");
    });

    it("restores body scroll when menu is closed", async () => {
      const user = userEvent.setup();
      render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");

      await user.click(button);
      await user.click(button);

      expect(document.body.style.overflow).toBe("unset");
    });

    it("restores body scroll on unmount", async () => {
      const user = userEvent.setup();
      const { unmount } = render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");

      await user.click(button);
      expect(document.body.style.overflow).toBe("hidden");

      unmount();
      expect(document.body.style.overflow).toBe("unset");
    });
  });

  describe("mobile menu social links", () => {
    it("shows LinkedIn link in mobile menu", async () => {
      const user = userEvent.setup();
      render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");

      await user.click(button);

      const linkedInLink = document.querySelector(
        'a[href="https://www.linkedin.com/in/shivi-mittal-nitkkr/"]'
      );
      expect(linkedInLink).toBeInTheDocument();
    });

    it("shows GitHub link in mobile menu", async () => {
      const user = userEvent.setup();
      render(<Navigation />);
      const button = screen.getByLabelText("Toggle menu");

      await user.click(button);

      const githubLink = document.querySelector(
        'a[href="https://github.com/shivimittal"]'
      );
      expect(githubLink).toBeInTheDocument();
    });
  });

  describe("styling", () => {
    it("has sticky positioning", () => {
      render(<Navigation />);
      const nav = screen.getByRole("navigation");
      expect(nav).toHaveClass("sticky", "top-0");
    });

    it("has high z-index", () => {
      render(<Navigation />);
      const nav = screen.getByRole("navigation");
      expect(nav).toHaveClass("z-50");
    });

    it("has backdrop blur effect", () => {
      render(<Navigation />);
      const nav = screen.getByRole("navigation");
      expect(nav).toHaveClass("backdrop-blur-sm");
    });
  });
});
