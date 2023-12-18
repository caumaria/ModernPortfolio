/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Work from "./Work";
import React from "react";
import "intersection-observer";

describe("work", () => {
  it("heading render correctly", () => {
    expect.hasAssertions();
    const { getByText } = render(<Work />);

    expect(getByText(/Cau’s Portfolio/i)).toBeInTheDocument();
    expect(getByText(/My latest Work/i)).toBeInTheDocument();
  });

  it("renders project names correctly", () => {
    expect.hasAssertions();
    const { getByText } = render(<Work />);
    const projects = [
      "Starbucks",
      "Crypto Kingdom",
      "sneakers",
      "Diary App",
      "Portfolio Card Style",
    ];

    projects.forEach((name) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
