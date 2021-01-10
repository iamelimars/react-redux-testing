import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "./../Utils";
import React from "react";

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title",
          body: "Some text",
        },
        {
          title: "Example title2",
          body: "Some text",
        },
        {
          title: "Example title3",
          body: "Some text",
        },
      ],
    };
    wrapper = setup(initialState);
  });

  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("exampleMethod_updatesState Method should update state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updatesState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("exampleMethod_returnsAValue Method should return value as expected", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsAValue(6);
    expect(newValue).toBe(7);
  });
});
