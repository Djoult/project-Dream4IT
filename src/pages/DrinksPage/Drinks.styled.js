import styled from "@emotion/styled";

export const InputWrapper = styled.div`
    display: flex;
    max-width: 335px;
`

export const Page = styled.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1200px) {
    padding: 158px 0 62px 110px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    margin-left: 0;
      /* margin-top: 40px; */
  }
`;

export const InputElem = styled.input`
max-width: 335px;
  ${'' /* width: 100%; */}
  padding: 18px 24px;
  /* padding-left: 24px; */
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  background: transparent;
  color: #f3f3f3;
  outline: none;
  @media only screen and (min-width: 768px) {
    width: 265px;
    padding: 15px;
    font-size: 17px;
  }
  
 :focus{
      border: 1px solid rgba(243, 243, 243, .5);
    }
  ::placeholder{
        color: #f3f3f3;
        font-size: 14px;
        padding: 18px ;
        @media only screen and (min-width: 768px){
    padding: 15px ;
    font-size: 17px;
  }
    }
`;

export const Select = styled.select`
  max-width: 335px;
  padding: 18px;
  /* padding-left: 24px; */
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  background: #161f37;
  color: #f3f3f3;
  outline: none;

  @media only screen and (min-width: 768px) {
    width: 200px;
    padding: 15px;
    font-size: 17px;
  }
`;

