import React from "react";
import Dropdown from "../components/Dropdown";

const Dropdowns = ({ data }) => {
  return (
    <article>
      {data.map((dat, index) => {
        return (
          <Dropdown
            key={
              `${index}` +
              `${Object.values(dat)}`.split(" ").join("").slice(7, 22)
            }
            title={<h2>{Object.keys(dat)}</h2>}
            content={<p>{Object.values(dat)}</p>}
          />
        );
      })}
    </article>
  );
};

export default Dropdowns;
