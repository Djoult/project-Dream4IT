import React, { useState, useEffect, useRef } from "react";
import defaultUserLogo from "../../images/userLogo/userLogo.png";
import UserLogoModal from "../UserLogoModal/UserLogoModal.jsx";
import {
  StyledUserWrapper,
  StyledUserDescr,
  StyledUserIcon,
} from "./UserLogo.styled";

const UserLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userLogoRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (userLogoRef.current && !userLogoRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <StyledUserWrapper onClick={handleToggle} ref={userLogoRef}>
      <StyledUserIcon src={defaultUserLogo} alt="User photo" />
      <StyledUserDescr>User name</StyledUserDescr>
      {isOpen && <UserLogoModal />}
    </StyledUserWrapper>
  );
};

export default UserLogo;
