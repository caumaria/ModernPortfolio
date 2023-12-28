import "@testing-library/jest-dom";
import renderer from 'react-test-renderer';
import Footer from "./Footer";
import React from "react";

describe("should render work component correctly", () => {
    it('performs snapshot testing', () => {
      expect.hasAssertions();
      const tree = renderer.create(<Footer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
  
