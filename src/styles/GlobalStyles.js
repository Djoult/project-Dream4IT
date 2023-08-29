import { css } from "@emotion/react";

export const colors = {
  textMainColor: "#F3F3F3",
  iconsColor: "#F3F3F333",
  buttonLightBgColor: "#F3F3F3",
  buttonLightBgTextColor: "#161F37",
  buttonDarkBgColor: "#161F37",
  buttonDarkBgTextColor: "#F3F3F3",
  inputNormalStateTextColor: "#F3F3F380",
  inputAccentStateTextColor: "#F3F3F3",
  inputBorderNormalStateColor: "#F3F3F333",
  inputBorderAccentStateColor: "#F3F3F380",
  inputBorderErrorStateColor: "#DA141480",
  inputErrorStateColor: "#DA1414",
  inputBorderCorrectStateColor: "#3CBC8180",
  inputCorrectStateColor: "#3CBC81",
  paginationAccentColor: "#4070CD",
  dropDownListBgColor: "#161F37",
  hoverColor: "#161F37",
  mainBgColor: "#0A0A11",
};

export const GlobalStyles = css`
  :root {
    --main-font-family: "Manrope", sans-serif;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    font-family: var(--main-font-family);
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
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
