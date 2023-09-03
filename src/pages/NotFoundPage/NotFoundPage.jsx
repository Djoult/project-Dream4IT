import TitlePage from "../../components/TitlePage/TitlePage";
import styled from "@emotion/styled";
import NotFound from "../../components/NotFound/NotFound";
import EllipsesLayout from "../../components/EllipsesLayout/EllipsesLayout";
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

const NotFoundPage = () => {
  return (
    <Page>
        <EllipsesLayout />
        <Container>
          <NotFound/>
        </Container>
      </Page>
  );
};

export default NotFoundPage;
