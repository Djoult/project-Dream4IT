import styled from '@emotion/styled';
import { breakpoint as bp } from '../../../../shared';

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;

  @media screen and (min-width: ${bp.tablet}) {
    gap: 23px;
    width: 352px;
  }
  @media screen and (min-width: ${bp.desktop}) {
    width: 393px;
  }
`;
