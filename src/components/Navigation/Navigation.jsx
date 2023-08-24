import React from "react";
import { StyledNav, StyledNavLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/drinks">Drinks</StyledNavLink>
      <StyledNavLink to="/add">Add recipe</StyledNavLink>
      <StyledNavLink to="/my">My recipes</StyledNavLink>
      <StyledNavLink to="/favorite">Favorites</StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
