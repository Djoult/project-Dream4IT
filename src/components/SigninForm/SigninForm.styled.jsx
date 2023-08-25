import styled from "@emotion/styled";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.input`
  border-radius: 200px;
  border: 1px solid #f3f3f380;

  padding: 14px 24px;
  align-items: flex-start;

  background-color: transparent;

  outline: none;

  transition: border-color 0.3s;

  &:focus,
  &:hover {
    border-color: #f3f3f3;
    &::placeholder {
      color: #f3f3f3;
    }
  }
`;
