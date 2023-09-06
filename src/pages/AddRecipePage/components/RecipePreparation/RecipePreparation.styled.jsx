import styled from '@emotion/styled';
import { breakpoint as bp } from '../../../../shared';
import { colors } from '../../../../styles/GlobalStyles';

const colorGray = 'rgba(243, 243, 243, 0.5)';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin-top: 80px;

  @media screen and (min-width: ${bp.tablet}) {
    width: 490px;
  }
`;

export const Description = styled.textarea`
  min-height: 185px;
  max-width: 150%;
  min-width: 150px;
  padding: 16px;

  font-size: 14px;
  line-height: 1.3;

  background-color: transparent;
  color: ${colors.textMainColor};

  border-radius: 14px;
  border: 1px solid ${colorGray};
  /* resize: vertical; */

  @media screen and (min-width: ${bp.tablet}) {
    font-size: 17px;
    line-height: 1.6;
    border-radius: 20px;
  }

  &::placeholder {
    font-size: inherit;
    color: ${colorGray};
  }
`;
