import React from "react";
import { MdStarRate } from "react-icons/md";

const Rating = ({ rating }) => {
  let array = [1, 2, 3, 4, 5];

  return (
    <div>
      {array.map((num, index) => (
        <MdStarRate
          key={index} className={num <= rating ? "color-primary-star" : "color-quinary-star" }
        />
      ))}
    </div>
  );
};

export default Rating;
