import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { instance, setToken } from '../../api/auth';
import TitlePage from '../../components/TitlePage/TitlePage';
import {
  StyledGlass,
  StyledAbout,
  StyledFavoriteBtn,
  StyledRecipeHeroImg,
  StyledWrapper,
} from './RecipePageHero';

const RecipePageHero = ({ recipe }) => {
  const token = useSelector(state => state.auth.token);
  const { recipeId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const { drink, glass, about, drinkThumb } = recipe;

  useEffect(() => {
    setToken(token);

    instance
      .get(`/api/recipes/favorite/${recipeId}`)
      .then(res => {
        if (res) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      })
      .catch(error => console.log(error.message));
  }, [token, recipeId]);

  const handleFavorite = () => {
    setToken(token);

    instance.patch(`/api/recipes/favorite/${recipeId}`).then(res => {
      const { favorite } = res.data;

      if (favorite) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    });
  };

  return (
    <StyledWrapper>
      <div>
        <StyledGlass>{glass}</StyledGlass>
        <TitlePage titlePage={drink} />
        {about !== undefined ? <StyledAbout>{about}</StyledAbout> : null}
        {isFavorite ? (
          <StyledFavoriteBtn type="button" onClick={handleFavorite}>
            Remove from favorite recipe
          </StyledFavoriteBtn>
        ) : (
          <StyledFavoriteBtn type="button" onClick={handleFavorite}>
            Add to favorite recipe
          </StyledFavoriteBtn>
        )}
      </div>
      <StyledRecipeHeroImg src={drinkThumb} alt="Cocktail photo" />
    </StyledWrapper>
  );
};

export default RecipePageHero;

RecipePageHero.propTypes = {
  resipe: PropTypes.object,
};
