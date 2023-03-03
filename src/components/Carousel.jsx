import React, { useState } from "react";

const Carousel = ({ pictures, title }) => {
  const [state, setState] = useState(0);

  return (
    <div className="carousel">
      {<img src={`${pictures[state]}`} alt={`${title} ${state + 1}`} />}
    </div>
  );
};

export default Carousel;
