import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { breakpoint as bp } from '../shared';
import { colors } from './GlobalStyles';

export const TransitionMain = (...props) => {
  return css`
    transition-property: ${props.join(',')};
    transition-duration: var(--transition-duration);
    transition-timing-function: var(--transition-func);
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
    margin-bottom: 60px;
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
    background-color: ${colors.buttonHoverColor};
  }
`;

export const Disabled = css`
  pointer-events: none;
  user-select: none;
  opacity: 0.5;
`;

const color = {
  yellow: '#fff9b4',
  yellow2: '#ffd000',
  orange: '#ff8b56',
  orange2: '#ff6600',
  magenta: '#d6249f',
  magenta2: '#ff00ae',
  blue: '#285aeb',
  blue2: '#0040ff',
};

export const InstaColorsTransition = css`
  ${TransitionMain('background')};

  @property --color1 {
    syntax: '<color>';
    initial-value: ${color.yellow};
    inherits: false;
  }

  @property --color2 {
    syntax: '<color>';
    initial-value: ${color.yellow};
    inherits: false;
  }

  @property --color3 {
    syntax: '<color>';
    initial-value: ${color.orange};
    inherits: false;
  }

  @property --color4 {
    syntax: '<color>';
    initial-value: ${color.magenta};
    inherits: false;
  }

  @property --color5 {
    syntax: '<color>';
    initial-value: ${color.blue};
    inherits: false;
  }

  transition: background ease-in 250ms, --color1 ease-in 250ms,
    --color2 ease-in 250ms, --color3 ease-in 250ms, --color4 ease-in 250ms,
    --color5 ease-in 250ms;

  &:hover,
  &:focus {
    --color1: ${color.yellow2};
    --color2: ${color.yellow2};
    --color3: ${color.orange2};
    --color4: ${color.magenta2};
    --color5: ${color.blue2};

    &:nth-of-type(2) {
      /* background: var(--color4); */
      background: radial-gradient(
        circle at 30% 107%,
        var(--color1) 0%,
        var(--color2) 5%,
        var(--color3) 45%,
        var(--color4) 60%,
        var(--color5) 90%
      );
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    }
  }
`;
