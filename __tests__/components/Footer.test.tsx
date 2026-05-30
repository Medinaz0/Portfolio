import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders copyright info with current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(currentYear.toString())),
    ).toBeInTheDocument();
    expect(screen.getByText(/Santiago Medina Varon/i)).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/Medinaz0",
    );
  });
});
