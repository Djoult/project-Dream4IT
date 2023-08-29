import styled from "@emotion/styled";

export const WelcomePageContainer = styled.div`
  width: 375px;
  font-size: 28px;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 304px 28px;

  @media (min-width: 568px) {
    align-items: baseline;
    width: 470px;
    padding: 400px 234px 400px 64px;
  }

  @media (min-width: 768px) {
    width: 485px;
    padding: 273px 855px 376px 100px;
  }
`;

export const SectionTitle = styled.h2`
  color: #fafafa;

  align-items: center;
  text-align: center;

  font-family: Manrope;
  font-size: 28px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.8px;

  @media (min-width: 568px) {
    text-align: left;
    width: 393px;
    font-size: 40px;
  }
`;

export const WelcomeDescription = styled.p`
  text-align: center;
  color: #fafafa;

  font-family: Manrope;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.36px;

  margin-top: 14px;

  margin-bottom: 40px;

  @media (min-width: 568px) {
    text-align: left;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    text-align: left;
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
  z-index: 200;
`;
