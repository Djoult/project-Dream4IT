import { css } from '@emotion/react';

export const TransitionMain = (...props) => {
  return css`
    transition-property: ${props.join(',')};
    transition-duration: 250ms;
    transition-timing-function: ease;
  `;
};
