import BackgroundLayout from "../../components/BackgroundLayout/BackgroundLayout";

import { SignupForm } from "../../components/SignupForm/SignupForm";

import { SectionTitle } from "../WelcomePage/WelcomePage.styled";
import { SignupWrapper } from "./SignupPage.styled";
import { CustomLink } from "../SigninPage/SignInPage.styled";
import { useSelector } from "react-redux";

export const SignupPage = () => {
  const { userNeedVerification } = useSelector((state) => {
    return {
      userNeedVerification: state.auth.userNeedVerification
    };
  });

  return (
    <BackgroundLayout>
      <SignupWrapper>
        <SectionTitle>Registration</SectionTitle>
        {userNeedVerification && "Please verify"}
        <SignupForm />
        <CustomLink to="/signin">Sign In</CustomLink>
      </SignupWrapper>
    </BackgroundLayout>
  );
};

export default SignupPage;
