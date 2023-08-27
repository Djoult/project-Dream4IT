import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  flex-basis: 335px;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
    flex-basis: 342px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 40px) / 3);
    flex-basis: 400px;
  }
`;
const Text = styled.p`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }

  max-height: 72px;
  @media screen and (min-width: 768px) {
    max-height: 88px;
  }

  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
`;

const TextBox = styled.div`
  overflow: hidden;

  height: 75px;
  margin: 18px 0;

  @media screen and (min-width: 768px) {
    height: 96px;
    margin: 24px 0;
  }
`;
const Img = styled.img`
  background-position: center top;
  background-size: cover;
  height: 360px;

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`;

const Info = styled.div`
  margin-top: 24px;
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
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }

  margin-bottom: 4px;
`;
const ListBtn = styled.ul`
  display: flex;
  gap: 8px;
`;

// import { useDispatch, useSelector } from 'react-redux';
// import { deleteCardTwo } from 'redux/operations';

const CardTwo = ({ _id, drink, instructions, drinkThumb, ingredients }) => {
  //   const dispatch = useDispatch();

  //   const deleteCard = (id) => {
  //     dispatch(deleteCardTwo(id));
  //   };

  return (
    <Wrapper>
      <Img src={drinkThumb} />
      <Info>
        <Title>{drink}</Title>
        <Ingredients>Ingredients</Ingredients>
        <TextBox>
          <Text>{instructions}</Text>
        </TextBox>
      </Info>
      <ListBtn>
        <Link to={`/recipe/${_id}`}>See recipe</Link>
        <button>Del</button>
        {/* <button onClick={() => deleteContacts(el.id)}>delete</button> */}
      </ListBtn>
    </Wrapper>
  );
};

export default CardTwo;
