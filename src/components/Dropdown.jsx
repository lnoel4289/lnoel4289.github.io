import React from "react";

const Dropdown = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      {content}
    </div>
  );
};

export default Dropdown;
