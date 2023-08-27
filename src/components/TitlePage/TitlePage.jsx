import styled from "@emotion/styled";

const Title = styled.h1`
  background: #0a0a11;
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;

  padding: 80px 0 40px 20px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 60px;
    padding: 140px 0 60px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`;

const TitlePage = ({ titlePage }) => {
  return <Title>{titlePage}</Title>;
};

export default TitlePage;
