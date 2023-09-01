import styled from "@emotion/styled";

import { keyframes } from "@emotion/react";

import GlassImageMobile from "../../assets/glass_mobile.jpg";
import GlassImageTablet from "../../assets/glass_tablet.jpg";
import GlassImageDesktop from "../../assets/glass_desktop.jpg";

export const StartWrapper = styled.div`
  min-width: 375px;

  height: 100vh;

  background-color: #0a0a11;
  background-image: linear-gradient(
    to right,
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.4)
  );
  overflow: hidden;
  position: relative;

  background-image: url("${GlassImageMobile}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  @media (min-width: 769px) {
    background-image: url("${GlassImageTablet}");
  }

  @media (min-width: 1439px) {
    background-image: url("${GlassImageDesktop}");
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`;

const rotateAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
`;

export const Ellipse = styled.div`
  position: absolute;

  filter: blur(104.8543701171875px);

  animation: ${pulseAnimation} 6s infinite, ${rotateAnimation} 10s infinite; // Применяем анимации
`;

export const Ellipse1 = styled(Ellipse)`
  width: 257px;
  height: 247px;

  top: 84px;
  left: 42px;

  border-radius: 387px;
  background: rgba(188, 230, 210, 0.4);

  @media (min-width: 568px) {
    width: 387px;
    height: 372px;

    top: 46px;
  }

  @media (min-width: 768px) {
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

  @media (min-width: 568px) {
    width: 784px;
    height: 829px;
    top: -50px;
    left: -665px;
  }

  @media (min-width: 768px) {
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

  @media (min-width: 568px) {
    width: 549px;
    height: 543px;

    top: 498px;
    left: 621px;
  }

  @media (min-width: 768px) {
    width: 549px;
    height: 543px;

    top: 458px;
    left: 1181px;
  }
`;
