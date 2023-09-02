import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Img = styled.img`
  width: 335px;
  height: auto;

  @media screen and (min-width: 768px) {
    max-width: 342px;
    
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    ${'' /* height: 400px; */}
  }
`;
export const Ingredients = styled.p`
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const Title = styled.h2`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  margin-bottom: 4px;
`;
export const ListInfo = styled.ul`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  width: 335px;
`;