import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

test("renders NotFound page with 404 message", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );

  const headingElement = screen.getByText(/404/i);
  expect(headingElement).toBeInTheDocument();

  const messageElement = screen.getByText(
    /page you are looking for does not exist/i
  );
  expect(messageElement).toBeInTheDocument();

  const buttonElement = screen.getByText(/Go to Home/i);
  expect(buttonElement).toBeInTheDocument();
});
