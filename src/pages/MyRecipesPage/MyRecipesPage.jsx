import { useState, useEffect } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import EllipsesLayout from "../../components/EllipsesLayout/EllipsesLayout";

import ListCardsTwo from "../../components/ListCardsTwo/ListCardsTwo";
import styled from "@emotion/styled";


import { fetchMyCocktails } from "../../redux/Cocktails/myCocktails-operations";
import  { getMyCocktails }  from "../../redux/selectors";
import { useDispatch, useSelector } from 'react-redux';


// import items from "../../data/DB/cocktails6.json";

import { callGetApi, instance } from '../../api/auth';

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
  const [myCocktails, setMyCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await instance.get('api/recipes/search?limit=80')
      .then(res => {
        const data = res.data;
        console.log(data.hits);
        setMyCocktails(data.hits);
      })      
    } catch (error) {
      console.error('Error fetching', error);}

    };
    fetchData();
  }, []);
 
// const myCocktails = items;  

// redux
// const myCocktails = useSelector(getMyCocktails);
// const dispatch = useDispatch();  
   
  // useEffect(() => {
  //    dispatch(fetchMyCocktails())
  // }, [dispatch]);

  console.log(`page ${myCocktails}`);

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
