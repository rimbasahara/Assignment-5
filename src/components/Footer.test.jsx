import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";
describe("Footer success", () => {
  test("renders the footer component", () => {
    render(<Footer />);

    const footerText = screen.getByTestId("footer-text");
    expect(footerText).toBeInTheDocument();
    expect(footerText).toHaveTextContent(
      "© 2024 Company, Inc. All rights reserved."
    );

    const linkFacebook = screen.getByTestId("link-facebook");
    expect(linkFacebook).toHaveAttribute("href", "https://facebook.com");

    const linkX = screen.getByTestId("link-x");
    expect(linkX).toHaveAttribute("href", "https://x.com");

    const linkInsta = screen.getByTestId("link-instagram");
    expect(linkInsta).toHaveAttribute("href", "https://instagram.com/");
  });
});
