import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 14px;
  box-sizing: border-box;
`;

export const StyledLink = styled(NavLink)`
  font-family: Manrope;
  font-size: 14px;

  white-space: nowrap;

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
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &.active {
    text-shadow: 1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black,
      -1px 1px 0 black;
  }
`;
