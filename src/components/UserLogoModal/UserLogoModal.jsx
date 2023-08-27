import React from "react";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import { edit } from "../../images/index";
import {
  StyledDropDownWrapper,
  StyledEditIcon,
  StyledWrapper,
  StyledDescr,
} from "./UserLogoModal";

const UserLogoModal = () => {
  return (
    <StyledDropDownWrapper>
      <StyledWrapper>
        <StyledDescr>Edit profile</StyledDescr>
        <StyledEditIcon src={edit} alt="edit" />
      </StyledWrapper>
      <LogoutBtn />
    </StyledDropDownWrapper>
  );
};

export default UserLogoModal;
