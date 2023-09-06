import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoint as bp } from '../shared';
import { colors } from './GlobalStyles';

export const TransitionMain = (...props) => {
  return css`
    transition-property: ${props.join(',')};
    transition-duration: 250ms;
    transition-timing-function: ease;
  `;
};

export const MainContainer = styled.div`
  margin: 0 auto 0 auto;
`;

export const Section = styled.div`
  padding: 80px 20px;

  @media screen and (min-width: ${bp.tablet}) {
    padding: 140px 32px;
  }
  @media screen and (min-width: ${bp.desktop}) {
    padding: 160px 100px;
  }
`;

export const PageTitle = styled.h1`
  margin-bottom: 40px;

  font-family: var(--main-font-family);
  font-size: 32px;
  line-height: 0.9;
  font-weight: 600;
  color: ${colors.textMainColor};

  @media screen and (min-width: ${bp.tablet}) {
    font-size: 56px;
  }
  @media screen and (min-width: ${bp.desktop}) {
    font-size: 64px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.1;

  color: ${colors.textMainColor};

  @media screen and (min-width: ${bp.tablet}) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const SubtitleSec = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  color: ${colors.textMainColor};

  @media screen and (min-width: ${bp.tablet}) {
    font-size: 24px;
  }
`;

export const ButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  font-size: inherit;
  font-family: inherit;

  color: currentColor;
  border: none;
  cursor: pointer;

  ${TransitionMain()};
`;

export const ButtonPrimary = styled(ButtonBase)`
  padding: 14px 40px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;

  border-radius: 42px;
  background: ${colors.textMainColor};
  color: ${colors.buttonDarkBgColor};

  @media screen and (min-width: ${bp.tablet}) {
    padding: 18px 40px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.1;
  }

  ${TransitionMain('color background-color')};

  &:hover,
  &:focus-visible {
    color: ${colors.textMainColor};
    background-color: ${colors.buttonDarkBgColor};
  }
`;

export const Disabled = css`
  pointer-events: none;
  user-select: none;
  opacity: 0.5;
`;
