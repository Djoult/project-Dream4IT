import BackgroundLayout from "../../components/BackgroundLayout/BackgroundLayout";
import { SigninForm } from "../../components/SigninForm/SigninForm";

import { SignupWrapper } from "../SignupPage/SignupPage.styled";
import { SectionTitle } from "../WelcomePage/WelcomePage.styled";

import { CustomLink } from "./SignInPage.styled";
import { useSelector } from "react-redux";
import { CustomizedSnackbar } from "../../components/commonComponents/CustomizedSnackbar";
import {
  selectIsLoading
} from "../../redux/selectors";

export const SigninPage = () => {
  const { error, isLoading} = useSelector((state) => ({
    error: state.auth.error,
    isLoading: selectIsLoading(state),
  }));

  return (
    <BackgroundLayout>
      <SignupWrapper>
        <SectionTitle>Sign In</SectionTitle>
        {error && <CustomizedSnackbar severity={"error"} message={error} />}
        <SigninForm isLoading={isLoading} />
        <CustomLink to="/signup">Registration</CustomLink>
      </SignupWrapper>
    </BackgroundLayout>
  );
};

export default SigninPage;
