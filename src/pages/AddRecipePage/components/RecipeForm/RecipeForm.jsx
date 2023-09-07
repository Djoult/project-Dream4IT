import { RecipeThumb } from '../RecipeThumb/RecipeThumb';
import { RecipeDetails } from '../RecipeDetailsForm/RecipeDetails';
import { DetailsWrapper, Form, AddButton, Submit } from './RecipeForm.styled';
import { IngredientList } from '../RecipeIngredientsForm/IngredientList/IngredientList';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation';
import { useEffect, useRef, useState } from 'react';
import { useAddRecipe } from '../../../../redux/addRecipe/hooks';
import debounce from 'lodash.debounce';
import { toast } from 'react-toastify';
import { isArray } from '../../../../heplers';
import { BeatLoader } from 'react-spinners';
import { colors } from '../../../../styles/GlobalStyles';

const INGREDIENTS_MIN = 2;
const ERR_INGREDIENTS_MISSING = `You must select at least ${INGREDIENTS_MIN} ingredients`;
const MSG_SUCCESS_ADDED = 'Recipe added successfully';

export const RecipeForm = () => {
  const [thumbFile, setThumbFile] = useState(null);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const formRef = useRef(null);
  const { recipe, error, setError, pendingAction, addRecipeToDatabaseAsync } =
    useAddRecipe();

  // Если поле с невалидным значением за пределами вьюпорта -
  // произойдет автоскроллинг к нему и будет скрыто сообщение валидации
  // В конце автоскроллинга форсим повторное появление сообщения
  // TODO: если автоскролл не произошел - при ручном скроллинге единоразово
  // отскроллит назад к полю с невалидным значением (будет фичей-))
  useEffect(() => {
    const form = formRef.current;

    const handler = debounce(() => {
      form.reportValidity();
      setWasSubmitted(false);
    }, 50);

    if (wasSubmitted) {
      document.addEventListener('scroll', handler);
    }
    return () => document.removeEventListener('scroll', handler);
  }, [wasSubmitted]);

  const handleFormSubmit = e => {
    e.preventDefault();

    // формируем массив ингредиентов
    const ingredients = Object.entries(recipe.ingredients).reduce(
      (res, [title, measure]) => {
        res.push({ title, measure });
        return res;
      },
      []
    );
    if (ingredients.length < INGREDIENTS_MIN) {
      return toast.error(ERR_INGREDIENTS_MISSING);
    }

    // формируем form-data
    const formData = new FormData();
    Object.entries({
      ...recipe,
      ingredients,
      drinkThumb: thumbFile,
    }).forEach(([name, value]) => {
      // другие объекты мы не отправляем - конвертим только массив
      if (isArray(value)) value = JSON.stringify(value);
      formData.append(name, value);
    });

    addRecipeToDatabaseAsync(formData).then(() => {
      toast.success(MSG_SUCCESS_ADDED);
    });
  };

  const handleError = () => {
    toast.error(error.details);
    setError(null);
  };

  const isLoading = /toDatabase/i.test(pendingAction);

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      {error && handleError()}

      <DetailsWrapper>
        <RecipeThumb onChange={setThumbFile} />
        <RecipeDetails />
      </DetailsWrapper>
      <IngredientList />
      <RecipePreparation />

      <Submit>
        <AddButton type="submit" onClick={() => setWasSubmitted(true)}>
          <span>Add</span>
        </AddButton>
        {isLoading && <BeatLoader size={10} color={colors.successColor} />}
      </Submit>
    </Form>
  );
};
