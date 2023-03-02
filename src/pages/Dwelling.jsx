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
      <Carousel pictures={dwelling.pictures} title={dwelling.title} />
      <Rating rating={dwelling.rating} />
      <Dropdown title="Description" content={<p>{dwelling.description}</p>} />
      <Dropdown
        title="Équipements"
        content={
          <ul>
            {dwelling.equipments.map((eq, index) => {
              return <li key={`${index}${eq}`}>{eq}</li>;
            })}
          </ul>
        }
      />
    </div>
  );
};

export default Dwelling;
