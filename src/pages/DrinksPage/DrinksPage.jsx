import { useState, useEffect } from "react";
import TitlePage from "../../components/TitlePage/TitlePage";
import EllipsesLayout from "../../components/EllipsesLayout/EllipsesLayout";
import { Container, Page } from "./Drinks.styled";
import ListCardsOnePagination from "../../components/ListCardsOne/ListCardsOnePagination";
import NavMenu from "./NavMenu";
import { useSelector } from "react-redux";
import { setToken, instance } from '../../api/auth';

const DrinksPage = () => {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("All categories");
  const [ingredient, setIngredient] = useState("All ingredients");
  const [filteredCocktails, setFilteredCocktails] = useState([]); 

  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    setToken(token);
    const fetchData = async () => {
      try {
        const res = await instance.get('api/recipes/search?limit=90');
        const data = res.data;
        setFilteredCocktails(data.hits);
      } catch (error) {
        console.error('Error fetching cocktails', error);
      }
    };
    fetchData();
  }, [token]);


  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };


  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };


  const handleIngredientChange = (newIngredient) => {
    setIngredient(newIngredient);
  };

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
            setFilteredCocktails={setFilteredCocktails}
          />
          <ListCardsOnePagination items={filteredCocktails} />
        </Container>
      </Page>
    </>
  );
};

export default DrinksPage;
