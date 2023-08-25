import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
  display: flex;
  gap: 14px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 16px;
  background-color: transparent;
  font-weight: 600;
  line-height: 18px;
  border-radius: 42px;
  border: 2px solid rgba(243, 243, 243, 0.2);

  padding: 18px 44px;

  transition: color 0.3s, background-color 0.3s,
    transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

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
