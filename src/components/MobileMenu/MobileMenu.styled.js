import styled from "@emotion/styled";

export const StyledMenuIcon = styled.img`
  margin-left: 14px;
  width: 32px;
  height: 32px;

  &:hover,
  &:focus {
    background-color: #161f37;
  }

  /* tablet screen */
  @media screen and (min-width: 768px) {
    margin-left: 24px;
    width: 38px;
    height: 38px;
  }

  /* desktop screen */
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
