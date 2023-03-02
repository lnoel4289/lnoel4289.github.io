import React from "react";

const Banner = ({ heading, imageURL, altTxt }) => {
  return (
    <div className="banner">
      <div className="imgContainer">
        <img src={imageURL} alt={altTxt} />
      </div>
      <div className="headingContainer">
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

export default Banner;
