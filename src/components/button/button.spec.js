import React from "react";
import { findByTestAttr, checkProps } from "./../../../Utils";
import { shallow } from "enzyme";
import SharedButton from "./index";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Test",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button Test",
        emitEvent: () => {},
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
