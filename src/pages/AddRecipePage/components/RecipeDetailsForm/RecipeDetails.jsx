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
  const [drink, setDrink] = useState();
  const [about, setAbout] = useState();
  const { category, glass, fetchGlass, fetchCategory, error, pendingAction } =
    useAddRecipe();

  const handleError = () => {
    toast.error(error.message);
  };

  const isCategoryLoading = /category/i.test(pendingAction);
  const isGlassLoading = /glass/i.test(pendingAction);

  const categoryOptions = category.map(title => ({
    label: title,
    value: title,
  }));
  const glassOptions = glass.map(title => ({ label: title, value: title }));

  return (
    <Fields>
      {error && handleError()}

      <TextField
        placeholder="Enter item title"
        onChange={e => setDrink(e?.target.value ?? '')}
        value={drink}
      />

      <TextField
        placeholder="Enter about recipe"
        onChange={e => setAbout(e?.target.value ?? '')}
        value={about}
      />

      <Select
        isClearable
        isLoading={isCategoryLoading}
        onMenuOpen={!category.length && fetchCategory}
        styles={customSelectStyles}
        components={customSelectComponents}
        placeholder="Category"
        //onChange={itm => setCategory(itm?.value)}
        options={categoryOptions}
      />

      <Select
        isClearable
        isLoading={isGlassLoading}
        onMenuOpen={!glass.length && fetchGlass}
        styles={customSelectStyles}
        components={customSelectComponents}
        placeholder="Glass"
        //onChange={itm => setGlass(itm?.value)}
        options={glassOptions}
      />
    </Fields>
  );
};
