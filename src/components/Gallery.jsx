import React from "react";
import "../data/dwellings.json";
import DwellingCard from "./DwellingCard";

const Gallery = () => {
  return (
    <div>
      <h2>Gallery</h2>
      <DwellingCard />
      <DwellingCard />
      <DwellingCard />
    </div>
  );
};

export default Gallery;
