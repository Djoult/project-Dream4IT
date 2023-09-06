import styled from "@emotion/styled";

export const Wrapper = styled.div`
// position: absolute;
    max-width: 375px;
    display: flex;
    margin-top: 96px;
    flex-direction: column;
    align-items: center;
   
    justify-content: center; 
    @media screen and (min-width: 768px) {
        max-width: 465px;
        margin-top: 228px;
        margin-left: 151px;
      }
    
      @media screen and (min-width: 1440px) {
        margin-top: 133px;
        margin-left: 487px
        
      }

`;
export const Glass = styled.img`

width: 375px;
@media screen and (min-width: 768px) {
    width: 465px;
  }
`;
export const Text = styled.p`
color: #F3F3F3;
text-align: center;
// font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 22px;

width: 236px;
padding-top: 18px;
padding-bottom: 140px;

`