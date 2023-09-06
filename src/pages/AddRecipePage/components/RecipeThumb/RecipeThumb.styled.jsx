import styled from '@emotion/styled';
import { breakpoint as bp } from '../../../../shared';
import { colors } from '../../../../styles/GlobalStyles';
import { TransitionMain } from '../../../../styles/shared';

export const Thumb = styled.div`
  position: relative;
  width: 100%;
  height: 320px;

  @media screen and (min-width: ${bp.tablet}) {
    width: 320px;
  }
  @media screen and (min-width: ${bp.desktop}) {
    width: 400px;
    height: 400px;
  }

  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AddImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;

  width: 79px;
  height: 88px;
  transform: translate(-50%, -50%);

  ${TransitionMain('opacity')};

  opacity: ${({ file }) => (file ? 0.5 : 1)};
  &:hover,
  &:focus-visible {
    opacity: 1;
  }
`;

export const Browse = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 6px;
  background-color: ${colors.textMainColor};
  cursor: pointer;

  & input[type='file'] {
    display: none;
  }
`;

export const Caption = styled.span`
  color: ${colors.textMainColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  /* text-shadow: 1px 1px 1px black; */
`;
