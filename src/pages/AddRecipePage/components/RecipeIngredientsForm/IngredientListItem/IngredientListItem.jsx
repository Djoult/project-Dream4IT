/* eslint-disable react/prop-types */
import Select from 'react-select';
import { TextField } from '../../RecipeDetailsForm/TextField/TextField';
import { IconClose } from '../../../../../styles/icons';
import { useState } from 'react';
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
  const [ingredient, setIngredient] = useState('');
  const [measure, setMeasure] = useState('');
  const { ingredients, fetchIngredients, error, pendingAction } =
    useAddRecipe();

  const handleError = () => {
    toast.error(error.message);
  };

  return (
    <Row>
      {error && handleError()}

      <Fields>
        <Ingredient>
          <Select
            // TODO: покажет лоадер для всех добавленных полей
            isLoading={pendingAction}
            onMenuOpen={!ingredients.length && fetchIngredients}
            styles={customSelectStyles}
            components={customSelectComponents}
            placeholder="Ingredient"
            onChange={({ label }) => setIngredient(label)}
            options={ingredients.map(({ title }) => ({ label: title }))}
          />
        </Ingredient>

        <Measure>
          <TextField
            disabled={!ingredient}
            inputOverride={InputStyled}
            placeholder="Measure"
            onChange={e => setMeasure(e?.target.value ?? '')}
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
