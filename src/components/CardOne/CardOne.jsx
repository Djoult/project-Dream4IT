import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Wrapper = styled.div``;

const Img = styled.img`
  width: 335px;
  height: 360px;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1240px) {
    width: 400px;
    height: 400px;
  }
`;
const Ingredients = styled.p`
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
const Title = styled.h2`
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
const ListInfo = styled.ul`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

const CardOne = ({ _id, drink, drinkThumb }) => {
  return (
    <Wrapper>
      <Link to={`/recipe/${_id}`}>
        <Img src={drinkThumb} />
      </Link>
      <ListInfo>
        <Title>{drink}</Title>
        <Ingredients>Ingredients</Ingredients>
      </ListInfo>
    </Wrapper>
  );
};

export default CardOne;
