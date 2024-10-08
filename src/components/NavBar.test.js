import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./NavBar";
describe("Navbar success", () => {
  test("renders the Navbar component", () => {
    render(<Navbar />);

    const myRecipe = screen.getByTestId("my-recipe");
    expect(myRecipe).toBeInTheDocument();
    expect(myRecipe).toHaveTextContent("My Recipe");

    const formSearch = screen.getByTestId("form-search");
    expect(formSearch).toBeInTheDocument();
    expect(formSearch).toHaveAttribute("role", "search");
  });
});
