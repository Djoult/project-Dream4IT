import { useState } from "react";

import { FormWrapper, SignBtn } from "./SignupForm.styled";
import { TextInput } from "../SigninForm/SigninForm.styled";

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit SignIn");
  };

  return (
    <FormWrapper style={{ zIndex: 100 }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
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
      <SignBtn type="submit">Sign Up</SignBtn>
    </FormWrapper>
  );
};
