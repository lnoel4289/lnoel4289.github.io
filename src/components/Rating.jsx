import React from "react";
import { MdStarRate } from "react-icons/md";

const Rating = ({ rating }) => {
  let array = [];
  let n = 1;
  while (n <= 5) {
    array.push(n);
    n++;
  }

  return (
    <div>
      {array.map((num, index) => (
        <MdStarRate
          key={index}
          className={
            num <= rating ? "color-primary-star" : "color-quinary-star"
          }
        />
      ))}
    </div>
  );
};

export default Rating;
