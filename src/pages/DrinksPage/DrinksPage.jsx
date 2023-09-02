import TitlePage from "../../components/TitlePage/TitlePage";
import EllipsesLayout from "../../components/EllipsesLayout/EllipsesLayout";
import { Container, Page } from "./Drinks.styled";
import { NavMenu } from "./NavMenu";
import items from "../../data/DB/cocktails.json";
import ListCardsOnePagination from "../../components/ListCardsOne/ListCardsOnePagination";

const DrinksPage = () => {
  const myCocktails = items;
    return (
      <>
        <Page>
        <EllipsesLayout />
        <Container>
            <TitlePage titlePage="Drinks" />
            <NavMenu/>
            <ListCardsOnePagination items={myCocktails} />
        </Container>
      </Page>
      </>
    );
};

export default DrinksPage;
