import { RecipeThumb } from '../RecipeThumb/RecipeThumb';
import { RecipeDetails } from '../RecipeDetailsForm/RecipeDetails';
import { DetailsWrapper, Form, AddButton } from './RecipeForm.styled';
import { IngredientList } from '../RecipeIngredientsForm/IngredientList/IngredientList';
import { RecipePreparation } from '../RecipePreparation/RecipePreparation';
import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { useAddRecipe } from '../../../../redux/addRecipe/hooks';
import { toast } from 'react-toastify';

const INGREDIENTS_MIN = 2;
const ERR_INGREDIENTS_MISSING = `You must specify at least ${INGREDIENTS_MIN} ingredients`;

export const RecipeForm = () => {
  const { recipe, addRecipeToDatabaseAsync } = useAddRecipe();
  const [thumbFile, setThumbFile] = useState(null);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const formRef = useRef(null);

  // Если поле с невалидным значением за пределами вьюпорта -
  // произойдет автоскроллинг к нему и будет скрыто сообщение валидации
  // В конце автоскроллинга форсим повторное появление сообщения
  // TODO: если автоскролл не произошел - при ручном скроллинге единоразово
  // отскроллит назад к полю с невалидным значением (пока будет фичей-))
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

  //
  //
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
      formData.append(name, value);
    });

    // TODO: лоадинг на кнопку добавить
    // Ресет всех инпутов добавить
    addRecipeToDatabaseAsync(formData)
      .then(toast.success('Successfully'))
      .catch(toast.error);

    // TODO: reset всех инпутов
  };

  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <DetailsWrapper>
        <RecipeThumb onChange={setThumbFile} />
        <RecipeDetails />
      </DetailsWrapper>
      <IngredientList />
      <RecipePreparation />
      <AddButton type="submit" onClick={() => setWasSubmitted(true)}>
        Add
      </AddButton>
    </Form>
  );
};
