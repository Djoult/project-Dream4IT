import PropTypes from "prop-types";

import { StyledIconClose } from "../UserInfoModal/UserInfoModal";

import {
  StyledBackdrop,
  StyledModal,
  LogoutModalContainer,
  LogoutTitle,
  LogoutButton,
} from "./LogoutModal.styled";

import { xCross } from "../../images";

const LogoutModal = ({ closeModal }) => {
  const handleLogout = () => {
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <StyledBackdrop>
      <StyledModal>
        <StyledIconClose src={xCross} alt="close" onClick={closeModal} />
        <LogoutTitle>Are you sure you want to log out?</LogoutTitle>
        <LogoutModalContainer>
          <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
          <LogoutButton onClick={handleCancel}>Cancel</LogoutButton>
        </LogoutModalContainer>
      </StyledModal>
    </StyledBackdrop>
  );
};

LogoutModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default LogoutModal;
