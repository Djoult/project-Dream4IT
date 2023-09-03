import { useState, useEffect } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import EllipsesLayout from "../../components/EllipsesLayout/EllipsesLayout";

import ListCardsTwo from "../../components/ListCardsTwo/ListCardsTwo";
import styled from "@emotion/styled";

import { useDispatch, useSelector} from 'react-redux';
// import { fetchMyCocktails } from "../../redux/Cocktails/myCocktails-operations";
import  { getMyCocktails }  from "../../redux/selectors";
import {getCocktails} from "../../redux/Cocktails/loadAPI"
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
  
const myCocktails = useSelector(getMyCocktails);
// const myCocktails = useSelector(store => store.myCocktails.items);

// console.log(myCocktails);
const dispatch = useDispatch();

  
  // const myCocktails = items;  
  // getCocktails()
  // 

  // const [myCocktails, setMyCocktails] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getMyCocktails = async () => {
  //     try {
  //       // setLoading(true);
  //       const myCocktailsData = await fetchMyCocktails();
  //       setMyCocktails(myCocktailsData);
  //       // setLoading(false);
  //     } catch ({response}) {
  //       console.log(response.data.message);
  //     }
  //   };
  //   getMyCocktails();
  // }, []);

  // useEffect(() => {
  //    dispatch(fetchMyCocktails())
  // }, []);

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
