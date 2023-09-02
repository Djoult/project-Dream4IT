// import { useState } from "react";
import { FilterContainer, Select } from "./Drinks.styled";
import Filter from "./Filter";
import items from '../../data/DB/cocktails.json';
import PropTypes from "prop-types"; 

const NavMenu = ({
  category,
  filter,
  onFilterChange,
  ingredient,
  onCategoryChange,
  onIngredientChange,
}) => {
  // const [category, setCategory] = useState('all');
  // const [ingredient, setIngredient] = useState('all');
  
 // Створення масиву унікальних категорій
 const uniqueCategories = Array.from(
  new Set(items.map(item => item.category))
);
 // Створення масиву унікальних інгредієнтів
 const uniqueIngredients = Array.from(
  new Set(items.flatMap(cocktail => cocktail.ingredients.map(ingredient => ingredient.title)))
);

  // const handleCategoryChange = (event) => {
  //   setCategory(event.target.value);
  // };

  // const handleIngredientChange = (event) => {
  //   setIngredient(event.target.value);
  // };


  return (
    <FilterContainer>
      <Filter filter={filter} onFilterChange={onFilterChange} />
      <Select onChange={onCategoryChange} value={category}>
        <option value="all">All categories</option>
        {uniqueCategories.map((uniqueCategory, index) => (
          <option key={index} value={uniqueCategory}>
            {uniqueCategory}
          </option>
        ))}
      </Select>
      <Select onChange={onIngredientChange} value={ingredient}>
        <option value="all">All ingredients</option>
        {uniqueIngredients.map((uniqueCategory, index) => (
          <option key={index} value={uniqueCategory}>
            {uniqueCategory}
          </option>
        ))}
      </Select>
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

