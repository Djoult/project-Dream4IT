import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';
import {
  Ellipse222,
  Ellipse223,
  Ellipse224,
} from '../EllipsesLayout/EllipsesLayout.styled';

export const StyledMenuIcon = styled.img`
  margin-left: 14px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${colors.hoverColor};
  }

  /* tablet screen */
  @media screen and (min-width: 768px) {
    margin-left: 24px;
    width: 38px;
    height: 38px;
  }
`;

export const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 72px;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 999;
  overflow: hidden;

  background-color: ${colors.mainBgColor};
`;

export const LeftEllipse = styled(Ellipse222)`
  top: 0;
  right: 254px;
  width: 520px;
  height: 550px;

  background-color: rgba(64, 112, 205, 0.5);
  border-radius: 520px;

  /* tablet screen */
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CentrEllipse = styled(Ellipse223)`
  top: 12px;
  right: 76px;
  width: 257px;
  height: 247px;

  border-radius: 257px;

  /* tablet screen */
  @media screen and (min-width: 768px) {
    top: 32px;
    left: -150px;
    width: 387px;
    height: 372px;

    border-radius: 387px;
  }
`;

export const BottomEllipse = styled(Ellipse224)`
  bottom: 0;
  left: 331px;
  width: 549px;
  height: 543px;

  border-radius: 549px;

  /* tablet screen */
  @media screen and (min-width: 768px) {
    top: 498px;
    left: 651px;
  }
`;
