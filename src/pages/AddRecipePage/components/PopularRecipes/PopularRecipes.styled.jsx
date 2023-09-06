import styled from '@emotion/styled';
import { breakpoint as bp } from '../../../../shared';
import { colors } from '../../../../styles/GlobalStyles';
import { TransitionMain } from '../../../../styles/shared';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 28px;

  @media screen and (min-width: ${bp.tablet}) {
    gap: 32px;
    margin-top: 40px;
  }
`;

export const Item = styled.li`
  display: flex;
  width: 336px;
  height: 90px;
  @media screen and (min-width: ${bp.desktop}) {
    width: 310px;
  }
`;

export const Thumb = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  border-radius: 8px;
  overflow: hidden;
  background-color: ${colors.iconsColor};
  border: 1px solid rgba(50 50 50 / 0.1);
`;

export const Link = styled(NavLink)`
  display: flex;
  gap: 14px;
  width: 100%;

  ${TransitionMain('filter')};

  &:hover,
  &:focus-visible {
    filter: brightness(1.2);
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${colors.grayColor};
  font-size: 14px;
  line-height: 1.42;
`;

export const Drink = styled.h4`
  color: ${colors.textMainColor};
  font-size: 16px;
  line-height: 1.4;
`;

export const About = styled.p`
  //whitespace: nowrap;
  overflow: hidden;
`;
