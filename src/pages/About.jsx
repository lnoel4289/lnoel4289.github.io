import React from "react";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import ethics from "../data/ethics.json";

const About = () => {
  return (
    <div>
      <Banner imageURL="./kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg" altTxt="Un paysage alpin" />
      {ethics.map((eth, index) => {
        return (
          <Dropdown
            key={`${index}`+`${Object.values(eth)}`.split(" ").join("").slice(7, 22)}
            title={Object.keys(eth)}
            content={Object.values(eth)}
          />
        );
      })}
    </div>
  );
};

export default About;
