import React, { useState } from "react";
import { mobileMenu, xCross } from "../../images/index";
import { StyledMenuIcon, StyledMenuWrapper } from "./MobileMenu";

const MobileMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleMenuOpen = () => {
    setIsShowMenu(true);
  };

  const handleMenuClose = () => {
    setIsShowMenu(false);
  };

  return (
    <div>
      {!isShowMenu ? (
        <StyledMenuIcon onClick={handleMenuOpen} src={mobileMenu} alt="mobile munu" />
      ) : (
        <StyledMenuIcon onClick={handleMenuClose} src={xCross} alt="mobile munu close" />
      )}
      {isShowMenu ? <StyledMenuWrapper></StyledMenuWrapper> : null}
    </div>
  );
};

export default MobileMenu;
