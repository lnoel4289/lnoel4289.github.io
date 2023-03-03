import React from "react";
import Banner from "../components/Banner";

import ethics from "../data/ethics.json";
import Dropdowns from "../layouts/Dropdowns";

const About = () => {
  return (
    <div>
      <Banner imageURL="./kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg" altTxt="Un paysage alpin" />
      <Dropdowns data={ethics} />
    </div>
  );
};

export default About;
