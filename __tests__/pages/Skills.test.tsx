import { render, screen } from "@testing-library/react";
import Skills from "@/app/skills/page";

describe("Skills Page", () => {
  it("renders the main heading", () => {
    render(<Skills />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings[0]).toHaveTextContent(/Technical Skills/i);
  });

  it("renders a list of skills", () => {
    render(<Skills />);
    expect(screen.getByText("Java")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
  });

  it("renders the soft skills section", () => {
    render(<Skills />);
    expect(screen.getByText("Soft Skills")).toBeInTheDocument();
    expect(screen.getByText("Teamwork")).toBeInTheDocument();
    expect(screen.getByText("Critical Thinking")).toBeInTheDocument();
    expect(screen.getByText("Adaptability")).toBeInTheDocument();
  });
});
