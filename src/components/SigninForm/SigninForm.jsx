// SigninForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormWrapper, SignBtn } from "../SignupForm/SignupForm.styled";
import { TextInput } from "./SigninForm.styled";
import { singInThunk } from "../../redux/thunks";

export const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(singInThunk(formData));
  };

  return (
    <FormWrapper style={{ zIndex: 100 }} onSubmit={handleSubmit}>
      <TextInput
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <TextInput
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <SignBtn type="submit">Sign In</SignBtn>
    </FormWrapper>
  );
};
