import styled from "@emotion/styled";

export const Spacer = styled.div`
  height: 1.5rem;
`
export const Container = styled.div`
  position: relative;
  z-index: 5;
  max-width: 309px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #F3F3F3;

  h2{
    display:none;
  }

  p {
  font-weight: 400;
  font-size: 18px;
  text-align: start;
    line-height: 1.4;
    margin-bottom: 24px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 15px ;
    padding-left: 24px;
    border-radius: 200px;
    border: 1px solid #F3F3F3;
    margin-bottom: 18px;
    background: transparent;
    
  }
  ::placeholder{
        color: #f3f3f3;
    }
`;

export const Submit = styled.button`
  margin: 0;
  border: 1px solid #F3F3F3;
  width: 100%;
  color: #f3f3f3;
  border-radius: 200px;
  font-weight: 600;
  padding: 14px 114px;
  cursor: pointer;
  transition: 0.5s;
  background: transparent;

  &:hover {
    background-position: right center;
    background: #434D67;
  }
`;

export const TryAgain = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  box-shadow: 0 1px 0 0 currentColor;
  color: inherit;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
