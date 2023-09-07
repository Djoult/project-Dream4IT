/* eslint-disable react/prop-types */
import Select from 'react-select';
import { TextField } from '../../RecipeDetailsForm/TextField/TextField';
import { IconClose } from '../../../../../styles/icons';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAddRecipe } from '../../../../../redux/addRecipe/hooks';
import { formValidation as validation } from '../../../data/formValidation';

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

  const handleIngredientChange = (selected, opts) => {
    const { action, removedValues } = opts;

    if (action === 'clear') {
      const [{ label: key }] = removedValues;
      removeRecipeIngredients({ key });
      setIngredient('');
    } else if (action === 'select-option') {
      setRecipeIngredients({ key: selected.value, value: measure });
      setIngredient(selected.value);
    }
  };

  const handleMeasureChange = e => {
    const { value = '' } = e?.target || '';
    setRecipeIngredients({ key: ingredient, value });
    setMeasure(value);
  };

  const handleItemRemove = () => {
    removeRecipeIngredients({ key: ingredient });
    onRemoveClick();
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
            onChange={handleIngredientChange}
            options={ingredientOptions}
          />
        </Ingredient>

        <Measure>
          <TextField
            // ставим required только если не disabled
            // То бишь, если выбран ингредиент
            {...(ingredient && { required: true })}
            pattern={validation.measure.pattern}
            minLength={validation.measure.min}
            title={validation.measure.message}
            disabled={!ingredient}
            inputOverride={InputStyled}
            placeholder="Measure"
            onChange={handleMeasureChange}
            value={measure}
          />
        </Measure>
      </Fields>
      {showRemoveBtn && (
        <RemoveButton type="button" onClick={handleItemRemove}>
          <IconClose data-icon-close size={25} />
        </RemoveButton>
      )}
    </Row>
  );
};
