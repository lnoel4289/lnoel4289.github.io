import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <div className="to-homepage">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default Error;
