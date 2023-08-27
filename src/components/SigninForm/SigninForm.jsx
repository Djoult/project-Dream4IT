// SigninForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormWrapper, SignBtn } from "../SignupForm/SignupForm.styled";
import { TextInput } from "./SigninForm.styled";
import { singInThunk } from "../../redux/thunks";
import CircularProgress from "@mui/material/CircularProgress";

export const SigninForm = ({ isLoading }) => {
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
        Sign In {isLoading && <CircularProgress size={20} />}
      </SignBtn>
    </FormWrapper>
  );
};
