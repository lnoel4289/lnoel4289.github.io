import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import dwellings from "../data/dwellings";
import Presentation from "../layouts/Presentation";
import Header from "../layouts/Header";

const Dwelling = () => {
  const { id } = useParams();
  const dwelling = dwellings.find((elem) => elem.id === id);

  return !dwelling ? (
    <Navigate to="/error" />
  ) : (
    <>
      <Header />
      <div className="dwelling">
        <Carousel pictures={dwelling.pictures} title={dwelling.title} />
        <Presentation
          title={dwelling.title}
          location={dwelling.location}
          tags={dwelling.tags}
          rating={dwelling.rating}
          host={dwelling.host}
        />
        <div className="dwelling__dropdowns">
          <Dropdown
            title="Description"
            content={<p>{dwelling.description}</p>}
          />
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
      </div>
    </>
  );
};

export default Dwelling;
