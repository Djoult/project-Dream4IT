import React, { useState } from "react";
import LogoutBtn from "../LogoutBtn/LogoutBtn.jsx";
import UserInfoModal from "../UserInfoModal/UserInfoModal.jsx";
import { edit } from "../../images/index";
import {
  StyledDropDownWrapper,
  StyledEditIcon,
  SryledEditBtn,
} from "./UserLogoModal";

const UserLogoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (event) => {
    event.stopPropagation();

    setIsOpen(true);
  };

  return (
    <StyledDropDownWrapper>
      <SryledEditBtn onClick={handleOpenModal}>
        Edit profile <StyledEditIcon src={edit} alt="edit" />
      </SryledEditBtn>
      <LogoutBtn />

      {isOpen && <UserInfoModal />}
    </StyledDropDownWrapper>
  );
};

export default UserLogoModal;
