import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "./../../../Utils";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;

  beforeEach(() => {
    component = setup();
  });

  it("should render without errors", () => {
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    const wrapper = findByTestAttr(component, "logoIMG");
    expect(wrapper.length).toBe(1);
  });
});
