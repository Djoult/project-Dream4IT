import {
  Section,
  Container,
  NavWrapper,
  LogoWrapper,
  NavList,
  TextWrapper,
  PrivacyWrapper,
  Text,
  StyledNav,
  TermsLink,
} from './Footer.styled';
import Logo from '../Logo/Logo';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import Socials from '../Socials/Socials';

const Footer = () => {
  return (
    <Section>
      <Container>
        <NavWrapper>
          <LogoWrapper>
            <Logo />
            <Socials />
          </LogoWrapper>
          <NavList>
            <li>
              <StyledNav to="/drinks/:categoryName">Drinks</StyledNav>
            </li>
            <li>
              <StyledNav to="/add">Add recipes</StyledNav>
            </li>
            <li>
              <StyledNav to="/my">My recipes</StyledNav>
            </li>
            <li>
              <StyledNav to="/favorite">Favorites</StyledNav>
            </li>
          </NavList>
        </NavWrapper>
        <SubscribeForm />
      </Container>
      <TextWrapper>
        <Text>©2023 Drink Master. All rights reserved.</Text>
        <PrivacyWrapper>
          <Text>
            <TermsLink to="/privacy">Privacy Policy</TermsLink>
          </Text>
          <Text>
            <TermsLink to="/terms">Terms of Service</TermsLink>
          </Text>
        </PrivacyWrapper>
      </TextWrapper>
    </Section>
  );
};

export default Footer;
