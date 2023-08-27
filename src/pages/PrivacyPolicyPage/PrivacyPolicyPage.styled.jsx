import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #0a0a11;
  color: #f3f3f3;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1180px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
export const List = styled.ul`
  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
  margin-bottom: 20px;
`;
export const Title = styled.h4`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
  margin-bottom: 4px;
`;
export const Text = styled.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  margin-bottom: 24px;
`;
