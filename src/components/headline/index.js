import React, { Component } from "react";
import Proptypes from "prop-types";
export class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: Proptypes.string,
  desc: Proptypes.string,
  tempArr: Proptypes.arrayOf(
    Proptypes.shape({
      fName: Proptypes.string,
      lName: Proptypes.string,
      email: Proptypes.string,
      age: Proptypes.number,
      onlineStatus: Proptypes.bool,
    })
  ),
};

export default Headline;
