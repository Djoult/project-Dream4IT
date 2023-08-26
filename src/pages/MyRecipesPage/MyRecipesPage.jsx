import TitlePage from "../../components/TitlePage/TitlePage";
import EllipsesLayout from "../../components/EllipsesLayout/EllipsesLayout";

import ListCardsTwo from "../../components/ListCardsTwo/ListCardsTwo";
import styled from "@emotion/styled";


const Page = styled.div`
  position: relative;
  background: #0a0a11;
  margin: 0 auto;
`;

const MyRecipesPage = () => {
  return (
    <>
      <Page>
        <EllipsesLayout />
        <TitlePage titlePage="My recipes" />
        <ListCardsTwo />
      </Page>
    </>
  );
};

export default MyRecipesPage;
