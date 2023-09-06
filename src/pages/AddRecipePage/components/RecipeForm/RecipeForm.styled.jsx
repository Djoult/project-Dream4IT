import styled from '@emotion/styled';
import { breakpoint as bp } from '../../../../shared';
import { ButtonPrimary } from '../../../../styles/shared';

export const Form = styled.form`
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 833px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (min-width: ${bp.tablet}) {
    gap: 32px;
  }
`;

export const ButtonAdd = styled(ButtonPrimary)`
  margin-top: 20px;
`;
