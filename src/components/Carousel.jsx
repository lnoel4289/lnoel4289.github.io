import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Carousel = ({ pictures, title }) => {
  const [picture, setPicture] = useState(0);
  const styleArrows = { width: "100%", height: "100%", fill: "white" };

  return (
    <div className="carousel">
      {<img src={`${pictures[picture]}`} alt={`${title} ${picture + 1}`} />}

      {pictures.length > 1 && (
        <div>
          <span
            className="backArrow"
            onClick={() => {
              picture === 0
                ? setPicture(pictures.length - 1)
                : setPicture(picture - 1);
            }}
          >
            <MdArrowBackIos style={styleArrows} />
          </span>
          <span
            className="forwardArrow"
            onClick={() =>
              picture === pictures.length - 1
                ? setPicture(0)
                : setPicture(picture + 1)
            }
          >
            <MdArrowForwardIos style={styleArrows} />
          </span>
        </div>
      )}
    </div>
  );
};

export default Carousel;
