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

  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    transform: scale(1.12);
  }
`;
