import React from "react";
import { logo } from "../../images/index";
import { StyledLink, StyledLogoDescr, StyledLogoWrapper } from "./Logo.styled";

const Logo = () => {
  return (
    <StyledLogoWrapper>
      <StyledLink to="/">
        <img src={logo} alt="logo" />
        <StyledLogoDescr>Drink Master</StyledLogoDescr>
      </StyledLink>
    </StyledLogoWrapper>
  );
};

export default Logo;