import styled from '@emotion/styled';
import { TransitionMain } from '../../../../styles/shared';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: ${({ gap }) => gap};
`;

export const Link = styled.a`
  display: block;
  ${TransitionMain('opacity')};

  &:hover,
  &:focus-visible {
    opacity: 0.8;
  }
`;
