import { useState, useEffect } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import EllipsesLayout from "../../components/EllipsesLayout/EllipsesLayout";

import ListCardsTwoPagination from "../../components/ListCardsTwo/ListCardsTwoPagination";
import styled from "@emotion/styled";
import { callGetApi, instance } from '../../api/auth';
// import getAllCocktails from "./loadAPI";

// import { selectFilter, selectContacts } from 'redux/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/operations';

// import items from "../../data/DB/cocktails.json";

const Page = styled.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 80px 0 40px 20px;
  @media screen and (min-width: 768px) {
    padding: 140px 0 60px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 158px 0 62px 110px;
  }
`;

const FavoritePage = () => {
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);

  useEffect(() => {
    instance
      .get('api/recipes/favorite')
      .then(res => {
        const data = res.data;
        console.log(data.hits);
        setFavoriteCocktails(data.hits);
      })
      .catch(error => {
        console.error('Error fetching drinks:', error);
      });
  }, []);
  console.log(`page ${favoriteCocktails}`);

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
        <ListCardsTwoPagination items={favoriteCocktails} />
      </Page>
    </>
  );
};

export default FavoritePage;
