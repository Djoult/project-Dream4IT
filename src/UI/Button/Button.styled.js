import styled from "@emotion/styled";
export const ButtonActive = styled.button`
margin: 0;
width: 100%;
  font-weight: 600;
  font-size: 17px;
   line-height: 1.1;
  color: #161F37;
  background-color: #F3F3F3;
  border-radius: 200px;
  padding: 18px;
  cursor: pointer;
  transition: 0.5s;
  @media only screen and (min-width: 768px) {
       padding: 15px;
  }

  &:hover {
    background: #434D67;
    color: #F3F3F3;
  }
`;

export const ButtonPassive = styled.button`
   margin: 0;
  border: 1px solid rgba(243, 243, 243, .5);
  width: 100%;
  color: #f3f3f3;
  border-radius: 200px;
  font-weight: 600;
  font-size: 17px;
  line-height: 1.1;
  padding: 18px;
  cursor: pointer;
  transition: 0.5s;
  background: transparent;
@media only screen and (min-width: 768px) {
       padding: 15px;
  }

  &:hover {
    background: #434D67;
  }
`;

export const ButtonHover = styled.button`
 margin: 0;
  border: 1px solid rgba(243, 243, 243, .5);
  width: 100%;
  font-weight: 600;
  font-size: 17px;
  color: #F3F3F3;
  background-color:  #434D67;
  border-radius: 200px;
  padding: 18px;
  cursor: pointer;
  transition: 0.5s;
  @media only screen and (min-width: 768px) {
       padding: 15px;
  }

  &:hover {
    background: #161F37;
  }
`;

export const ButtonDisabled = styled.button`
  margin: 0;
  border: 1px solid rgba(243, 243, 243, .5);
  width: 100%;
  font-weight: 600;
  font-size: 17px;
 color: rgba(243, 243, 243, 0.2);
  background-color:  #434D67;
  border-radius: 200px;
  padding: 18px;
  cursor: pointer;
`;