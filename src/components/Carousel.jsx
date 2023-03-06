import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Carousel = ({ pictures, title }) => {
  const [picture, setPicture] = useState(0);

  return (
    <div className="carousel">
      {<img src={`${pictures[picture]}`} alt={`${title} ${picture + 1}`} />}

      {pictures.length > 1 && (
        <div>
          <div
            className="arrow-container"
            onClick={() => {
              picture === 0
                ? setPicture(pictures.length - 1)
                : setPicture(picture - 1);
            }}
          >
            <MdArrowBackIos className="arrow" />
          </div>
          <div
            className="arrow-container arrow-container-right"
            onClick={() =>
              picture === pictures.length - 1
                ? setPicture(0)
                : setPicture(picture + 1)
            }
          >
            <MdArrowForwardIos className="arrow" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
