import 'react-toastify/dist/ReactToastify.css';

import { css } from '@emotion/react';

export const colors = {
  grayColor: 'rgba(243, 243, 243, 0.5)',
  textMainColor: '#F3F3F3',
  iconsColor: '#F3F3F333',
  buttonLightBgColor: '#F3F3F3',
  buttonLightBgTextColor: '#161F37',
  buttonDarkBgColor: '#161F37',
  buttonDarkBgTextColor: '#F3F3F3',
  inputNormalStateTextColor: '#F3F3F380',
  inputAccentStateTextColor: '#F3F3F3',
  inputBorderNormalStateColor: '#F3F3F333',
  inputBorderAccentStateColor: '#F3F3F380',
  inputBorderErrorStateColor: '#DA141480',
  inputErrorStateColor: '#DA1414',
  inputBorderCorrectStateColor: '#3CBC8180',
  inputCorrectStateColor: '#3CBC81',
  paginationAccentColor: '#4070CD',
  dropDownListBgColor: '#161F37',
  hoverColor: '#161F37',
  mainBgColor: '#0A0A11',
};

export const GlobalStyles = css`
  :root {
    --main-font-family: 'Manrope', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: var(--primary-black-text-color);
    font-family: var(--main-font-family);
    background-color: ${colors.mainBgColor};
  }

  div,
  section,
  span,
  object,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  fieldset,
  form {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  nav,
  a {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }

  ol,
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
export default {
  colors,
  GlobalStyles,
};
