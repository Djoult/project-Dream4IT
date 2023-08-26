import CardTwo from "../CardTwo/CardTwo";
import items from "../../data/DB/cocktails6.json";
import { List } from "./ListCardsTwo.styled";


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
