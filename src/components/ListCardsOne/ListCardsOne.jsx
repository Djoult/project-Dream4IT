import CardOne from '../CardOne/CardOne';
import items from "../../data/DB/cocktails6.json";
import styled from "@emotion/styled";

const List = styled.ul`
  margin: 0 auto 80px auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 40px 20px;
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1440px) {
    gap: 80px 20px;
  }
`;

const ListCardsOne = () => {
  const elements = items.map(item => <CardOne key={item._id.$oid} {...item} />);

  return (
    <>
    <List>{elements}</List>
  </>
  )
};

export default ListCardsOne;