import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles";
import { TransitionMain } from "../../styles/shared";

export const StyledLogoutBtn = styled.button`
  padding: 12px 45px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  white-space: nowrap;
  cursor: pointer;

  color: ${colors.mainBgColor};
  border: none;
  border-radius: 20px;
  transition: ${TransitionMain('color', 'background-color')};

  &:hover,
  &:focus {
    background-color: ${colors.hoverColor};
    color: ${colors.textMainColor};
  }
`;
