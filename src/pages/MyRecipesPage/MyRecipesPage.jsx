import { useEffect } from 'react';
import TitlePage from '../../components/TitlePage/TitlePage';
import EllipsesLayout from '../../components/EllipsesLayout/EllipsesLayout';
import ListCardsTwo from '../../components/ListCardsTwo/ListCardsTwo';
import {
  fetchMyCocktails,
  deleteCocktail,
} from '../../redux/Cocktails/myCocktails-operations';
import { getMyCocktails, loadingMyCocktails } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Container404, Page } from './MyRecipesPage.styled';
import { setToken } from '../../api/auth';
import NotFoundColection from '../../components/NotFoundColection/NotFoundColection';

const MyRecipesPage = () => {
  const token = useSelector(state => state.auth.token);

  const myCocktails = useSelector(getMyCocktails);
  const loading = useSelector(loadingMyCocktails);

  const dispatch = useDispatch();

  useEffect(() => {
    setToken(token);
    dispatch(fetchMyCocktails());
  }, [dispatch, token]);

  const deleteCocktails = id => {
    dispatch(deleteCocktail(id));
  };

  return (
    <>
      <Page>
        <EllipsesLayout />
        {!loading && myCocktails.length !== 0 ? (
          <>
            <Container>
              <TitlePage titlePage="My recipes" />
            </Container>
            <ListCardsTwo items={myCocktails} onDel={deleteCocktails} />
          </>
        ) : (
          !loading && (
            <>
              <Container404>
                <TitlePage titlePage="My recipes" />
              </Container404>
              <NotFoundColection colection="own" />
            </>
          )
        )}
      </Page>
    </>
  );
};

export default MyRecipesPage;
