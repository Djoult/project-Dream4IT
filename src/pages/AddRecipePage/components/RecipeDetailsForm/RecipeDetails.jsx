import Select from 'react-select';
import { Fields } from './RecipeDetails.styled';
import { useState } from 'react';
import { TextField } from './TextField/TextField';
import { toast } from 'react-toastify';
import { useAddRecipe } from '../../../../redux/addRecipe/hooks';

import {
  customSelectStyles,
  customSelectComponents,
} from './reactSelectBaseStyles';

export const RecipeDetails = () => {
  const {
    setRecipe,
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
        placeholder="Enter item title"
        onChange={e => setRecipe({ key: 'drink', value: e?.target.value })}
        value={recipe.drink}
      />

      <TextField
        placeholder="Enter about recipe"
        onChange={e => setRecipe({ key: 'about', value: e?.target.value })}
        value={recipe.about}
      />

      <Select
        isClearable
        isLoading={isCategoryLoading}
        onMenuOpen={fetchCategory}
        styles={customSelectStyles}
        components={customSelectComponents}
        placeholder="Category"
        onChange={itm => setRecipe({ key: 'category', value: itm?.value })}
        options={categoryOptions}
      />

      <Select
        isClearable
        isLoading={isGlassLoading}
        onMenuOpen={fetchGlass}
        styles={customSelectStyles}
        components={customSelectComponents}
        placeholder="Glass"
        onChange={itm => setRecipe({ key: 'glass', value: itm?.value })}
        options={glassOptions}
      />
    </Fields>
  );
};
