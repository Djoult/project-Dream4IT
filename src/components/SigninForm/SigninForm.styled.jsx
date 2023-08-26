import styled from "@emotion/styled";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  border-radius: 200px;
  border: 1px solid #f3f3f380;
  color: #f3f3f3;
  padding: 14px 24px;

  background-color: transparent;

  outline: none;

  transition: border-color 0.3s;

  border-color: ${({ error, correct }) =>
    error ? "red" : correct ? "green" : "initial"};

  &:focus,
  &:hover {
    &::placeholder {
      color: #f3f3f3;
    }
  }
`;
