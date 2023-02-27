import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import Rating from "../components/Rating";
import Error from "./Error";

const Dwelling = ({ data }) => {
  const { id } = useParams();
  const dwelling = data.find((dat) => dat.id === id);
  if (!dwelling) {
    return <Error />;
  }

  return (
    <div>
      <h1>{dwelling.title}</h1>
      <Carousel />
      <Dropdown />
      <Rating rating={dwelling.rating} />
    </div>
  );
};

export default Dwelling;
