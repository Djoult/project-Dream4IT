import { useState } from "react";
import { FilterContainer, Select } from "./Drinks.styled";
import Filter from "./Filter";

export const NavMenu = () => {
  const [category, setCategory] = useState('all');
  const [ingredient, setIngredient] = useState('all');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleIngredientChange = (event) => {
    setIngredient(event.target.value);
  };

//   const handleSearchInputChange = (event) => {
    // setSearchText(event.target.value.toLowerCase());
//   };

  // Тут ви можете додати логіку фільтрації напоїв на основі state (category, ingredient, searchText)

  return (
    <FilterContainer>
      <Filter
        // type="text"
        // placeholder="Пошук за назвою"
        // onChange={handleSearchInputChange}
        // value={searchText}
      />
      <Select onChange={handleCategoryChange} value={category}>
        <option value="all">Усі категорії</option>
        <option value="ordinary">Ordinary drink</option>
        <option value="coctail">Coctail</option>
        <option value="shake">Shake</option>
        {/* Додайте інші категорії сюди */}
      </Select>
      <Select onChange={handleIngredientChange} value={ingredient}>
        <option value="all">Усі інгредієнти</option>
        <option value="light-rum">Light Rum</option>
        <option value="gin">Gin</option>
        <option value="vodka">Vodka</option>
        {/* Додайте інші інгредієнти сюди */}
      </Select>
    </FilterContainer>
  );
};

export default NavMenu;
