import styled from "@emotion/styled";

export const StartWrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 46.3%,
    rgba(0, 0, 0, 0.35) 72.75%,
    rgba(0, 0, 0, 0) 100%
  );
  overflow: hidden;
  position: relative;
  max-width: 375px;
  height: 812px;
  background-image: url("/src/assets/glass_mobile.jpg");
  background-repeat: no-repeat;
  background-position: right;

  max-width: 568px;
  margin: 0 auto;

  @media (max-width: 767px) {
    background-image: url("/src/assets/glass_tablet.jpg");
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: url("/src/assets/glass_tablet.jpg");
    max-width: 768px;
    height: 1024px;
  }

  @media (min-width: 1440px) {
    background-image: url("/src/assets/glass.jpg");
    max-width: 1440px;
    height: 770px;
  }
`;

export const Ellipse = styled.div`
  position: absolute;
  filter: blur(104.8543701171875px);
  z-index: 1;
`;

export const Ellipse1 = styled(Ellipse)`
  width: 387px;
  height: 381px;
  border-radius: 387px;
  background: rgba(188, 230, 210, 0.4);
  top: -132px;
  left: 171px;
`;

export const Ellipse2 = styled(Ellipse)`
  width: 784px;
  height: 849px;
  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  top: -231px;
  left: -494px;
`;

export const Ellipse3 = styled(Ellipse)`
  width: 549px;
  height: 543px;
  flex-shrink: 0;
  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);
  top: 458px;
  left: 1181px;
`;
