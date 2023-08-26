import CardTwo from "../CardTwo/CardTwo";
import items from "../../data/DB/cocktails6.json";
import styled from "@emotion/styled";

const List = styled.ul`


  margin: 0 20px 80px 20px;
  max-width: 1440px;  

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 80px 20px;
    margin: 0 32px 140px 32px;
  }
  @media screen and (min-width: 1240px) {
    margin: 0 100px 140px 100px;
  }
`;
// const ListCardsTwo = ( { items = [] } ) => {

const ListCardsTwo = () => {
  const elements = items.map((item) => (
    <CardTwo key={item._id.$oid} {...item} />
  ));

  return (
    <>
      <List>{elements}</List>
    </>
  );
};

export default ListCardsTwo;
