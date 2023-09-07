import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, Img, ListInfo, Title, Ingredients } from './CardOne.styled';

const CardOne = ({ _id, drink, drinkThumb }) => {
  return (
    <Wrapper>
      <Link to={`/recipe/${_id.$oid}`}>
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

CardOne.propTypes = {
  _id: PropTypes.object,
  drink: PropTypes.string,
  drinkThumb: PropTypes.string,
};
