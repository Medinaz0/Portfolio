import { render, screen } from "@testing-library/react";
import About from "@/app/about/page";

describe("About Page", () => {
  it("renders the main heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(/About My Approach/i);
  });

  it("renders the focus areas and approach sections", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /Security is not a feature/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Cloud Infrastructure as a Foundation/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Continuous Learning/i }),
    ).toBeInTheDocument();
  });
});
