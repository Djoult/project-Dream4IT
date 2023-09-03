import React from "react";
import { StyledNav, StyledNavLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/drinks/1">Drinks</StyledNavLink>
      <StyledNavLink to="/add">Add recipe</StyledNavLink>
      <StyledNavLink to="/my" props>My recipes</StyledNavLink>
      <StyledNavLink to="/favorite/1">Favorites</StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
