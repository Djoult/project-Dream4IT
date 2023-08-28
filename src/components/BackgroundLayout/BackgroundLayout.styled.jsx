import styled from "@emotion/styled";

export const StartWrapper = styled.div`
  background-color: #0a0a11;
  overflow: hidden;
  position: relative;
  min-width: 375px;
  background-image: url("/src/assets/glass_mobile.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media screen and (min-width: 569px) and (max-width: 767px) {
    background-image: url("/src/assets/glass_tablet.jpg");
    min-width: 568px;
  }

  @media screen and (min-width: 768px) {
    background-image: url("/src/assets/glass.jpg");
    min-width: 769px;
  }
`;

export const Ellipse = styled.div`
  position: absolute;
  filter: blur(104.8543701171875px);
  z-index: 1;
`;

export const Ellipse1 = styled(Ellipse)`
  width: 257px;
  height: 247px;
  top: 84px;
  left: 42px;

  border-radius: 387px;
  background: rgba(188, 230, 210, 0.4);

  @media (min-width: 767px) {
    width: 387px;
    height: 372px;
    top: 46px;
  }

  @media (min-width: 1440px) {
    width: 387px;
    height: 381px;
    top: -132px;
    left: 171px;
  }
`;

export const Ellipse2 = styled(Ellipse)`
  width: 520px;
  height: 550px;
  top: 20px;
  left: -399px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);

  @media (min-width: 767px) {
    width: 784px;
    height: 829px;
    top: -50px;
    left: -665px;
  }

  @media (min-width: 1440px) {
    width: 784px;
    height: 849px;
    top: -231px;
    left: -494px;
  }
`;

export const Ellipse3 = styled(Ellipse)`
  width: 549px;
  height: 543px;
  top: 498px;
  left: 331px;
  z-index: 0;

  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);

  @media (min-width: 767px) {
    width: 549px;
    height: 543px;
    top: 498px;
    left: 521px;
  }

  @media (min-width: 1440px) {
    width: 549px;
    height: 543px;

    top: 458px;
    left: 1181px;
  }
`;
