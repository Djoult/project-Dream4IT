import React from 'react';
import PropTypes from 'prop-types';
import { StyledNav, StyledNavLink } from './Navigation.styled';

const Navigation = ({ closeMobileMenu }) => {
  return (
    <StyledNav>
      <StyledNavLink to="/" onClick={closeMobileMenu}>
        Home
      </StyledNavLink>
      <StyledNavLink to="/drinks/1" onClick={closeMobileMenu}>
        Drinks
      </StyledNavLink>
      <StyledNavLink to="/add" onClick={closeMobileMenu}>
        Add recipe
      </StyledNavLink>
      <StyledNavLink to="/my" onClick={closeMobileMenu}>
        My recipes
      </StyledNavLink>
      <StyledNavLink to="/favorite/1" onClick={closeMobileMenu}>
        Favorites
      </StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;

Navigation.propTypes = {
  closeMobileMenu: PropTypes.func,
};
