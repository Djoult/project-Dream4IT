import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 1199px) {
      display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  text-decoration: none;
  white-space: nowrap;

  color: #f3f3f3;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 20px;

  &:hover,
  &:focus {
    background-color: #161f37;
  }

  &:active {
    background-color: #161f37;
  }
`;
