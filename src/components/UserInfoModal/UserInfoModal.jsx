import React, { useState } from "react";
import PropTypes from "prop-types";
import defaultUserLogo from "../../images/userLogo/userLogo.png";
import { xCross, plus, edit, error } from "../../images/index";
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
  StyledErrorIcon
} from "./UserInfoModal";
import { selectUser } from "../../redux/selectors";
import { useSelector } from "react-redux";
// kajime7546@wlmycn.com

const UserInfoModal = ({ closeModal }) => {
  const [userName, setUserName] = useState("User name");
  const [isValidUserName, setIsValidUserName] = useState(true);

  const user = useSelector(selectUser)
  console.log(user)

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleChange = (event) => {
    const { value } = event.currentTarget;

    setUserName(value);

    document.getElementById("name").classList.remove("invalid__input");

    setIsValidUserName(true);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (userName === "") {
      document.getElementById("name").classList.add("invalid__input");

      setIsValidUserName(false);

      return;
    }

    console.log(userName);
  };

  return (
    <StyledBackdrop>
      <StyledModal onClick={handleModalClick}>
        <StyledIconClose src={xCross} alt="icon close" onClick={closeModal} />
        <StyledModalForm onSubmit={handleSubmitForm}>
          <StyledUserLogo src={defaultUserLogo} alt="User photo" />
          <StyledAddPhotoBtn>
            <img src={plus} alt="icon plus" />
          </StyledAddPhotoBtn>
          <StyledModalLabel>
            <StyledModalInput
              id="name"
              type="text"
              name="name"
              defaultValue={userName}
              onChange={handleChange}
            />
            {isValidUserName ? (
              <StyledEditIcon src={edit} alt="edit icon" />
            ) : (
              <StyledErrorIcon src={error} alt="error icon" />
            )}
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
