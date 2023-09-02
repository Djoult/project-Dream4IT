import { useState } from "react";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { useFormik } from "formik";
import { getSignupValidationSchema } from "./validationSchemas";

import {
  FormWrapper,
  TextInput,
  SignBtn,
  StyledInputWrapper,
  Icon,
  NotifyPassword,
  NotifyEmail,
} from "./SignupForm.styled";

import { done, eye, eyeOff, error } from "../../images/index";
import { signUpThunk } from "../../redux/thunks";
import CircularProgress from "@mui/material/CircularProgress";

export const SignupForm = ({ isLoading }) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    formik.handleChange(e);
    setIsEmailValid(!formik.errors.email);
  };

  const handleChangePassword = (e) => {
    formik.handleChange(e);
    setIsPasswordValid(!formik.errors.password);
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    console.log("handleFormSubmit");
    setIsEmailValid(false);
    setIsPasswordValid(false);
    resetForm();
    dispatch(signUpThunk(values));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: getSignupValidationSchema(),
    onSubmit: handleFormSubmit,
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
        <TextInput
          disabled={isLoading}
          style={{ marginBottom: "14px" }}
          type="text"
          name="name"
          placeholder="Username"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

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
          <NotifyEmail>{formik.errors.email}</NotifyEmail>
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
          <NotifyPassword>{formik.errors.password}</NotifyPassword>
        )}
      </FormWrapper>
      <SignBtn
        type="submit"
        disabled={!isEmailValid || !isPasswordValid || isLoading}
        onClick={() => handleFormSubmit(formik.values, formik)}>
        Sign Up {isLoading && <CircularProgress size={20} />}
      </SignBtn>
    </>
  );
};

SignupForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
