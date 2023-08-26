import { Link } from "react-router-dom";
import { ReactComponent as TrashBin } from "../../images/trashBin.svg";
import PropTypes from 'prop-types';
import { Wrapper, Img, Info, Title, Ingredients, TextBox, Text, ListBtn, ButtonSee, ButtonTrash } from "./CardTwo.styled";


// import { useDispatch, useSelector } from 'react-redux';
// import { deleteCardTwo } from 'redux/operations';

const CardTwo = ({ _id, drink, instructions, drinkThumb }) => {
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
        <Link style={{ textDecoration: "none" }} to={`/recipe/${_id}`}>
          <ButtonSee>See recipe</ButtonSee>
        </Link>
        <ButtonTrash>
          <TrashBin style={{ width: "24px", height: "24px" }} />
        </ButtonTrash>
        {/* <button onClick={() => deleteContacts(el.id)}>delete</button> */}
      </ListBtn>
    </Wrapper>
  );
};

export default CardTwo;

CardTwo.propTypes = {
  // _id: PropTypes.string,
  drink: PropTypes.string,
  instructions: PropTypes.string,
  drinkThumb: PropTypes.string,
};