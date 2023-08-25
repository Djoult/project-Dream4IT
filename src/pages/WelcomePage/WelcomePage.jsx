import {
  TextWrapper,
  WelcomeDescription,
  ButtonWrapper,
  SectionTitle,
} from "./WelcomePage.styled";

import AuthNav from "../../components/AuthNav/AuthNav";
import BackgroundLayout from "../../components/BackgroundLayout/BackgroundLayout";

const WelcomePage = () => {
  return (
    <BackgroundLayout>
      <TextWrapper>
        <SectionTitle>Welcome to the app!</SectionTitle>
        <WelcomeDescription>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </WelcomeDescription>
        <ButtonWrapper>
          <AuthNav />
        </ButtonWrapper>
      </TextWrapper>
    </BackgroundLayout>
  );
};

export default WelcomePage;
