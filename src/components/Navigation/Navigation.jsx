import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/drinks">Drinks</NavLink>
      <NavLink to="/add">Add recipe</NavLink>
      <NavLink to="/my">My recipes</NavLink>
      <NavLink to="/favorite">Favorites</NavLink>
    </nav>
  );
};

export default Navigation;
