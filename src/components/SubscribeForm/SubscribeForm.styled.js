import styled from "@emotion/styled";

export const Spacer = styled.div`
  height: 1.5rem;
`
export const Container = styled.div`
  position: relative;
  z-index: 5;
  width: 335px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #F3F3F3;
  @media only screen and (min-width: 768px) {
    width: 309px;
  }

  h2{
    display:none;
  }

  p {
  font-weight: 400;
  font-size: 14px;
  text-align: start;
    line-height: 1.4;
    margin-bottom: 24px;
    @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
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
    font-size: 14px;
    padding: 18px ;
    padding-left: 24px;
    border-radius: 200px;
    border: 1px solid #F3F3F3;
    margin-bottom: 18px;
    background: transparent;
    @media only screen and (min-width: 768px) {
    padding: 15px ;
    font-size: 17px;
  }
    
  }
  ::placeholder{
        color: #f3f3f3;
        font-size: 14px;
        @media only screen and (min-width: 768px) {
       font-size: 17px;
  }
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
  font-size: 14px;
  @media only screen and (min-width: 768px) {
       font-size: 17px;
  }

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
