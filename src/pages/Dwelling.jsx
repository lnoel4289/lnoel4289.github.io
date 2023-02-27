import React from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";

const Dwelling = ({ data }) => {
  const { id } = useParams();
  const dwelling = data.find((dat) => dat.id === id);
  if (!dwelling) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return <div>{dwelling.title}</div>;
};

export default Dwelling;
