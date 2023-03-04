import React, { useState } from "react";

const Carousel = ({ pictures, title }) => {
  const [picture, setPicture] = useState(0);

  return (
    <div className="carousel">
      {<img src={`${pictures[picture]}`} alt={`${title} ${picture + 1}`} />}
    </div>
  );
};

export default Carousel;
