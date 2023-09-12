import { useEffect } from 'react';
import TitlePage from '../../components/TitlePage/TitlePage';
import EllipsesLayout from '../../components/EllipsesLayout/EllipsesLayout';
import ListCardsTwoPagination from '../../components/ListCardsTwo/ListCardsTwoPagination';
import { setToken } from '../../api/auth';
import { Container404, Container, Page } from './FavoritePage.styled';
import { useDispatch, useSelector } from 'react-redux';
import NotFoundColection from '../../components/NotFoundColection/NotFoundColection';
import {
  fetchFavorites,
  deleteFavorite,
} from '../../redux/Cocktails/favorites-operations';
import { getFavorites, loadingFavorites } from '../../redux/selectors';

const FavoritePage = () => {
  const token = useSelector(state => state.auth.token);

  const favoriteCocktails = useSelector(getFavorites);
  const loading = useSelector(loadingFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    setToken(token);
    dispatch(fetchFavorites());
  }, [dispatch, token]);

  const deleteCocktails = id => {
    dispatch(deleteFavorite(id));
  };

  return (
    <>
      <Page>
        <EllipsesLayout />

        {!loading && favoriteCocktails.length !== 0 ? (
          <>
            <Container>
              <TitlePage titlePage="Favorites" />
            </Container>
            <ListCardsTwoPagination
              items={favoriteCocktails}
              onDel={deleteCocktails}
            />
          </>
        ) : (
          !loading && (
            <>
              <Container404>
                <TitlePage titlePage="Favorites" />
              </Container404>
              <NotFoundColection colection="favorite" />
            </>
          )
        )}
      </Page>
    </>
  );
};

export default FavoritePage;
