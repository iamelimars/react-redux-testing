import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ title, desc }) => {
  if (!title) {
    return null;
  }

  return (
    <div data-test="listItemComponent">
      <h2 data-test="componentTitle">{title}</h2>
      <div data-test="componentDesc">{desc}</div>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ListItem;
