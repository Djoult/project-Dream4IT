
import PropTypes from 'prop-types';
import CardTwo from '../CardTwo/CardTwo';
import { List } from './ListCardsTwo.styled';

const ListCardsTwo = ({ items, onDel }) => {
  const deleteCocktail = async id => {
    await onDel(id);
  };

  const elements = items.map(item => (
    <CardTwo key={item._id} {...item} onDelete={deleteCocktail} />
  ));

  return (
    <>
      <List>{elements}</List>
    </>
  );
};

export default ListCardsTwo;

ListCardsTwo.propTypes = {
  items: PropTypes.array,
  onDel: PropTypes.func,
};
