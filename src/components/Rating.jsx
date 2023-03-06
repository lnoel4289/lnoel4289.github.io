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
    <div className="rating">
      {array.map((num, index) => (
        <MdStarRate
          key={index}
          className={
            num <= rating ? "star star-color-primary" : "star star-color-quinary"
          }
        />
      ))}
    </div>
  );
};

export default Rating;
