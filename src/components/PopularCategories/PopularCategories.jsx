import React, { useState, useEffect } from 'react';
import { setToken, instance } from '../../api/auth';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/selectors';
import css from './PopularCategories.module.scss';

const PopularCategories = ({ categoryDrink }) => {
  const [drinksInCategory, setDrinksInCategory] = useState([]);
  const [cardsPerRow, setCardsPerRow] = useState(3);
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    setToken(token);
    instance
      .get('api/recipes/main-page', {
        params: { category: categoryDrink.toLowerCase() },
      })
      .then(res => {
        const data = res.data;
        setDrinksInCategory(data[0].hits);
      })
      .catch(error => {
        console.error('Error fetching drinks:', error);
      });
  }, [categoryDrink]);

  useEffect(() => {
    const updateCardsPerRow = () => {
      if (window.innerWidth > 768) {
        setCardsPerRow(3);
      } else if (window.innerWidth > 375) {
        setCardsPerRow(2);
      } else {
        setCardsPerRow(1);
      }
    };

    updateCardsPerRow();

    window.addEventListener('resize', updateCardsPerRow);

    return () => {
      window.removeEventListener('resize', updateCardsPerRow);
    };
  }, []);

  return (
    <div>
      <h2 className={css.nameCategory}>{categoryDrink}</h2>
      <ul className={css.cocktailList}>
        {drinksInCategory.slice(0, cardsPerRow).map(drink => (
          <li key={drink.drink}>
            <div className={css.imgContainer}>
              <img
                src={drink.drinkThumb}
                alt={drink.drink}
                className={css.imgCocktail}
              />
            </div>

            <div className={css.nameAndIngridients}>
              <p className={css.nameCocktail}>{drink.drink}</p>
              <p className={css.ingredients}>Ingredients</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularCategories;
