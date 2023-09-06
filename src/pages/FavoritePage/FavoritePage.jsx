import { useState, useEffect } from 'react';
import TitlePage from '../../components/TitlePage/TitlePage';
import EllipsesLayout from '../../components/EllipsesLayout/EllipsesLayout';
import ListCardsTwoPagination from '../../components/ListCardsTwo/ListCardsTwoPagination';
import { setToken, instance } from '../../api/auth';
import { Container, Page } from './FavoritePage.styled'
import { useDispatch, useSelector } from 'react-redux';
// import getAllCocktails from "./loadAPI";

// import { selectFilter, selectContacts } from 'redux/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/operations';

// import items from "../../data/DB/cocktails.json";

const FavoritePage = () => {
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    setToken(token);
    const fetchData = async () => {
    try {
      await instance.get('api/recipes/favorite')
      .then(res => {
        const data = res.data;
        setFavoriteCocktails(data.hits);
      });
    } catch (error) {
      console.error('Error fetching coctails', error);
    }
  };
  fetchData();
}, [token]);

const delCoctailsData = async id => {
  try {
    await instance.patch(`api/recipes/favorite/${id}`);
  } catch (error) {
    console.error('Error deleting', error);
  }
};

const deleteCoctails = id => {
  delCoctailsData(id);

  const updateArray = favoriteCocktails.filter(cocktail => cocktail._id !== id);
  setFavoriteCocktails(updateArray);
  // 3
  // const updateArray = contacts.filter(contact => contact.id !== id);
  // dispatch(contactsAction(updateArray));
  // 4
  // const deleteContacts = id => {
  //   dispatch(deleteContact(id));
  // };
};
  // const myCocktails = items;

  // const [cocktails, setCocktails] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const cocktailsData = await getAllCocktails();
  //       setCocktails(cocktailsData);
  //       setLoading(false);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Page>
        <EllipsesLayout />
        <Container>
          <TitlePage titlePage="Favorites" />
        </Container>
        <ListCardsTwoPagination items={favoriteCocktails} onDel={deleteCoctails} />
      </Page>
    </>
  );
};

export default FavoritePage;
