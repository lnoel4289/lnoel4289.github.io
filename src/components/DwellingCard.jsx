import React from "react";
import { Link } from "react-router-dom";

const DwellingCard = ({ dwelling }) => {
  return <Link to={`/${dwelling.id}`}>{dwelling.title}</Link>;
};

export default DwellingCard;
