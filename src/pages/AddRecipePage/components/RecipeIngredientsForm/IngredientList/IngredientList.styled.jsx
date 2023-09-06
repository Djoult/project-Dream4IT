import styled from '@emotion/styled';
import { breakpoint as bp } from '../../../../../shared';
import { colors } from '../../../../../styles/GlobalStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin-top: 80px;

  @media screen and (min-width: ${bp.tablet}) {
    gap: 40px;
    width: 704px;
  }
  @media screen and (min-width: ${bp.desktop}) {
    width: 540px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;

  @media screen and (min-width: ${bp.tablet}) {
    gap: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
