import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

test("renders Home page with welcome text", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const nameElement = screen.getByText(/Yahya Al Salmi/i);
  expect(nameElement).toBeInTheDocument();

  const welcomeElement = screen.getByText(/Welcome to My Portfolio/i);
  expect(welcomeElement).toBeInTheDocument();

  const contactElement = screen.getByText(/Contact Information/i);
  expect(contactElement).toBeInTheDocument();
});
