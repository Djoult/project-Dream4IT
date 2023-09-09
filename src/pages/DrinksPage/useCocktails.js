import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { setToken, instance } from '../../api/auth';

export const useCocktails = () => {
  const [myCocktails, setMyCocktails] = useState([]);
  const [categories, setCategories] = useState(["All categories"]); 
  const [ingredients, setIngredients] = useState(["All ingredients"]); 

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

        setCategories(["All categories", ...uniqueCategories]); 
        setIngredients(["All ingredients", ...uniqueIngredients]); 
      } catch (error) {
        console.error('Error fetching cocktails', error);
      }
    };
    fetchData();
  }, [token]);

  return {
    myCocktails,
    categories,
    ingredients,
  };
};
