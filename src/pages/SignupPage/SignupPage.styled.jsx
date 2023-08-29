import styled from "@emotion/styled";

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  z-index: 1100;

  margin: 0 auto;
  width: 335px;
  max-width: 400px;

  padding: 240px 20px 210px 20px;

  @media (min-width: 568px) {
    padding: 330px 304px 330px 64px;
    width: 400px;
  }

  @media (min-width: 768px) {
    padding: 204px 940px 172px 100px;
    width: 400px;
  }
`;
