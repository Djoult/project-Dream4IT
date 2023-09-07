import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';

export const StyledPreparationWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 335px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 100%;
  }
`;

export const StyledTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;

  color: ${colors.textMainColor};

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const StyledItem = styled.li`
  width: 335px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  list-style: inside;

  color: ${colors.textMainColor};

  &::after {
    content: '';
    display: block;
    margin-top: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  }

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    width: 549px;
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const StyledImg = styled.img`
  margin-top: 42px;
  margin-bottom: 80px;
  width: 335px;
  height: 430px;

  border-radius: 8px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 140px;
    width: 704px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 631px;
  }
`;

export const StyledDeskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
