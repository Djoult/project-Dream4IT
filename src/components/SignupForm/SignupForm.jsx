import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import {
  FormWrapper,
  SignBtn,
  StyledInputWrapper,
  Icon,
  Notify,
} from "./SignupForm.styled";
import { TextInput } from "../SigninForm/SigninForm.styled";

import { done, eye, eyeOff, error } from "../../images/index";

const handleFormSubmit = async (values, { resetForm }) => {
  console.log("Submit SignIn", values);
  resetForm();
};

export const SignupForm = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Функция для обработки изменения поля email
  const handleChangeEmail = (e) => {
    formik.handleChange(e);
    setIsEmailValid(!formik.errors.email);
  };

  // Функция для обработки изменения поля password
  const handleChangePassword = (e) => {
    formik.handleChange(e);
    setIsPasswordValid(!formik.errors.password);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      email: Yup.string().email("This is an ERROR email"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(16, "Password must be at most 16 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
          "The password must contain an uppercase letter, a lowercase letter, and one number"
        ),
    }),
    onSubmit: handleFormSubmit,
  });

  return (
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
        type="text"
        name="username"
        placeholder="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <StyledInputWrapper>
        <TextInput
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          correct={formik.touched.email && !formik.errors.email && isEmailValid}
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
        <Notify>{formik.errors.email}</Notify>
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
        <Notify>{formik.errors.password}</Notify>
      )}

      <SignBtn type="submit">Sign Up</SignBtn>
    </FormWrapper>
  );
};

export default SignupForm;
