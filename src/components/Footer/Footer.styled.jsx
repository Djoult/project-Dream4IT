import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colors } from '../../styles/GlobalStyles';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${colors.mainBgColor};
  border-top: 1px solid rgba(243, 243, 243, 0.2);

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1180px) {
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const Container = styled.div`

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media (min-width: 768px) {
    row-gap: 28px;
  }

  @media (min-width: 1440px) {
    row-gap: 40px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: column;
    row-gap: 40px;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 320px;
  }
`;

export const NavList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Text = styled.p`
  display: inline-flex;
  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
`;
export const PrivacyWrapper = styled.div`
  display: flex;
  gap: 14px;
`;
export const StyledNav = styled(NavLink)`
  text-decoration: none;
  color: ${colors.textMainColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
`;
export const TermsLink = styled(NavLink)`
  text-decoration: none;
  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
`;
