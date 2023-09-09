// import { useState, useEffect } from "react";
// import { FilterContainer } from "./Drinks.styled";
// import Filter from "./Filter";
// import PropTypes from "prop-types";
// import CustomSelectComponent from "../../UI/SelectElement/Select";
// import { setToken, instance } from '../../api/auth';
// import { useSelector } from "react-redux";

// const NavMenu = ({
//   filter,
//   category,
//   ingredient,
//   onFilterChange,
//   onCategoryChange,
//   onIngredientChange,
//   setFilteredCocktails,
// }) => {
//   const [myCocktails, setMyCocktails] = useState([]);
//   const [categories, setCategories] = useState("All categories"); 
//   const [ingredients, setIngredients] = useState("All ingredients"); 

//   const token = useSelector(state => state.auth.token);
//   useEffect(() => {
//     setToken(token);
//     const fetchData = async () => {
//       try {
//         const res = await instance.get('api/recipes/search?limit=90');
//         const data = res.data;
//         setMyCocktails(data.hits);

//         const uniqueCategories = Array.from(new Set(data.hits.map(item => item.category)));
//         const uniqueIngredients = Array.from(new Set(data.hits.flatMap(cocktail => cocktail.ingredients.map(ingredient => ingredient.title))));

//         setCategories(["All categories", ...uniqueCategories]); 
//         setIngredients(["All ingredients", ...uniqueIngredients]); 
//       } catch (error) {
//         console.error('Error fetching cocktails', error);
//       }
//     };
//     fetchData();
//   }, [token]);

//   const handleFilterChange = (e) => {
//     onFilterChange(e.target.value);
//     filterCocktails(e.target.value, category, ingredient);
//   };

//   const handleCategoryChange = (selectedCategory) => {
//     onCategoryChange(selectedCategory);
//     filterCocktails(filter, selectedCategory, ingredient);
//   };

//   const handleIngredientChange = (selectedIngredient) => {
//     onIngredientChange(selectedIngredient);
//     filterCocktails(filter, category, selectedIngredient);
//   };

//   const filterCocktails = (text, selectedCategory, selectedIngredient) => {
//     const newFilteredCocktails = myCocktails.filter((cocktail) => {
//       const isCategoryMatch = selectedCategory === "All categories" || cocktail.category === selectedCategory;
//       const isIngredientMatch = selectedIngredient === "All ingredients" || cocktail.ingredients.some((ingredientObj) => ingredientObj.title === selectedIngredient);
//       const isTextMatch = text === "" || cocktail.drink.toLowerCase().includes(text.toLowerCase());
//       return isCategoryMatch && isIngredientMatch && isTextMatch;
//     });

//     setFilteredCocktails(newFilteredCocktails);
//   };

//   return (
//     <FilterContainer>
//       <Filter filter={filter} onFilterChange={handleFilterChange} />
//       <CustomSelectComponent
//         options={categories}
//         value={category}
//         onChange={handleCategoryChange}
//         placeholder="All categories"
//       />
//       <CustomSelectComponent
//         options={ingredients}
//         value={ingredient}
//         onChange={handleIngredientChange}
//         placeholder="All ingredients"
//       />
//     </FilterContainer>
//   );
// };

// export default NavMenu;

// NavMenu.propTypes = {
//   category: PropTypes.string.isRequired,
//   ingredient: PropTypes.string.isRequired,
//   onCategoryChange: PropTypes.func.isRequired,
//   onIngredientChange: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired,
//   setFilteredCocktails: PropTypes.func.isRequired,
// };
import { useState, useEffect } from "react";
import { FilterContainer } from "./Drinks.styled";
import Filter from "./Filter";
import PropTypes from "prop-types";
import CustomSelectComponent from "../../UI/SelectElement/Select";
import { setToken, instance } from '../../api/auth';
import { useSelector } from "react-redux";

const NavMenu = ({
  filter,
  category,
  ingredient,
  onFilterChange,
  onCategoryChange,
  onIngredientChange,
  setFilteredCocktails,
}) => {
  const [myCocktails, setMyCocktails] = useState([]);
  const [categories, setCategories] = useState([]); // Пустий масив категорій
  const [ingredients, setIngredients] = useState([]); // Пустий масив інгредієнтів

  const token = useSelector(state => state.auth.token);
 useEffect(() => {
  setToken(token);
  const fetchData = async () => {
    try {
      const res = await instance.get('api/recipes/search?limit=90');
      const data = res.data;
      setMyCocktails(data.hits);

      const uniqueCategories = Array.from(new Set(data.hits.map(item => item.category)));
      const uniqueIngredients = Array.from(new Set(data.hits.flatMap(cocktail => cocktail.ingredients.map(ingredient => ingredient.title))));

      setCategories([...uniqueCategories]); // Видалено "All categories"
      setIngredients([...uniqueIngredients]); // Видалено "All ingredients"
    } catch (error) {
      console.error('Error fetching cocktails', error);
    }
  };
  fetchData();
}, [token]);

  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
    filterCocktails(e.target.value, category, ingredient);
  };

  const handleCategoryChange = (selectedCategory) => {
    onCategoryChange(selectedCategory);
    filterCocktails(filter, selectedCategory, ingredient);
  };

  const handleIngredientChange = (selectedIngredient) => {
    onIngredientChange(selectedIngredient);
    filterCocktails(filter, category, selectedIngredient);
  };

  const filterCocktails = (text, selectedCategory, selectedIngredient) => {
    const newFilteredCocktails = myCocktails.filter((cocktail) => {
      const isCategoryMatch = selectedCategory === "All categories" || cocktail.category === selectedCategory;
      const isIngredientMatch = selectedIngredient === "All ingredients" || cocktail.ingredients.some((ingredientObj) => ingredientObj.title === selectedIngredient);
      const isTextMatch = text === "" || cocktail.drink.toLowerCase().includes(text.toLowerCase());
      return isCategoryMatch && isIngredientMatch && isTextMatch;
    });

    setFilteredCocktails(newFilteredCocktails);
  };

  return (
    <FilterContainer>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <CustomSelectComponent
        options={["All categories", ...categories]} // Додано "All categories" як placeholder
        value={category} // Оновлено значення category
        onChange={handleCategoryChange}
        placeholder="All categories"
      />
      <CustomSelectComponent
        options={["All ingredients", ...ingredients]} // Додано "All ingredients" як placeholder
        value={ingredient} // Оновлено значення ingredient
        onChange={handleIngredientChange}
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
  setFilteredCocktails: PropTypes.func.isRequired,
};
