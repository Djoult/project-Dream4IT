import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles";
import bcgDesktop from "../../assets/hero-desktop.jpg";

export const Section = styled.section`
  background-color: ${colors.mainBgColor};
  outline: 1px solid yellow;
  min-height: 100%;
  padding-left: 20px;

  @media (min-width: 768px) {
    padding-left: 32px;
  }
  @media (min-width: 1180px) {
    padding-left: 100px;
  }
`;
export const Container = styled.div`
  display: flex-inline;
  justify-content: st;
  flex-direction: column;
  padding-top: 120px;

  @media (min-width: 768px) {
    padding-top: 180px;
  }
  @media (min-width: 1180px) {
    padding-top: 160px;
  }
`;
export const BcgWrapper = styled.div`
  height: 740px;
  background-size: 640px 790px;
  background-repeat: no-repeat;
  background-position: top 106 left 250;
  background-image: linear-gradient(
      0.95deg,
      #0a0a11 -0.56%,
      rgba(10, 10, 17, 0) 21.93%
    ),
    linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
    url("${bcgDesktop}");

  @media screen and (min-width: 480px) {
    height: 790px;
    background-size: 680px 790px;
    background-repeat: no-repeat;
    background-position: top 0 left 120px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${bcgDesktop}");
  }
  @media screen and (min-width: 768px) {
    height: 790px;
    margin: 0 auto;
    background-size: 680px 790px;
    background-repeat: no-repeat;
    background-position: top 0 left 320px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${bcgDesktop}");
  }
  @media screen and (min-width: 1180px) {
    height: 790px;
    margin: 0 auto;
    background-size: 700px 790px;
    background-repeat: no-repeat;
    background-position: top 0 right 0px;
    background-image: linear-gradient(
        0.95deg,
        #0a0a11 -0.56%,
        rgba(10, 10, 17, 0) 21.93%
      ),
      linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
      url("${bcgDesktop}");
  }
`;
export const HeroTitle = styled.h1`
  max-width: 280px;
  color: ${colors.textMainColor};
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    max-width: 480px;
    font-size: 56px;
    line-height: 60px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 715px;
    font-size: 64px;
    line-height: 68px;
  }
`;
export const HeroDescription = styled.p`
  max-width: 270px;
  color: ${colors.textMainColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 450px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 500px;
  }
`;
