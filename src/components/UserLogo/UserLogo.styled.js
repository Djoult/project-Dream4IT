import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles";

export const StyledUserWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 1199px) {
    margin-left: auto;
  }
`;

export const StyledUserDescr = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  color: ${colors.textMainColor};

  /* tablet screen */
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const StyledUserIcon = styled.img`
  margin-right: 8px;
  width: 32px;
  height: 32px;

  /* tablet screen */
  @media screen and (min-width: 768px) {
    margin-right: 14px;
    width: 44px;
    height: 44px;
  }
`;
