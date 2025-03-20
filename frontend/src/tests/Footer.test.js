import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("renders Footer with copyright information", () => {
  render(<Footer />);

  const nameElement = screen.getByText(/Yahya Al Salmi/i);
  expect(nameElement).toBeInTheDocument();

  const copyrightElement = screen.getByText(/All rights reserved/i);
  expect(copyrightElement).toBeInTheDocument();
});
