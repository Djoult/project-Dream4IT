import styled from "@emotion/styled";

export const FormWrapper = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;

  margin-top: 28px;
`;

export const TextInput = styled.input`
  height: 54px;

  border-radius: 200px;
  border: 1px solid
    ${({ error, correct }) =>
      error ? "red" : correct ? "green" : "rgba(243, 243, 243, 0.2)"};

  color: #f3f3f3;
  background-color: transparent;
  outline: none;
  padding-left: 24px;

  transition: border-color 0.3s;

  &::placeholder {
    color: rgba(243, 243, 243, 0.2);
  }

  &:focus,
  &:hover {
    border-color: rgba(
      243,
      243,
      243,
      0.5
    ); /* Устанавливаем цвет бордера в активном состоянии */
    &::placeholder {
      color: rgba(243, 243, 243, 0.5);
    }
  }
`;

export const SignBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

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
  & > span {
    margin-left: 5px;
  }
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
  display: grid;
  position: relative;
`;

export const Icon = styled.img`
  position: absolute;

  top: 15px;
  right: 19px;
`;

export const NotifyEmail = styled.div`
  font-size: 12px;
  line-height: 14px;

  position: absolute;

  top: 88px;
  right: 58px;

  color: #da1414;
`;

export const NotifyPassword = styled.div`
  font-size: 12px;
  line-height: 14px;

  position: absolute;

  top: 196px;
  right: 55px;

  color: #da1414;
`;

export const NotifyEmailSignin = styled.div`
  font-size: 12px;
  line-height: 14px;

  position: absolute;

  top: 20px;
  right: 58px;

  color: #da1414;
`;

export const NotifyPassSignin = styled.div`
  font-size: 12px;
  line-height: 14px;

  position: absolute;

  top: 128px;
  right: 56px;

  color: #da1414;
`;
