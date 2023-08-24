import React from "react";
import defaultUserLogo from "../../images/userLogo/userLogo.png";
import { StyledUserWrapper, StyledUserDescr } from "./UserLogo.styled";

const UserLogo = () => {
  return (
    <StyledUserWrapper>
      <img src={defaultUserLogo} alt="User photo" width={44} height={44}/>
      <StyledUserDescr>Victoria</StyledUserDescr>
    </StyledUserWrapper>
  );
};

export default UserLogo;
