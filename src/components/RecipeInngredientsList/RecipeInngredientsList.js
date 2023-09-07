import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';

export const StyledWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  width: 335px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 80px;
    width: 704px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 100px;
    width: 100%;
  }
`;

export const StyledInngredients = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  color: rgba(243, 243, 243, 0.5);
`;

export const StyledInngredientsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    gap: 22px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    gap: 35px;
  }
`;

export const StyledImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 157px;
  height: 157px;

  background-color: rgba(22, 32, 55, 0.5);
  border-radius: 6px;

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const StyledImg = styled.img`
  width: 107px;
  height: 107px;

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`;

export const StyledInggrTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  color: ${colors.textMainColor};

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const StyledMeasure = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;

  color: rgba(243, 243, 243, 0.5);

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  width: 157px;

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    margin-top: 14px;
    width: 220px;
  }
`;
