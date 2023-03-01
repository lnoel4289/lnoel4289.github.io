import React from "react";

const Carousel = ({ pictures, title }) => {
  return (
    <div className="carousel">
      {pictures.map((picture, index) => (
        <img
          key={`${index}${picture}`}
          src={`${picture}`}
          alt={`${title} ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
