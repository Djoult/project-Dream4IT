import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';
import { TransitionMain } from '../../styles/shared';

export const StyledWrapper = styled.div`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    width: 100%;
    display: flex;
  }
`;

export const StyledGlass = styled.p`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;

  color: rgba(243, 243, 243, 0.5);

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const StyledAbout = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 355px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;

  color: ${colors.textMainColor};

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    margin-top: 28px;
    width: 593px;
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const StyledFavoriteBtn = styled.button`
  margin-bottom: 80px;
  padding: 14px 40px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  cursor: pointer;

  color: ${colors.buttonLightBgTextColor};
  background-color: ${colors.textMainColor};
  border: none;
  border-radius: 223px;
  transition: ${TransitionMain('color', 'background-color')};

  &:hover,
  &:focus {
    color: ${colors.textMainColor};
    background-color: #434d67;
  }

  /* Tablet/Desktop screen */
  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const StyledRecipeHeroImg = styled.img`
  width: 335px;
  height: 400px;

  border-radius: 6px;

  /* Tablet screen */
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    margin-left: auto;
    width: 400px;
    height: 400px;
  }
`;
