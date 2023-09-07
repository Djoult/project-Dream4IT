import React from 'react';
import PropTypes from 'prop-types';
import TitlePage from '../../components/TitlePage/TitlePage';
import { StyledGlass, StyledAbout, StyledFavoriteBtn, StyledRecipeHeroImg, StyledWrapper } from './RecipePageHero';

const RecipePageHero = ({ recipe }) => {
  const { drink, glass, about, drinkThumb } = recipe;

  return (
    <StyledWrapper>
      <div>
        <StyledGlass>{glass}</StyledGlass>
        <TitlePage titlePage={drink} />
        {about !== undefined ? <StyledAbout>{about}</StyledAbout> : null}
        <StyledFavoriteBtn type="button">Add to favorite recipe</StyledFavoriteBtn>
      </div>
      <StyledRecipeHeroImg src={drinkThumb} alt="Cocktail photo" />
    </StyledWrapper>
  );
};

export default RecipePageHero;

RecipePageHero.propTypes = {
  resipe: PropTypes.object,
};