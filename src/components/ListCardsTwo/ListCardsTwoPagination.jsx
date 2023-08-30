import { useState, 
    // useEffect 
} from "react";

import CardTwo from "../CardTwo/CardTwo";

import { List, ContainerBtnPagination } from "./ListCardsTwo.styled";
// import { useDispatch} from 'react-redux';
import UsePagination from '../../hooks/usePagination';
import ButtonPagination from "../ButtonPagination/Button Pagination"

// import { useDispatch, useSelector } from 'react-redux';
// import { deleteCardTwo } from 'redux/operations';



const ListCardsTwo = ({ items }) => {
  const [cocktails, setCocktails] = useState(items ?? []);
  // const { cocktails } = useSelector(state => state.cocktails);

  // Пагінація
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = UsePagination({
    contentPerPage: 9,
    count: items.length,
  });
  // 

  const deleteCocktail = (id) => {
    const updateArray = cocktails.filter(
      (cocktail) => cocktail._id.$oid !== id
    );
    setCocktails(updateArray);
    // 3
    // const updateArray = contacts.filter(contact => contact.id !== id);
    // dispatch(contactsAction(updateArray));
    // 4
    //( import { deleteContact } from 'redux/operations';
          // $pull. Поле users - це масив, з якого видаляємо значення
          //result = await Recipe.findbyIdAndUpdate(recipe._id, { $pull: {users: userId } });

    // const deleteContacts = id => {
    //   dispatch(deleteContact(id));
    // };
  };

  const elements = cocktails.slice(firstContentIndex, lastContentIndex).map((item) => (
    <CardTwo key={item._id.$oid} {...item} onDelete={deleteCocktail} />
  ));

  return (
    <>     
      <List>{elements}</List>
      {/* Пагінація кнопки */}
<ContainerBtnPagination>
      <ButtonPagination prevPage={prevPage} totalPages={totalPages} nextPage={nextPage} page={page} setPage={setPage} />
      </ContainerBtnPagination>
    </>
  );
};

export default ListCardsTwo;