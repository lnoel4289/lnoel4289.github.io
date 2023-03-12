import React from "react";
import Banner from "../components/Banner";
import ethics from "../data/ethics.json";
import Dropdowns from "../layouts/Dropdowns";
import Header from "../layouts/Header";

const About = () => {
  return (
    <><Header /><div className="about">
      <Banner imageURL="./kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg" altTxt="Un paysage alpin" />
      <Dropdowns data={ethics} />
    </div></>
  );
};

export default About;
