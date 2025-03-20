import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

test("renders Header with navigation links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const brandElement = screen.getByText(/Yahya Al Salmi/i);
  expect(brandElement).toBeInTheDocument();

  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByText(/About/i);
  expect(aboutLink).toBeInTheDocument();

  const projectsLink = screen.getByText(/Projects/i);
  expect(projectsLink).toBeInTheDocument();
});
