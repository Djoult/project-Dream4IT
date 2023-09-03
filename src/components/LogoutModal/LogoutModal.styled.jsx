import styled from "@emotion/styled";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 50px;

  border-radius: 14px;
  border-radius: 16px;
  background: #161f37;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

export const LogoutModalContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const LogoutTitle = styled.h2`
  color: #f3f3f3;
  text-align: center;

  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.36px;

  margin-bottom: 37px;
`;

export const LogoutButton = styled.button`
  font-size: 14px;

  font-weight: 600;
  line-height: 18px;

  color: #f3f3f3;
  background-color: transparent;

  border-radius: 42px;
  border: 2px solid rgba(243, 243, 243, 0.2);

  padding: 14px 44px;

  transition: color 0.3s, background-color 0.3s,
    transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    padding: 18px 44px;
  }

  &:hover,
  &:focus {
    background: #f3f3f3;
    color: #000000;
    /* transform: scale(1.02); */
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &.active {
    text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
      -1px 1px 0 black;
  }
`;
