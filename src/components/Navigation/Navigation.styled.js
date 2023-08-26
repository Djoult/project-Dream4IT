import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/GlobalStyles";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: auto;

  /* desktop screen */
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    margin: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;
  white-space: nowrap;

  color: ${colors.textMainColor};
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 20px;

  &:hover,
  &:focus {
    background-color: ${colors.hoverColor};
  }

  &:active {
    background-color: ${colors.hoverColor};
  }
`;
