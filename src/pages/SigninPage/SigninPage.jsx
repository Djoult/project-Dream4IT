import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import BackgroundLayout from '../../components/BackgroundLayout/BackgroundLayout';
import { SigninForm } from '../../components/SigninForm/SigninForm';

import { CustomizedSnackbar } from '../../components/commonComponents/CustomizedSnackbar';
import { selectIsLoading } from '../../redux/selectors';

import { SectionTitle } from '../WelcomePage/WelcomePage.styled';
import { CustomLink, SigninWrapper } from './SignInPage.styled';
import { SET_TOKEN } from '../../redux/authSlice';

export const SigninPage = () => {
  const { error, isLoading } = useSelector(state => ({
    error: state.auth.error,
    isLoading: selectIsLoading(state),
  }));
  const { search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get('token');

    if (token) {
      dispatch({ type: SET_TOKEN, payload: { token } });
    }
  }, []);

  return (
    <BackgroundLayout>
      <SigninWrapper>
        <SectionTitle>Sign In</SectionTitle>
        <SigninForm isLoading={isLoading} />
        <CustomLink to="/signup">Registration</CustomLink>
      </SigninWrapper>
      {error && <CustomizedSnackbar severity={'error'} message={error} />}
    </BackgroundLayout>
  );
};

export default SigninPage;
