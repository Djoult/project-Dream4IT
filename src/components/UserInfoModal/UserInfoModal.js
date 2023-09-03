import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';
import { TransitionMain } from '../../styles/shared';

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
  background-color: ${colors.mainBgColor};

  @media screen and (min-width: 768px) {
    padding: 50px 50px 75px 50px;
  }
`;

export const StyledIconClose = styled.img`
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
`;

export const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledUserLogo = styled.img`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 39px;
  width: 80px;
  height: 80px;

  /* tablet/desktop screen */
  @media screen and (min-width: 768px) {
    margin-bottom: 66px;
    width: 100px;
    height: 100px;
  }
`;

export const StyledAddPhotoBtn = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 90px;
  left: 50%;
  width: 28px;
  height: 28px;
  transform: translateX(-50%);

  background-color: #546081;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: ${TransitionMain('background-color')};

  &:hover,
  &:focus {
    background-color: ${colors.hoverColor};
  }

  /* tablet/desktop */
  @media screen and (min-width: 768px) {
    top: 135px;
    left: 50%;
    width: 32px;
    height: 32px;
    transform: translateX(-50%);
  }
`;
export const StyledInpup = styled.input`
  display: none;
`;

export const StyledModalLabel = styled.label`
  position: relative;
`;

export const StyledModalInput = styled.input`
  padding: 17px 24px;
  margin-bottom: 18px;
  width: 285px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;

  color: ${colors.textMainColor};
  background-color: ${colors.mainBgColor};
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 30px;
  outline: none;

  &.invalid__input {
    border-color: rgba(218, 20, 20, 0.5);
  }

  /* tablet/desktop screen */
  @media screen and (min-width: 768px) {
    padding: 14px 18px 15px 24px;
    margin-bottom: 25px;
    width: 400px;
    font-size: 17px;
    line-height: 1.5;
  }
`;

export const StyledEditIcon = styled.img`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 20px;
  height: 20px;

  /* phone screen */
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const StyledErrorIcon = styled.img`
  position: absolute;
  top: 18px;
  right: 18px;
`;

export const StyledModalBtn = styled.button`
  padding: 18px 96px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  cursor: pointer;
  white-space: nowrap;

  color: ${colors.buttonDarkBgColor};
  background-color: ${colors.textMainColor};
  border-radius: 30px;
  border: none;
  transition: ${TransitionMain('color', 'background-color')};

  &:hover,
  &:focus {
    color: ${colors.textMainColor};
    background-color: #434d67;
  }

  /* tablet/desktop screen */
  @media screen and (min-width: 768px) {
    padding: 18px 147px;
    font-size: 16px;
    line-height: 1.13;
  }
`;
