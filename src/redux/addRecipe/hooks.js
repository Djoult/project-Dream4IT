import { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as addRecipeThunk from './addRecipeThunks';

export const useDispatchedActions = actions => {
  const dispatch = useDispatch();
  const actionsRef = useRef(actions);

  return useMemo(() => {
    return Object.entries(actionsRef.current).reduce(
      (res, [actionName, func]) => {
        const name = actionName.replace(/thunk$/i, '');
        res[name] = value => dispatch(func(value));
        res[`${name}Async`] = value => dispatch(func(value)).unwrap();

        return res;
      },
      {}
    );
  }, [dispatch]);
};

export const useAddRecipe = () => {
  const addRecipe = useSelector(state => state?.addRecipe);
  const dispatchedThunks = useDispatchedActions(addRecipeThunk);
  const dispatchedActions = useDispatchedActions(addRecipeThunk);

  return {
    // все что в initialState будет доступно как отдельные стейты
    ...addRecipe,
    ...dispatchedThunks,
    ...dispatchedActions,
  };
};
