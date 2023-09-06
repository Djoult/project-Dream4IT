import React from 'react';
import PropTypes from 'prop-types';
import defaultInngregientImg from '../../images/inngredients/defaultInngregientImg.jpg';
import {
  StyledInngredientsList,
  StyledWrapper,
  StyledInngredients,
  StyledImg,
  StyledImgWrapper,
  StyledInggrTitle,
  StyledMeasure,
  StyledInfoWrapper,
} from './RecipeInngredientsList';

const RecipeInngredientsList = ({ recipe }) => {
  const { ingredients } = recipe;

  return (
    <StyledWrapper>
      <StyledInngredients>Ingredients</StyledInngredients>
      <StyledInngredientsList>
        {ingredients.map(({ _id, title, measure, ingredientThumb }) => {
          let imgPath = '';

          if (ingredientThumb !== undefined) {
            imgPath = ingredientThumb;
          } else {
            imgPath = defaultInngregientImg;
          }

          return (
            <li key={_id}>
              <StyledImgWrapper>
                <StyledImg src={imgPath} alt={title} />
              </StyledImgWrapper>
              <StyledInfoWrapper>
                <StyledInggrTitle>{title}</StyledInggrTitle>
                <StyledMeasure>{measure || null}</StyledMeasure>
              </StyledInfoWrapper>
            </li>
          );
        })}
      </StyledInngredientsList>
    </StyledWrapper>
  );
};

export default RecipeInngredientsList;

RecipeInngredientsList.propTypes = {
  resipe: PropTypes.object,
};
