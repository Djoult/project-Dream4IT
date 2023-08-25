import React from "react";
import defaultUserLogo from "../../images/userLogo/userLogo.png";
import { StyledUserWrapper, StyledUserDescr, StyledUserIcon } from "./UserLogo.styled";

const UserLogo = () => {
  return (
    <StyledUserWrapper>
      <StyledUserIcon src={defaultUserLogo} alt="User photo"/>
      <StyledUserDescr>User name</StyledUserDescr>
    </StyledUserWrapper>
  );
};

export default UserLogo;
