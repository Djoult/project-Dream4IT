// import styled from "@emotion/styled";
import TitlePage from "../../components/TitlePage/TitlePage";
import EllipsesLayout from "../../components/EllipsesLayout/EllipsesLayout";
import { Container, Page } from "./Drinks.styled";
import { NavMenu } from "./NavMenu";



const DrinksPage = () => {
    return (
      <>
        <Page>
        <EllipsesLayout />
        <Container>
            <TitlePage titlePage="Drinks" />
            <NavMenu/>
        </Container>
      </Page>
      </>
    );
};

export default DrinksPage;
