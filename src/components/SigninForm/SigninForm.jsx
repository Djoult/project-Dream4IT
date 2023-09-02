import { useState } from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { useFormik } from "formik";
import { getSignupValidationSchema } from "../SignupForm/validationSchemas";

import {
  FormWrapper,
  SignBtn,
  TextInput,
  StyledInputWrapper,
  Icon,
  NotifyPassSignin,
  NotifyEmailSignin,
} from "../SignupForm/SignupForm.styled";

import { done, eye, eyeOff, error } from "../../images/index";
import { singInThunk } from "../../redux/thunks";
import CircularProgress from "@mui/material/CircularProgress";

export const SigninForm = ({ isLoading }) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeEmail = (e) => {
    formik.handleChange(e);
    setIsEmailValid(!formik.errors.email);
  };
  const dispatch = useDispatch();

  const handleChangePassword = (e) => {
    formik.handleChange(e);
    setIsPasswordValid(!formik.errors.password);
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    setIsEmailValid(false);
    setIsPasswordValid(false);
    dispatch(singInThunk(values));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: getSignupValidationSchema(),
    onSubmit: handleSubmit,
  });

  return (
    <>
      <FormWrapper
        className={
          formik.touched.email && !formik.errors.email && isEmailValid
            ? "correct"
            : formik.touched.email && formik.errors.email
            ? "error"
            : ""
        }
        style={{ zIndex: 100 }}
        onSubmit={formik.handleSubmit}>
        <StyledInputWrapper>
          <TextInput
            disabled={isLoading}
            style={{ marginBottom: "14px" }}
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            correct={
              formik.touched.email && !formik.errors.email && isEmailValid
            }
            onChange={handleChangeEmail}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && (
            <>
              {isEmailValid ? (
                <Icon src={done} alt="Done" />
              ) : (
                <Icon src={error} alt="error" />
              )}
            </>
          )}
        </StyledInputWrapper>
        {formik.touched.email && formik.errors.email && (
          <NotifyEmailSignin>{formik.errors.email}</NotifyEmailSignin>
        )}

        <StyledInputWrapper>
          <TextInput
            disabled={isLoading}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            correct={
              formik.touched.password &&
              !formik.errors.password &&
              isPasswordValid
            }
            onChange={handleChangePassword}
            onBlur={formik.handleBlur}
          />
          <Icon
            src={showPassword ? eyeOff : eye}
            alt={showPassword ? "Hide" : "Show"}
            onClick={() => setShowPassword(!showPassword)}
          />
        </StyledInputWrapper>

        {formik.touched.password && formik.errors.password && (
          <NotifyPassSignin>{formik.errors.password}</NotifyPassSignin>
        )}
      </FormWrapper>
      <SignBtn
        type="submit"
        disabled={!isEmailValid || !isPasswordValid || isLoading}
        onClick={() => handleSubmit(formik.values, formik)}>
        Sign In {isLoading && <CircularProgress size={20} />}
      </SignBtn>
    </>
  );
};

SigninForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
