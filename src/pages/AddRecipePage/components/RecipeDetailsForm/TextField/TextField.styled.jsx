import styled from '@emotion/styled';
import { breakpoint as bp } from '../../../../../shared';
import { colors } from '../../../../../styles/GlobalStyles';

import {
  ButtonBase,
  TransitionMain,
  Disabled,
} from '../../../../../styles/shared';

const colorGray = 'rgba(243, 243, 243, 0.5)';

export const Field = styled.label`
  width: 100%;
  height: 48px;

  @media screen and (min-width: ${bp.tablet}) {
    height: 58px;
  }

  &[disabled],
  &[disabled='true'] {
    ${Disabled}
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;

  padding: 0;
  padding-right: 35px;

  font-family: inherit;
  font-size: 14px;
  letter-spacing: -0.28px;

  @media screen and (min-width: ${bp.tablet}) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  color: ${colors.textMainColor};
  background-color: transparent;

  border: none;
  outline: unset;
  border-bottom: 1px solid ${colors.grayColor};

  ${TransitionMain('border-color')};

  &::placeholder {
    font-size: inherit;
    letter-spacing: inherit;
    color: ${colorGray};
    text-transform: capitalize;
  }

  &:focus-visible,
  &:hover {
    border-color: ${colors.textMainColor};
  }
`;

export const ClearBtn = styled(ButtonBase)`
  position: absolute;
  top: 50%;
  right: 2px;

  height: 70%;
  padding: 0;

  color: gray;
  background-color: transparent;
  transform: translateY(-50%);
  transition-property: color;

  &:focus-visible,
  &:hover {
    color: ${colors.textMainColor};
  }
`;
