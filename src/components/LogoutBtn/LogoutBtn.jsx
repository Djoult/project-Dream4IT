import { useState } from "react";

import { StyledLogoutBtn } from "./LogoutBtn";

import LogoutModal from "../LogoutModal/LogoutModal";

const LogoutBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <StyledLogoutBtn type="button" onClick={handleOpenModal}>
        Log out
      </StyledLogoutBtn>

      {isModalOpen && <LogoutModal closeModal={() => setIsModalOpen(false)} />}
    </>
  );
};

export default LogoutBtn;
