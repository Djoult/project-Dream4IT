import TitlePage from "../../components/TitlePage/TitlePage";
import EllipsesLayout from "../../components/EllipsesLayout/EllipsesLayout";
import { Container, Page } from "./Drinks.styled";
import items from "../../data/DB/cocktails.json";
import ListCardsOnePagination from "../../components/ListCardsOne/ListCardsOnePagination";
import { useState } from "react";
import NavMenu from "./NavMenu";

const DrinksPage = () => {
//фільтрація
const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("all");
  const [ingredient, setIngredient] = useState("all");

//обробники фільтрів
const handleFilterChange = (e) => {
  setFilter(e.target.value);
};

const handleCategoryChange = (event) => {
  setCategory(event.target.value);
};
console.log("handleCategoryChange", handleCategoryChange);
const handleIngredientChange = (event) => {
  setIngredient(event.target.value);
};
//перевіряємо у інпутах фільтри
const filteredCocktails = items.filter((cocktail) => {
  const isCategoryMatch =
    category === "all" || cocktail.category === category;
  const isIngredientMatch =
    ingredient === "all" ||
    cocktail.ingredients.some(
      (ingredientObj) => ingredientObj.title === ingredient
    );
  const isTextMatch =
    filter === "" ||
    cocktail.drink.toLowerCase().includes(filter.toLowerCase());
  return isCategoryMatch && isIngredientMatch && isTextMatch;
});
    return (
      <>
        <Page>
        <EllipsesLayout />
        <Container>
            <TitlePage titlePage="Drinks" />
            <NavMenu
            filter={filter}
            category={category}
            ingredient={ingredient}
            onFilterChange={handleFilterChange}
            onCategoryChange={handleCategoryChange}
            onIngredientChange={handleIngredientChange}
            />
            <ListCardsOnePagination items={filteredCocktails} />
        </Container>
      </Page>
      </>
    );
};

export default DrinksPage;
