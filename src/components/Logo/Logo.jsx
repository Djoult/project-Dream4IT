import React from "react";
import { logo } from "../../images/index";
import { StyledLink, StyledLogoDescr } from "./Logo.styled";

const Logo = () => {
  return (
    <div>
      <StyledLink to="/">
        <img src={logo} alt="logo" />
        <StyledLogoDescr>Drink Master</StyledLogoDescr>
      </StyledLink>
    </div>
  );
};

export default Logo;