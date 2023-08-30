import styled from "@emotion/styled";
import { colors } from "../../styles/GlobalStyles";
// import bcgMobile from "../../assets/hero-mobile.jpg";
// import bcgTablet from "../../assets/hero-tablet.jpg";
// import bcgDesktop from "../../assets/hero-desktop.jpg";

export const SectionHero = styled.section`
  max-height: 690px;
  padding-top: 120px;
  padding-bottom: 80px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${colors.mainBgColor};

  @media (min-width: 768px) {
    max-height: 840px;
    padding-top: 180px;
    padding-bottom: 140px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1440px) {
    max-height: 740px;
    padding-top: 160px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
// export const Wrapper = styled.div`
//   background-size: 496px 700px;
//   background-repeat: no-repeat;
//   background-position: top 106 left 102;
//   background-image: linear-gradient(
//       0.95deg,
//       #0a0a11 -0.56%,
//       rgba(10, 10, 17, 0) 21.93%
//     ),
//     linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
//     url("${bcgMobile}");

//   @media screen and (min-width: 480px) {
//     // width: 769px;
//     //   height: 100%;
//     background-size: 710px 1001px;
//     background-image: linear-gradient(
//         0.95deg,
//         #0a0a11 -0.56%,
//         rgba(10, 10, 17, 0) 21.93%
//       ),
//       linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
//       url("${bcgTablet}");
//   }

//   @media screen and (min-width: 768px) {
//     width: 1440px;
//     height: 790px;
//     margin: 0 auto;
//     background-size: 710px 790px;
//     background-repeat: no-repeat;
//     background-position: top 0 right 0px;
//     background-image: linear-gradient(
//         0.95deg,
//         #0a0a11 -0.56%,
//         rgba(10, 10, 17, 0) 21.93%
//       ),
//       linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
//       url("${bcgTablet}");
//   }
//   @media screen and (min-width: 1180px) {
//     width: 1440px;
//     height: 790px;
//     margin: 0 auto;
//     background-size: 710px 790px;
//     background-repeat: no-repeat;
//     background-position: top 0 right 0px;
//     background-image: linear-gradient(
//         0.95deg,
//         #0a0a11 -0.56%,
//         rgba(10, 10, 17, 0) 21.93%
//       ),
//       linear-gradient(86.16deg, #0a0a11 8.41%, rgba(10, 10, 17, 0) 46.6%),
//       url("${bcgDesktop}");
//   }
// `;
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
