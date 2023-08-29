import * as Yup from "yup";

export const getSignupValidationSchema = () => {
  return Yup.object({
    username: Yup.string(),
    email: Yup.string().email("This is an ERROR email"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password: uppercase, lowercase, and at least one number"
      ),
  });
};
