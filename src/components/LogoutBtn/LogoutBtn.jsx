import { useState } from 'react';

import { StyledLogoutBtn } from './LogoutBtn';

import LogoutModal from '../LogoutModal/LogoutModal';

const LogoutBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);

    document.body.classList.add('no-scroll');
  };

  return (
    <>
      <StyledLogoutBtn type="button" onClick={handleOpenModal}>
        Log out
      </StyledLogoutBtn>

      {isModalOpen && (
        <LogoutModal
          closeModal={() => {
            setIsModalOpen(false);
            document.body.classList.remove('no-scroll');
          }}
        />
      )}
    </>
  );
};

export default LogoutBtn;
