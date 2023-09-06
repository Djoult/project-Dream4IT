import { RecipeThumb } from '../RecipeThumb/RecipeThumb';
import { RecipeDetails } from '../RecipeDetailsForm/RecipeDetails';
import { DetailsWrapper, Form, ButtonAdd } from './RecipeForm.styled';
import { IngredientList } from '../RecipeIngredientsForm/IngredientList/IngredientList';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation';

export const RecipeForm = () => {
  return (
    <Form>
      <DetailsWrapper>
        <RecipeThumb />
        <RecipeDetails />
      </DetailsWrapper>

      <IngredientList />

      <RecipePreparation />

      <ButtonAdd type="submit">Add</ButtonAdd>
    </Form>
  );
};
