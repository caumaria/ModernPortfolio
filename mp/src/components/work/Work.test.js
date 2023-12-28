/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Work from "./Work";
import React from "react";
import "intersection-observer";
import renderer from 'react-test-renderer';


describe("should render work component correctly", () => {

  it('performs snapshot testing', () => {
    expect.hasAssertions();
    const tree = renderer.create(<Work />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders project names correctly", () => {
    expect.hasAssertions();
    render(<Work />);
    const projects = [
      "Starbucks",
      "Crypto Kingdom",
      "sneakers",
      "Diary App",
      "Portfolio Card Style",
    ];

    projects.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

});
