import styled from '@emotion/styled';
import { breakpoint as bp } from '../../../../../shared';
import { colors } from '../../../../../styles/GlobalStyles';

const colorGray = 'rgba(243, 243, 243, 0.5)';

export const CounterWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 104px;
  height: 38px;
  padding-left: 14px;
  padding-right: 14px;

  font-size: 14px;
  line-height: 0;
  color: ${colors.textMainColor};

  @media screen and (min-width: ${bp.tablet}) {
    width: 114px;
    height: 44px;
    font-size: 17px;
  }

  border-radius: 200px;
  border: 1px solid ${colorGray};

  /* кнопки */
  & span[data-control] {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30%;
    height: 100%;
    font-size: 24px;

    cursor: pointer;
    user-select: none;
  }
`;
