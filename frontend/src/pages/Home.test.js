import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Home page with welcome text", () => {
  render(<Home />);
  // Check if heading is on the screen
  const headingElement = screen.getByText(/Welcome to My Portfolio/i);
  expect(headingElement).toBeInTheDocument();
});
