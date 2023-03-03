import React, { useState } from "react";

const Carousel = ({ pictures, title }) => {


  const [state, setState] = useState();

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
