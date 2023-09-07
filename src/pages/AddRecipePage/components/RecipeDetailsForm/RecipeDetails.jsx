import Select from 'react-select';
import { Fields } from './RecipeDetails.styled';
import { TextField } from './TextField/TextField';
import { toast } from 'react-toastify';
import { useAddRecipe } from '../../../../redux/addRecipe/hooks';
import { formValidation as validation } from '../../data/formValidation';

import {
  customSelectStyles,
  customSelectComponents,
} from './reactSelectBaseStyles';

export const RecipeDetails = () => {
  const {
    setRecipeDrink,
    setRecipeAbout,
    setRecipeCategory,
    setRecipeGlass,
    recipe,
    category,
    glass,
    fetchGlass,
    fetchCategory,
    error,
    pendingAction,
  } = useAddRecipe();

  const handleError = () => {
    toast.error(error.message);
  };

  const isCategoryLoading = /category/i.test(pendingAction);
  const isGlassLoading = /glass/i.test(pendingAction);

  const categoryOptions = category.map(title => ({
    label: title,
    value: title,
  }));

  const glassOptions = glass.map(title => ({
    label: title,
    value: title,
  }));

  return (
    <Fields>
      {error && handleError()}

      <TextField
        required
        pattern={validation.drink.pattern}
        maxLength={validation.drink.max}
        title={validation.drink.message}
        placeholder="Enter item title"
        onChange={e => setRecipeDrink(e?.target.value)}
        value={recipe.drink}
      />

      <TextField
        // required
        pattern={validation.about.pattern}
        maxLength={validation.about.max}
        title={validation.about.message}
        placeholder="Enter about recipe"
        onChange={e => setRecipeAbout(e?.target.value)}
        value={recipe.about}
      />

      <Select
        required
        isClearable
        isLoading={isCategoryLoading}
        onMenuOpen={fetchCategory}
        styles={customSelectStyles}
        components={customSelectComponents}
        placeholder="Category"
        onChange={itm => setRecipeCategory(itm?.value ?? '')}
        options={categoryOptions}
      />

      <Select
        required
        isClearable
        isLoading={isGlassLoading}
        onMenuOpen={fetchGlass}
        styles={customSelectStyles}
        components={customSelectComponents}
        placeholder="Glass"
        onChange={itm => setRecipeGlass(itm?.value ?? '')}
        options={glassOptions}
      />
    </Fields>
  );
};
