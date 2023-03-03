import React from "react";

const Presentation = ({ title, location }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h2>{location}</h2>
      </div>
    </div>
  );
};

export default Presentation;
