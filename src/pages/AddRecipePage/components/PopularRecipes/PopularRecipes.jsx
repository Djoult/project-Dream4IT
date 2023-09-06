/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { SubtitleSec } from '../../../../styles/shared';
import { List, Wrapper } from './PopularRecipes.styled';
import { PopularRecipesItem } from './PopularRecipesItem';
import { useAddRecipe } from '../../../../redux/addRecipe/hooks';
import { fitIntoRange } from '../../../../heplers';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';

export const PopularRecipes = ({ count }) => {
  const {
    fetchRandom,
    fetchPopularAsync,
    random,
    popular,
    error,
    pendingAction,
  } = useAddRecipe();

  useEffect(() => {
    // если найдено менее 4 популярных - берем рандомные
    fetchPopularAsync().then(data => {
      if (data?.length < 4) fetchRandom();
    });
  }, [fetchRandom, fetchPopularAsync]);

  const handleError = () => {
    toast.error(error.message);
  };

  const items = popular.length ? popular : random;
  const title = popular.length ? 'Popular' : 'Random';
  const len = fitIntoRange(count, 4, 6, 4);

  return (
    <Wrapper>
      {error && handleError()}

      <SubtitleSec>
        {`${title} recipes `}
        {pendingAction && <CircularProgress size={20} />}
      </SubtitleSec>
      <List>
        {items.slice(0, len).map((itm, idx) => (
          <PopularRecipesItem key={idx} {...itm} />
        ))}
      </List>
    </Wrapper>
  );
};
