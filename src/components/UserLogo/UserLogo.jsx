import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors";
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
  const currentUser = useSelector(selectCurrentUser);

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
      <StyledUserIcon src={(currentUser.avatarUrl && `https://drinkmaster-backend.onrender.com/${currentUser.avatarUrl}`) || defaultUserLogo} alt="User photo" />
      <StyledUserDescr>{currentUser.name}</StyledUserDescr>
      {isOpen && <UserLogoModal />}
    </StyledUserWrapper>
  );
};

export default UserLogo;
