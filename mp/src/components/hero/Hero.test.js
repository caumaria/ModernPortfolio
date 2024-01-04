import "@testing-library/jest-dom";
import renderer from 'react-test-renderer';
import Hero from "./Hero";
import React from 'react'; // eslint-disable-line no-unused-vars

describe("should render hero component correctly", () => {
    it('performs snapshot testing', () => {
      expect.hasAssertions();
      const tree = renderer.create(<Hero />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});