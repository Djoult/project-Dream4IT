/* eslint-disable react/prop-types */
import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Counter } from '../Counter/Counter';
import { List, Container, Header } from './IngredientList.styled';
import { IngredientListItem } from '../IngredientListItem/IngredientListItem';
import { Subtitle } from '../../../../../styles/shared';

const MAX_COUNT = 50;
const MIN_COUNT = 1;

export const IngredientList = () => {
  const [counterValue, setCounterValue] = useState(MIN_COUNT);
  const { control /* reset */ } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredients',
  });

  // Добавляем один по-умолчанию
  // NOTE: из-за <React.StrictMode> вызовется дважды
  useEffect(() => {
    append({});
  }, [append]);

  const handleDecrease = index => {
    // если index не задан - удаляем последний
    remove(index ?? fields.length - 1);
    setCounterValue(cur => cur - 1);
  };

  const handleIncrease = () => {
    append({});
    setCounterValue(cur => cur + 1);
  };

  return (
    <Container>
      <Header>
        <Subtitle>Ingredients</Subtitle>
        <Counter
          value={counterValue}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          min={MIN_COUNT}
          max={MAX_COUNT}
        />
      </Header>
      <List>
        {fields.map((item, index, arr) => (
          <IngredientListItem
            key={item.id}
            onRemoveClick={() => handleDecrease(index)}
            showRemoveBtn={arr.length > 1}
          />
        ))}
      </List>
    </Container>
  );
};
