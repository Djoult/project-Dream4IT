import HeroSection from '../../components/Hero/Hero';
import PopularCategories from '../../components/PopularCategories/PopularCategories';
import EllipsesLayout from '../../components/EllipsesLayout/EllipsesLayout';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { StyledLogoutBtn } from '../../components/LogoutBtn/LogoutBtn';

const Page = styled.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 80px;
`;

export const Container = styled.div`
  max-width: 1240px;
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/drinks');
  };
  return (
    <>
      <HeroSection
        title="Craft Your Perfect Drink with Drink Master"
        description="Unlock your inner mixologist with Drink Master, 
        your one-stop destination for exploring, crafting, 
        and mastering the world's finest beverages. "
      ></HeroSection>
      <Page>
        <EllipsesLayout />
        <Container>
          {' '}
          <PopularCategories categoryDrink="Punch/party drink" />
          <PopularCategories categoryDrink="Cocktail" />
          <PopularCategories categoryDrink="Shake" />
          <PopularCategories categoryDrink="Other/Unknown" />
          <ButtonWrapper>
            <StyledLogoutBtn onClick={handleButtonClick}>
              Other drinks
            </StyledLogoutBtn>
          </ButtonWrapper>
        </Container>
      </Page>
    </>
  );
};

export default MainPage;
