import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const StyledLogoDescr = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.13;
  white-space: nowrap;

  color: #f3f3f3;

  /* tablet screen */
  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.22;
  }
`;

export const StyledLogoSVG = styled.img`
  margin-right: 8px;
  width: 22px;
  height: 22px;

  /* tablet screen */
  @media screen and (min-width: 768px) {
    margin-right: 14px;
    width: 28px;
    height: 28px;
  }
`;
