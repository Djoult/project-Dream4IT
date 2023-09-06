/* eslint-disable react/prop-types */
import Select from 'react-select';
import { TextField } from '../../RecipeDetailsForm/TextField/TextField';
import { IconClose } from '../../../../../styles/icons';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAddRecipe } from '../../../../../redux/addRecipe/hooks';

import {
  customSelectStyles,
  customSelectComponents,
} from './reactSelectStyles';

import {
  Fields,
  Row,
  Ingredient,
  Measure,
  RemoveButton,
  InputStyled,
} from './IngredientListItem.styled';

export const IngredientListItem = ({ showRemoveBtn, onRemoveClick }) => {
  const [measure, setMeasure] = useState('');
  const [ingredient, setIngredient] = useState('');
  const {
    ingredients,
    setRecipeIngredients,
    removeRecipeIngredients,
    fetchIngredients,
    error,
    pendingAction,
  } = useAddRecipe();

  const handleIngredientSelect = (selected, { removedValues }) => {
    const [{ label }] = removedValues || '';
    console.log(label);

    if (selected) {
      setIngredient(selected?.value);
      setRecipeIngredients({ key: ingredient, value: measure });
    } else {
      setIngredient(selected?.value);
      removeRecipeIngredients({ key: ingredient });
    }
  };

  const handleError = () => {
    toast.error(error.message);
  };

  const isLoading = /ingredients/i.test(pendingAction);
  const ingredientOptions = ingredients.map(({ title }) => ({
    label: title,
    value: title,
  }));

  return (
    <Row>
      {error && handleError()}

      <Fields>
        <Ingredient>
          <Select
            // TODO: покажет лоадер для всех добавленных полей
            isClearable
            isLoading={isLoading}
            onMenuOpen={fetchIngredients}
            styles={customSelectStyles}
            components={customSelectComponents}
            placeholder="Ingredient"
            onChange={handleIngredientSelect}
            options={ingredientOptions}
          />
        </Ingredient>

        <Measure>
          <TextField
            disabled={!ingredient}
            inputOverride={InputStyled}
            placeholder="Measure"
            onChange={e => setMeasure(e?.target.value)}
            value={measure}
          />
        </Measure>
      </Fields>
      {showRemoveBtn && (
        <RemoveButton type="button" onClick={onRemoveClick}>
          <IconClose data-icon-close size={25} />
        </RemoveButton>
      )}
    </Row>
  );
};
