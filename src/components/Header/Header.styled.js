import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 20px 19px 20px;

  background-color: ${colors.mainBgColor};
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);

  /* tablet screen */
  @media screen and (min-width: 768px) {
    padding: 20px 32px 19px 32px;
  }

  /* desktop screen */
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    padding: 20px 100px 19px 100px;
  }
`;
