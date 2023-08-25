import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 20px 19px 20px;
  max-width: 1440px;

  border-bottom: 1px solid rgba(243, 243, 243, 0.2);

  @media screen and (min-width: 1200px) {
    justify-content: space-between;
    padding: 20px 100px 19px 100px;
  }
`;
