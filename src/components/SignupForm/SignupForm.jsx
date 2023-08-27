import { useState } from "react";
import { useDispatch } from "react-redux";

import { FormWrapper, SignBtn } from "./SignupForm.styled";
import { TextInput } from "../SigninForm/SigninForm.styled";
import { signUpThunk } from "../../redux/thunks";
import CircularProgress from "@mui/material/CircularProgress";

export const SignupForm = ({ isLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
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
    dispatch(signUpThunk(formData));
  };

  return (
    <FormWrapper style={{ zIndex: 100 }} onSubmit={handleSubmit}>
      <TextInput
        disabled={isLoading}
        type="text"
        name="name"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <TextInput
        disabled={isLoading}
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <TextInput
        disabled={isLoading}
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <SignBtn disabled={isLoading} type="submit">
        Sign Up {isLoading && <CircularProgress size={20} />}
      </SignBtn>
    </FormWrapper>
  );
};
