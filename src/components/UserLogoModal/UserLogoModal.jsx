import { useState } from 'react';

import LogoutBtn from '../LogoutBtn/LogoutBtn.jsx';
import UserInfoModal from '../UserInfoModal/UserInfoModal.jsx';

import { edit } from '../../images/index';

import {
  StyledDropDownWrapper,
  StyledEditIcon,
  SryledEditBtn,
} from './UserLogoModal';

const UserLogoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = event => {
    event.stopPropagation();
    setIsOpen(true);

    document.body.classList.add('no-scroll');
  };

  const handleCloseModal = () => {
    setIsOpen(false);

    document.body.classList.remove('no-scroll');
  };

  const handleContainerClick = event => {
    event.stopPropagation();
  };

  return (
    <StyledDropDownWrapper onClick={handleContainerClick}>
      <SryledEditBtn onClick={handleOpenModal}>
        Edit profile <StyledEditIcon src={edit} alt="edit" />
      </SryledEditBtn>
      <LogoutBtn />
      {isOpen && <UserInfoModal closeModal={handleCloseModal} />}
    </StyledDropDownWrapper>
  );
};

export default UserLogoModal;
