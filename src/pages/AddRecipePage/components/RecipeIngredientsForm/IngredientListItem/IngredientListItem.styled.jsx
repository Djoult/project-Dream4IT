import styled from '@emotion/styled';
import { breakpoint as bp } from '../../../../../shared';
import { colors } from '../../../../../styles/GlobalStyles';
import { ButtonBase } from '../../../../../styles/shared';
import { Input } from '../../RecipeDetailsForm/TextField/TextField.styled';

const colorGray = 'rgba(243, 243, 243, 0.5)';

export const Row = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 260px;
  width: 100%;
  /* height: 50px;
  @media screen and (min-width: ${bp.tablet}) {
    height: 56px;
  } */
`;

export const Fields = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;

  font-size: 14px;
  letter-spacing: -0.28px;

  @media screen and (min-width: ${bp.tablet}) {
    gap: 14px;
    width: 490px;
  }
`;

// пришлось указать для обоих ширины

export const Ingredient = styled.div`
  /* width: 200px; */
  width: 66%;
  /* @media screen and (min-width: ${bp.tablet}) {
    width: 325px; // t332 d316
  } */
`;

export const Measure = styled.div`
  /* width: 100px; */
  width: 33%;
  /* @media screen and (min-width: ${bp.tablet}) {
    width: 150px;
  } */
`;

export const RemoveButton = styled(ButtonBase)`
  color: ${colorGray};
  background-color: transparent;
  transition-property: color;

  &:focus-visible,
  &:hover {
    color: ${colors.textMainColor};
  }
`;

export const InputStyled = styled(Input)`
  border: 1px solid ${colorGray};
  border-radius: 200px;
  padding-left: 18px;
`;
