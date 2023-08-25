import React, { useState, useEffect } from "react";
import defaultUserLogo from "../../images/userLogo/userLogo.png";
import UserLogoModal from "../UserLogoModal/UserLogoModal.jsx";
import {
  StyledUserWrapper,
  StyledUserDescr,
  StyledUserIcon,
} from "./UserLogo.styled";

const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <StyledUserWrapper onClick={handleToggle}>
      <StyledUserIcon src={defaultUserLogo} alt="User photo" />
      <StyledUserDescr>User name</StyledUserDescr>
      {isOpen && <UserLogoModal />}
    </StyledUserWrapper>
  );
};

export default UserLogo;
