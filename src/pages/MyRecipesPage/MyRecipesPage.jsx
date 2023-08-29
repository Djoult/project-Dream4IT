import { useState, useEffect } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import EllipsesLayout from "../../components/EllipsesLayout/EllipsesLayout";

import ListCardsTwo from "../../components/ListCardsTwo/ListCardsTwo";
import styled from "@emotion/styled";
import getAllCocktails from "./loadAPI";

// import { selectFilter, selectContacts } from 'redux/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/operations';

import items from "../../data/DB/cocktails6.json";

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

const MyRecipesPage = () => {
  const myCocktails = items;

  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cocktailsData = await getAllCocktails();
        setCocktails(cocktailsData);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Page>
        <EllipsesLayout />
        <Container>
          <TitlePage titlePage="My recipes" />
        </Container>
        <ListCardsTwo items={myCocktails} />
      </Page>
    </>
  );
};

export default MyRecipesPage;
