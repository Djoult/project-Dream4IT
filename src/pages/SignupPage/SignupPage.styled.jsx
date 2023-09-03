import styled from "@emotion/styled";

export const SignupWrapper = styled.div`
  min-width: 335px;

  display: flex;
  flex-direction: column;
  box-sizing: content-box;

  text-align: center;

  padding: 240px 20px 210px 20px;

  @media (min-width: 568px) {
    padding: 330px 304px 330px 64px;
    width: 400px;
  }

  @media (min-width: 768px) {
    padding: 204px 940px 174px 100px;
    width: 400px;
    text-align: center;
  }
`;
