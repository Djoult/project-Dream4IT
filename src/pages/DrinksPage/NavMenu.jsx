// import { useState } from "react";
import { FilterContainer } from "./Drinks.styled";
import Filter from "./Filter";
import items from '../../data/DB/cocktails.json';
import PropTypes from "prop-types"; 
import CustomSelectComponent from "../../UI/SelectElement/Select";

const NavMenu = ({
  category,
  filter,
  onFilterChange,
  ingredient,
  onCategoryChange,
  onIngredientChange,
}) => {
  
 // Створення масиву унікальних категорій
 const uniqueCategories = Array.from(
  new Set(items.map(item => item.category))
);
 // Створення масиву унікальних інгредієнтів
 const uniqueIngredients = Array.from(
  new Set(items.flatMap(cocktail => cocktail.ingredients.map(ingredient => ingredient.title)))
);

  return (
    <FilterContainer>
      <Filter filter={filter} onFilterChange={onFilterChange} />
        <CustomSelectComponent
        options={uniqueCategories} // Передаємо список категорій
        value={category} // Поточна категорія
        onChange={onCategoryChange} // Функція для обробки змін категорій
        placeholder="All categories"
      />
    
       <CustomSelectComponent
        options={uniqueIngredients} // Передаємо список інгредієнтів
        value={ingredient} // Поточна інгредієнт
        onChange={onIngredientChange} // Функція для обробки змін інгредієнтів
        placeholder="All ingredients"
      />
    </FilterContainer>
  );
};
export default NavMenu;
NavMenu.propTypes = {
  category: PropTypes.string.isRequired, 
  ingredient: PropTypes.string.isRequired, 
  onCategoryChange: PropTypes.func.isRequired,
  onIngredientChange: PropTypes.func.isRequired, 
  filter: PropTypes.string.isRequired, 
  onFilterChange: PropTypes.func.isRequired, 
}

