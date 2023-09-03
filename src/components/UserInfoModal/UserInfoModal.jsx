import { useState } from 'react';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentUser } from '../../redux/selectors';

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
} from './UserInfoModal';
// kajime7546@wlmycn.com

// import { setHeaders } from "../../api/auth";
import { updateUserThunk } from '../../redux/thunks';

const UserInfoModal = ({ closeModal }) => {
  const user = useSelector(selectCurrentUser);
  const [userName, setUserName] = useState(user.name);
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [file, setFile] = useState();
  const [filePreview, seFilePreview] = useState();
  const dispatch = useDispatch();

  const handleFileChange = e => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
      seFilePreview(URL.createObjectURL(file));
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

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

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
    <StyledBackdrop>
      <StyledModal onClick={handleModalClick}>
        <StyledIconClose src={xCross} alt="icon close" onClick={closeModal} />
        <StyledModalForm onSubmit={handleSubmitForm}>
          <StyledUserLogo
            src={
              filePreview ||
              `http://localhost:4000/${user.avatarUrl}` ||
              defaultUserLogo
            }
            alt="User photo"
          />
          <StyledAddPhotoBtn>
            <label htmlFor="file-input">
              {' '}
              <img src={plus} alt="icon plus" />
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
      </StyledModal>
    </StyledBackdrop>
  );
};

export default UserInfoModal;

UserInfoModal.propTypes = {
  closeModal: PropTypes.func,
};
