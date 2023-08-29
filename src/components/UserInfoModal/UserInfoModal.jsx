import React from "react";
import defaultUserLogo from "../../images/userLogo/userLogo.png";
import { xCross, plus, edit } from "../../images/index";
import { StyledBackdrop, StyledModal } from "./UserInfoModal";

const UserInfoModal = () => {
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <StyledBackdrop>
      <StyledModal onClick={handleModalClick}>
        <img src={xCross} alt="icon close" />
        <form>
          <div>
            <img src={defaultUserLogo} alt="User photo" />
            <button>
              <img src={plus} alt="icon plus" />
            </button>
          </div>
          <input type="text" name="name" id="name" />
          <label htmlFor="name">
            User name
            <img src={edit} alt="edit icon" />
          </label>
          <button type="submit">Save changes</button>
        </form>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default UserInfoModal;
