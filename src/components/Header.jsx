import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      header
      <Logo alt="Logo Kaza" />
      <nav>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>À propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
