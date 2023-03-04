import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <Logo className="logo" alt="Logo Kaza" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
