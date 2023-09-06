import { useState, useEffect } from 'react';
import TitlePage from '../../components/TitlePage/TitlePage';
import EllipsesLayout from '../../components/EllipsesLayout/EllipsesLayout';
import ListCardsTwo from '../../components/ListCardsTwo/ListCardsTwo';
import { fetchMyCocktails } from '../../redux/Cocktails/myCocktails-operations';
import { getMyCocktails } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Page } from './MyRecipesPage.styled';
import { setToken, instance } from '../../api/auth';

const MyRecipesPage = () => {
  const [myCocktails, setMyCocktails] = useState([]);
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    setToken(token);
    const fetchData = async () => {
      try {
        await instance.get('api/recipes/own?limit=9').then(res => {
          const data = res.data;
          setMyCocktails(data.hits);
        });
      } catch (error) {
        console.error('Error fetching coctails', error);
      }
    };
    fetchData();
  }, [token]);

  // redux
  // const myCocktails = useSelector(getMyCocktails);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //    dispatch(fetchMyCocktails())
  // }, [dispatch]);

  const delCoctailsData = async id => {
    try {
      await instance.delete(`api/recipes/own/${id}`);
    } catch (error) {
      console.error('Error deleting', error);
    }
  };

  const deleteCoctails = id => {
    delCoctailsData(id);

    const updateArray = myCocktails.filter(cocktail => cocktail._id !== id);
    setMyCocktails(updateArray);
    // 3
    // const updateArray = contacts.filter(contact => contact.id !== id);
    // dispatch(contactsAction(updateArray));
    // 4
    // const deleteContacts = id => {
    //   dispatch(deleteContact(id));
    // };
  };

  return (
    <>
      <Page>
        <EllipsesLayout />
        <Container>
          <TitlePage titlePage="My recipes" />
        </Container>
        <ListCardsTwo items={myCocktails} onDel={deleteCoctails} />
      </Page>
    </>
  );
};

export default MyRecipesPage;
