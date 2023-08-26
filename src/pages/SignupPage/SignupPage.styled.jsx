import styled from "@emotion/styled";

export const SignupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  text-align: center;
  z-index: 1100;
  margin-bottom: 14px;
  max-width: 335px;

  padding: 240px 20px 240px 20px;

  @media (min-width: 568px) and (max-width: 768px) {
    /* padding: 366px 304px 366px 64px; */
    padding: 204px 940px 204px 100px;
    width: 400px;
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    padding: 366px 304px 366px 64px;
    width: 400px;
  }

  @media (min-width: 1440px) {
    padding: 204px 940px 204px 100px;
    width: 400px;
  }
`;
