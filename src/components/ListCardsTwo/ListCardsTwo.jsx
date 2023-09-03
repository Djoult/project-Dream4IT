import { useState, useEffect } from "react";

import CardTwo from "../CardTwo/CardTwo";

import { List } from "./ListCardsTwo.styled";

const ListCardsTwo = ({ items }) => {
  console.log( items);
  // const [cocktails, setCocktails] = useState(items);  
  // console.log( cocktails);
  const deleteCocktail = (id) => {
    const updateArray = cocktails.filter(
      (cocktail) => cocktail._id !== id
    );
    setCocktails(updateArray);
    // 3
    // const updateArray = contacts.filter(contact => contact.id !== id);
    // dispatch(contactsAction(updateArray));
    // 4    
    // const deleteContacts = id => {
    //   dispatch(deleteContact(id));
    // };
  };

  const elements = items.map((item) => (
    <CardTwo key={item._id} {...item} onDelete={deleteCocktail} />
  ));

  
  return (
    <>
      <List>{elements}</List> 
    </>
  );
};

export default ListCardsTwo;
