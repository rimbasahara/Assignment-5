import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

const el = {
  image: "https://via.placeholder.com/150",
  name: "Test Recipe",
  rating: 4.5,
  tags: ["Tag1", "Tag2", "Tag3"],
  id: 1,
};

describe("Card success", () => {
  test("renders the component Card & given props", () => {
    render(<Card el={el} />);

    const imgRecipe = screen.getByTestId(`img-recipe-${el.id}`);
    expect(imgRecipe).toHaveProperty("src", el.image);
    expect(imgRecipe).toHaveProperty("alt", el.name);

    const titleRecipe = screen.getByTestId(`title-recipe-${el.id}`);
    expect(titleRecipe).toBeInTheDocument();
    expect(titleRecipe).toHaveTextContent(el.name);

    const ratingRecipe = screen.getByTestId(`rating-recipe-${el.id}`);
    expect(ratingRecipe).toBeInTheDocument();
    expect(ratingRecipe).toHaveTextContent(el.rating);

    const linkRecipe = screen.getByTestId(`link-recipe-${el.id}`);
    expect(linkRecipe).toHaveProperty(
      "href",
      `https://dummyjson.com/recipes/${el.id}`
    );
  });
});
