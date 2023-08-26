import BackgroundLayout from "../../components/BackgroundLayout/BackgroundLayout";

import { SignupForm } from "../../components/SignupForm/SignupForm";

import { SectionTitle } from "../WelcomePage/WelcomePage.styled";
import { SignupWrapper } from "./SignupPage.styled";
import { CustomLink } from "../SigninPage/SignInPage.styled";

export const SignupPage = () => {
  return (
    <BackgroundLayout>
      <SignupWrapper>
        <SectionTitle>Registration</SectionTitle>
        <SignupForm />
        <CustomLink to="/signin">Sign In</CustomLink>
      </SignupWrapper>
    </BackgroundLayout>
  );
};

export default SignupPage;
