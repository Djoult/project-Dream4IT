import React from "react";
import { logo } from "../../images/index";
import { StyledLink, StyledLogoDescr, StyledLogoSVG } from "./Logo.styled";

const Logo = () => {
  return (
    <div>
      <StyledLink to="/">
        <StyledLogoSVG src={logo} alt="logo" />
        <StyledLogoDescr>Drink Master</StyledLogoDescr>
      </StyledLink>
    </div>
  );
};

export default Logo;