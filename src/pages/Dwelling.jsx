import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import Rating from "../components/Rating";
import Error from "./Error";
import dwellings from "../data/dwellings";

const Dwelling = () => {
  const { id } = useParams();
  const dwelling = dwellings.find((elem) => elem.id === id);
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
