import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardTwoPagination from '../CardTwo/CardTwoPagination';

import { List, ContainerBtnPagination } from './ListCardsTwo.styled';
import UsePagination from '../../hooks/usePagination';
import ButtonPagination from '../ButtonPagination/Button Pagination';

// import { useDispatch, useSelector } from 'react-redux';
// import { deleteCardTwo } from 'redux/operations';

const ListCardsTwoPagination = ({ items, onDel }) => {
  const [contentPerPage, setContentPerPage] = useState(9);

  useEffect(() => {
    const changeNumberItems = () => {
      if (window.innerWidth > 1440) {
        setContentPerPage(9);
      } else setContentPerPage(8);
    };
    changeNumberItems();

    window.addEventListener('resize', changeNumberItems);
    return () => {
      window.removeEventListener('resize', changeNumberItems);
    };
  }, []);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = UsePagination({
    contentPerPage,
    count: items.length,
  });

  const deleteCocktail = async id => {
    await onDel(id);
  };
  // 3
  // const updateArray = contacts.filter(contact => contact.id !== id);
  // dispatch(contactsAction(updateArray));
  // 4
  // const deleteContacts = id => {
  //   dispatch(deleteContact(id));
  // };

  const elements = items
    .slice(firstContentIndex, lastContentIndex)
    .map(item => (
      <CardTwoPagination key={item._id} {...item} onDelete={deleteCocktail} />
    ));

  return (
    <>
      <List>{elements}</List>
      {/* Пагінація кнопки */}
      <ContainerBtnPagination>
        <ButtonPagination
          prevPage={prevPage}
          totalPages={totalPages}
          nextPage={nextPage}
          page={page}
          setPage={setPage}
          pageType="favorite"
        />
      </ContainerBtnPagination>
    </>
  );
};

export default ListCardsTwoPagination;

ListCardsTwoPagination.propTypes = {
  items: PropTypes.array,
  onDel: PropTypes.func,
};
