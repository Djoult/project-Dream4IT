import BackgroundLayout from "../../components/BackgroundLayout/BackgroundLayout";
import { SigninForm } from "../../components/SigninForm/SigninForm";

import { SignupWrapper } from "../SignupPage/SignupPage.styled";
import { SectionTitle } from "../WelcomePage/WelcomePage.styled";

import { CustomLink } from "./SignInPage.styled";
import { useSelector } from "react-redux";

export const SigninPage = () => {
  const {error} = useSelector(state => ({
    error: state.auth.error,
  }))

  return (
    <BackgroundLayout>
      <SignupWrapper>
        <SectionTitle>Sign In</SectionTitle>
        {error && error}
        <SigninForm />
        <CustomLink to="/signup">Registration</CustomLink>
      </SignupWrapper>
    </BackgroundLayout>
  );
};

export default SigninPage;
