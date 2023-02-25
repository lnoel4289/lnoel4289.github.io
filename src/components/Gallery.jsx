import React, { useState } from "react";
import dwellings from "../data/dwellings";
import DwellingCard from "./DwellingCard";

const Gallery = () => {
  return (
    <div>
      <h2>Gallery</h2>
      <DwellingCard/>
      <DwellingCard />
      <DwellingCard />
    </div>
  );
};

export default Gallery;
