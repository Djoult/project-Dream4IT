import TitlePage from "../../components/TitlePage/TitlePage";

import ListCardsTwo from "../../components/ListCardsTwo/ListCardsTwo";
import styled from "@emotion/styled";

const Page = styled.div`
  background: #0a0a11;
  margin: 0 auto;
`;

const MyRecipesPage = () => {
  return (
    <>
      <Page>
        <TitlePage titlePage="My recipes" />
        <ListCardsTwo />
      </Page>
    </>
  );
};

export default MyRecipesPage;
