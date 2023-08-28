import styled from "@emotion/styled";

export const FormWrapper = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 28px;
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

export const SignBtn = styled.button`
  color: #161f37;
  font-family: Manrope;
  font-size: 16px;

  font-weight: 600;
  line-height: 18px;

  border-radius: 42px;
  background: #f3f3f3;
  border: 2px solid rgba(64, 111, 205, 0);

  cursor: pointer;

  padding: 18px 44px;
  margin-top: 40px;

  transition: color 0.3s, background-color 0.3s,
    transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    transform: scale(1.02);
    border: 2px solid rgba(64, 112, 205, 0.5);
    background: #161f37;
    color: #f3f3f3;
  }
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
  display: grid;
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;
  top: 11px;
  right: 19px;
`;

export const NotifyEmail = styled.div`
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  top: 75px;
  right: 58px;
  color: #da1414;
`;

export const NotifyPassword = styled.div`
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  top: 169px;
  right: 9px;
  color: #da1414;
`;

export const NotifyEmailSignin = styled.div`
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  top: 16px;
  right: 58px;
  color: #da1414;
`;

export const NotifyPassSignin = styled.div`
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  top: 110px;
  right: 56px;
  color: #da1414;
`;
