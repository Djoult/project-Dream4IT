import styled from "@emotion/styled";

export const List = styled.ul`
  padding: 0 20px 80px 20px;
  max-width: 1440px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 80px 20px;
    padding: 0 32px 140px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 100px 140px 100px;
  }
`;

export const ContainerBtnPagination = styled.div`
  padding-bottom: 140px;
`;
