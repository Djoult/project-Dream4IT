import styled from "@emotion/styled";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  margin-bottom: 14px;
  gap: 14px;
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
