import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export const CustomLink = styled(Link)`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-decoration-line: underline;

  margin-top: 14px;

  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    transform: scale(1.12);
  }
`;

export const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  z-index: 1100;

  min-width: 335px;
  max-width: 400px;

  padding: 240px 20px 278px 20px;

  @media (min-width: 568px) {
    padding: 366px 304px 334px 64px;
    width: 400px;
  }

  @media (min-width: 768px) {
    padding: 240px 940px 208px 100px;
    width: 400px;
  }
`;
