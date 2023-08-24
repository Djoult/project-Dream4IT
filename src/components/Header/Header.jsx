import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserLogo from "../UserLogo/UserLogo";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <UserLogo/>
    </StyledHeader>
  );
};

export default Header;
