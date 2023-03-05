import React from "react";
import { MdStarRate } from "react-icons/md";

const Rating = ({ rating }) => {
  const displayStars = () => {
    for (let i = 0; i < 5; i++) {
      return <MdStarRate />
    }
  };

  return <div>{displayStars()}</div>;
};

export default Rating;
