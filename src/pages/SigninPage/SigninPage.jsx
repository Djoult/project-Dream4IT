import { useSelector } from "react-redux";

import BackgroundLayout from "../../components/BackgroundLayout/BackgroundLayout";
import { SigninForm } from "../../components/SigninForm/SigninForm";

import { CustomizedSnackbar } from "../../components/commonComponents/CustomizedSnackbar";
import { selectIsLoading } from "../../redux/selectors";

import { SectionTitle } from "../WelcomePage/WelcomePage.styled";
import { CustomLink, SigninWrapper } from "./SignInPage.styled";

export const SigninPage = () => {
  const { error, isLoading } = useSelector((state) => ({
    error: state.auth.error,
    isLoading: selectIsLoading(state),
  }));
  return (
    <BackgroundLayout>
      <SigninWrapper>
        <SectionTitle>Sign In</SectionTitle>
        <SigninForm isLoading={isLoading} />
        <CustomLink to="/signup">Registration</CustomLink>
      </SigninWrapper>
      {error && <CustomizedSnackbar severity={"error"} message={error} />}
    </BackgroundLayout>
  );
};

export default SigninPage;
