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
        isLoading={/category/i.test(pendingAction)}
        onMenuOpen={!category.length && fetchCategory}
        styles={customSelectStyles}
        components={customSelectComponents}
        placeholder="Category"
        //onChange={({ label }) => setCategory(label)}
        options={category.map(title => ({ label: title }))}
      />

      <Select
        isLoading={/glass/i.test(pendingAction)}
        onMenuOpen={!glass.length && fetchGlass}
        styles={customSelectStyles}
        components={customSelectComponents}
        placeholder="Glass"
        //onChange={({ label }) => setGlass(label)}
        options={glass.map(title => ({ label: title }))}
      />
    </Fields>
  );
};
