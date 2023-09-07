import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/selectors';
import PropTypes from 'prop-types';
import defaultUserLogo from '../../images/userLogo/userLogo.png';
import { xCross, plus, edit, error } from '../../images/index';
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
  StyledErrorIcon,
  StyledInpup,
  StyledIconPlus,
  ModalTopEllipse,
  ModalBottomEllipse,
} from './UserInfoModal';

// import { setHeaders } from "../../api/auth";
import { updateUserThunk } from '../../redux/thunks';

const UserInfoModal = ({ closeModal }) => {
  const user = useSelector(selectCurrentUser);
  const [userName, setUserName] = useState(user.name);
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [file, setFile] = useState();
  const [filePreview, setFilePreview] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilePreview(null);
  }, [user.avatarUrl]);

  const handleFileChange = e => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
      setFilePreview(URL.createObjectURL(file));
    }
  };

  const handleModalClick = event => {
    event.stopPropagation();
  };

  const handleChange = event => {
    const { value } = event.currentTarget;

    setUserName(value);

    document.getElementById('name').classList.remove('invalid__input');

    setIsValidUserName(true);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    if (userName === '') {
      document.getElementById('name').classList.add('invalid__input');

      setIsValidUserName(false);

      return;
    }

    if (!file && !userName) {
      return;
    }
    const formData = new FormData();

    if (file) {
      formData.append('file', file);
    }

    if (userName) {
      formData.append('json', JSON.stringify({ name: userName }));
    }

    // setHeaders(file);
    dispatch(
      updateUserThunk({
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-rapidapi-host': 'file-upload8.p.rapidapi.com',
          'x-rapidapi-key': 'your-rapidapi-key-here',
          // "Content-Length": `${file.size}`,
        },
      })
    );
  };

  return (
    <StyledBackdrop onClick={closeModal}>
      <StyledModal onClick={handleModalClick}>
        <ModalTopEllipse />
        <StyledIconClose src={xCross} alt="icon close" onClick={closeModal} />
        <StyledModalForm onSubmit={handleSubmitForm}>
          <StyledUserLogo
            src={
              filePreview ||
              (user.avatarUrl && `https://drinkmaster-backend.onrender.com/${user.avatarUrl}`) ||
              defaultUserLogo
            }
            alt="User photo"
          />
          <StyledAddPhotoBtn>
            <label htmlFor="file-input">
              {' '}
              <StyledIconPlus src={plus} alt="icon plus" />
            </label>
            <StyledInpup
              id="file-input"
              type="file"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
            ></StyledInpup>
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
        <ModalBottomEllipse />
      </StyledModal>
    </StyledBackdrop>
  );
};

export default UserInfoModal;

UserInfoModal.propTypes = {
  closeModal: PropTypes.func,
};
