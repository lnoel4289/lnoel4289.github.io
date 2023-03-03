import React from "react";

const Dropdowns = (data) => {
  return (
    <div>
      {data.map((dat, index) => {
        return (
          <Dropdown
            key={
              `${index}` +
              `${Object.values(dat)}`.split(" ").join("").slice(7, 22)
            }
            title={Object.keys(dat)}
            content={Object.values(dat)}
          />
        );
      })}
    </div>
  );
};

export default Dropdowns;
