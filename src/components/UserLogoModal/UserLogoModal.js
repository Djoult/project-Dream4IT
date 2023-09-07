import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles";

export const StyledDropDownWrapper = styled.div`
  position: absolute;
  top: 130%;
  right: 0%;
  display: flex;
  flex-direction: column;
  gap: 38px;
  padding: 18px;
  z-index: 999;
  cursor: default;

  border-radius: 6px;
  background-color: red;
  background-color: ${colors.mainBgColor};
`;

export const StyledEditIcon = styled.img`
  margin-left: 56px;
  width: 14px;
  height: 14px;
`;


export const SryledEditBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  border: none;
  cursor: pointer;
  white-space: nowrap;

  color: ${colors.textMainColor};
  background-color: ${colors.mainBgColor};
`;
