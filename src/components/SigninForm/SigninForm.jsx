// SigninForm.js
import { useState } from "react";
import { FormWrapper, SignBtn } from "../SignupForm/SignupForm.styled";
import { TextInput } from "./SigninForm.styled";

export const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit Login");
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
