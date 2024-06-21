/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Renders first heading correctly", () => {
  render(<Page />);
  const headings = screen.getAllByRole("heading");
  expect(headings[0]).toHaveTextContent("App Router");
});

it("App Router: Renders second heading correctly", () => {
  render(<Page />);
  const headings = screen.getAllByRole("heading");
  expect(headings[1]).toHaveTextContent("Change address to /home too see the website");
});
