import { useState, useEffect } from "react";

import CardTwo from "../CardTwo/CardTwo";

import { List } from "./ListCardsTwo.styled";

const ListCardsTwo = ({ items }) => {
  const [cocktails, setCocktails] = useState(items);  

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

  const elements = cocktails.map((item) => (
    <CardTwo key={item._id} {...item} onDelete={deleteCocktail} />
  ));

  
  return (
    <>
      <List>{elements}</List> 
    </>
  );
};

export default ListCardsTwo;
