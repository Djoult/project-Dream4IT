import { Link } from 'react-router-dom';
import { ReactComponent as TrashBin } from '../../images/trashBin.svg';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Img,
  Info,
  Title,
  Ingredients,
  TextBox,
  Text,
  ListBtn,
  ButtonSee,
  ButtonTrash,
  Box,
} from './CardTwo.styled';
import { ReactComponent as GreyPlugL } from '../../images/greyPlug/greyPlugL.svg';

const CardTwo = ({ _id, drink, instructions, drinkThumb, onDelete }) => {
  const propsImg = Object.values({ drinkThumb })[0];

  return (
    <Wrapper>
      {!propsImg || propsImg === '' ? (
        <Box>
          <GreyPlugL />
        </Box>
      ) : (
        <Img src={drinkThumb} />
      )}
      <Info>
        <Title>{drink}</Title>
        <Ingredients>Ingredients</Ingredients>
        <TextBox>
          <Text>{instructions}</Text>
        </TextBox>
      </Info>
      <ListBtn>
        <Link style={{ textDecoration: 'none' }} to={`/recipe/${_id}`}>
          <ButtonSee>See recipe</ButtonSee>
        </Link>
        <ButtonTrash onClick={() => onDelete(_id)}>
          <TrashBin style={{ width: '24px', height: '24px' }} />
        </ButtonTrash>
      </ListBtn>
    </Wrapper>
  );
};

export default CardTwo;

CardTwo.propTypes = {
  _id: PropTypes.string,
  drink: PropTypes.string,
  instructions: PropTypes.string,
  drinkThumb: PropTypes.string,
  onDelete: PropTypes.func,
};
