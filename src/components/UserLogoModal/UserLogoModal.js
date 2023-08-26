import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles";

export const StyledDropDownWrapper = styled.div`
  position: absolute;
  top: 130%;
  display: flex;
  flex-direction: column;
  gap: 38px;
  padding: 18px;

  border-radius: 6px;
  background-color: red;
  background-color: ${colors.mainBgColor};
`;

export const StyledEditIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 56px;
  align-items: center;
`;

export const StyledDescr = styled.p`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  color: ${colors.textMainColor};
`;
