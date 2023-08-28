import { useState } from "react";

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

export const SignupForm = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeEmail = (e) => {
    formik.handleChange(e);
    setIsEmailValid(!formik.errors.email);
  };

  const handleChangePassword = (e) => {
    formik.handleChange(e);
    setIsPasswordValid(!formik.errors.password);
  };

  const handleFormSubmit = async (values, { resetForm }) => {
    console.log("Submit SignIn", values);
    setIsEmailValid(false);
    setIsPasswordValid(false);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
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
          style={{ marginBottom: "14px" }}
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <StyledInputWrapper>
          <TextInput
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
        disabled={!isEmailValid || !isPasswordValid}
        onClick={() => handleFormSubmit(formik.values, formik)}>
        Sign Up
      </SignBtn>
    </>
  );
};

export default SignupForm;
