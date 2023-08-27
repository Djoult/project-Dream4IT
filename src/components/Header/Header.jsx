import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserLogo from "../UserLogo/UserLogo";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setIsMobileMenuVisible(true);
      } else {
        setIsMobileMenuVisible(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <Logo />
      {isMobileMenuVisible ? (
        <>
          <UserLogo />
          <MobileMenu />
        </>
      ) : (
        <>
          <Navigation />
          <UserLogo />
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
