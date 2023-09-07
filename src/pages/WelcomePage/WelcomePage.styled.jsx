import styled from '@emotion/styled';

export const WelcomePageContainer = styled.div`
  min-width: 335px;

  display: flex;
  flex-direction: column;
  box-sizing: content-box;

  padding: 304px 28px;

  @media (min-width: 568px) {
    align-items: baseline;
    padding: 400px 234px 400px 64px;
    max-width: 400px;
  }

  @media (min-width: 768px) {
    padding: 273px 855px 273px 100px;
    max-width: 400px;
  }
`;

export const SectionTitle = styled.h2`
  color: #fafafa;

  text-align: center;

  white-space: nowrap;

  font-size: 28px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.8px;

  @media (min-width: 568px) {
    text-align: left;
    font-size: 40px;
  }
`;

export const WelcomeDescription = styled.p`
  text-align: center;
  color: #fafafa;

  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.36px;

  margin-top: 14px;
  margin-bottom: 40px;

  @media (min-width: 568px) {
    width: 432px;

    text-align: left;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    width: 437px;

    text-align: left;
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 337px;
  justify-content: center;
  display: flex;

  gap: 14px;

  @media (min-width: 568px) {
    justify-content: start;
  }
`;
