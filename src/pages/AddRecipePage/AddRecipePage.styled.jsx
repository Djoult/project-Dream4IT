import styled from '@emotion/styled';
import { breakpoint as bp } from '../../shared';

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  gap: 80px;
  width: 100%;

  @media screen and (min-width: ${bp.desktop}) {
    /* flex-direction: row; */
    gap: 94px;
  }
`;

export const Additional = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;

  @media screen and (min-width: ${bp.tablet}) {
    gap: 80px;
  }

  @media screen and (min-width: ${bp.desktop}) {
    max-height: 696px;
    width: 310px;
  }
`;
