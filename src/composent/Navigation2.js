import React from "react";
import { NavLink } from "react-router-dom";

const HomeLink = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavLink to="/" className="link" onClick={scrollToTop}>
      <li className="nav-item">Accueil</li>
    </NavLink>
  );
};

const Publier = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavLink to="/" className="link" onClick={scrollToTop}>
      <li className="nav-item">Publier</li>
    </NavLink>
  );
};

const Navigation2 = () => {
  return (
    <div>
      <HomeLink />
      <Publier />
    </div>
  );
};

export default Navigation2;
