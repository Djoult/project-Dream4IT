import BackgroundLayout from "../../components/BackgroundLayout/BackgroundLayout";
import { SigninForm } from "../../components/SigninForm/SigninForm";

import { SignupWrapper } from "../SignupPage/SignupPage.styled";
import { SectionTitle } from "../WelcomePage/WelcomePage.styled";

import { CustomLink } from "./SignInPage.styled";

export const SigninPage = () => {
  return (
    <BackgroundLayout>
      <SignupWrapper>
        <SectionTitle>Sign In</SectionTitle>
        <SigninForm />
        <CustomLink to="/signup">Registration</CustomLink>
      </SignupWrapper>
    </BackgroundLayout>
  );
};

export default SigninPage;
