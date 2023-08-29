import React from "react";
import PropTypes from "prop-types";
import defaultUserLogo from "../../images/userLogo/userLogo.png";
import { xCross, plus, edit } from "../../images/index";
import {
  StyledBackdrop,
  StyledModal,
  StyledIconClose,
  StyledModalForm,
  StyledUserLogo,
  StyledAddPhotoBtn,
  StyledEditIcon,
  StyledModalInput,
  StyledModalLabel,
  StyledModalBtn,
} from "./UserInfoModal";

const UserInfoModal = ({ closeModal }) => {
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <StyledBackdrop>
      <StyledModal onClick={handleModalClick}>
        <StyledIconClose src={xCross} alt="icon close" onClick={closeModal} />
        <StyledModalForm>
          <StyledUserLogo src={defaultUserLogo} alt="User photo" />
          <StyledAddPhotoBtn>
            <img src={plus} alt="icon plus" />
          </StyledAddPhotoBtn>
          <StyledModalLabel>
            <StyledModalInput
              type="text"
              name="name"
              defaultValue={"User name"}
            />
            <StyledEditIcon src={edit} alt="edit icon" />
          </StyledModalLabel>
          <StyledModalBtn type="submit">Save changes</StyledModalBtn>
        </StyledModalForm>
      </StyledModal>
    </StyledBackdrop>
  );
};

export default UserInfoModal;

UserInfoModal.propTypes = {
  closeModal: PropTypes.func,
};
