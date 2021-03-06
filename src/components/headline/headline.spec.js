import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr, checkProps } from "../../../Utils";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw warning", () => {
      const expectedProps = {
        header: "TestHeader",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fname",
            lname: "Test lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBe(undefined);
    });
  });

  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setup(props);
    });

    it("should render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render an H!", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });
  describe("Have No props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });
    it("should not render", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
