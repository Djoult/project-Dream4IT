import BackgroundLayout from "../../components/BackgroundLayout/BackgroundLayout";

import { SignupForm } from "../../components/SignupForm/SignupForm";

import { SectionTitle } from "../WelcomePage/WelcomePage.styled";
import { SignupWrapper } from "./SignupPage.styled";
import { CustomLink } from "../SigninPage/SignInPage.styled";
import { useSelector } from "react-redux";
import {
  selectUserNeedVerification,
  selectIsLoading,
} from "../../redux/selectors";
import { Modal } from "../../components/Modals/Modal";
import { CustomizedSnackbar } from "../../components/commonComponents/CustomizedSnackbar";

export const SignupPage = () => {
  const { userNeedVerification, isLoading, user, error } = useSelector((state) => {
    return {
      userNeedVerification: selectUserNeedVerification(state),
      isLoading: selectIsLoading(state),
      user: state.auth.user,
      error: state.auth.error
    };
  });

  return (
    <BackgroundLayout>
      <SignupWrapper>
        <SectionTitle>Registration</SectionTitle>
        <SignupForm isLoading={isLoading} />
        <CustomLink to="/signin">Sign In</CustomLink>
      </SignupWrapper>
      {userNeedVerification && (
        <Modal message={`Please verify your account on ${user.email}`} />
      )}
      {error && <CustomizedSnackbar severity={"error"} message={error} />}
    </BackgroundLayout>
  );
};

export default SignupPage;
