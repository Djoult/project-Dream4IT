import { colors } from '../../styles/GlobalStyles';
import { breakpoint as bp } from '../../shared';
import styled from '@emotion/styled';

export const Title = styled.h1`
  font-family: var(--main-font-family);
  font-size: 32px;
  font-weight: 600;
  line-height: 0.9;
  color: ${colors.textMainColor};

  @media screen and (min-width: ${bp.tablet}) {
    margin-bottom: 60px;
    font-size: 56px;
  }
  @media screen and (min-width: ${bp.desktop}) {
    font-size: 64px;
  }
`;
