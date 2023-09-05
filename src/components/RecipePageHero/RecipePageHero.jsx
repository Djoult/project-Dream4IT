import React from 'react';
import PropTypes from 'prop-types';
import TitlePage from '../../components/TitlePage/TitlePage';

const RecipePageHero = ({ resipe }) => {
  const { drink, glass, instructions, drinkThumb } = resipe; //about

  return (
    <>
      <div>
        <p>{glass}</p>
        <TitlePage titlePage={drink} />
        {instructions !== undefined ? <p>{instructions}</p> : null}
        <button type="button">Add to favorite recipe</button>
      </div>
      <img src={drinkThumb} alt="Cocktail photo" />
    </>
  );
};

RecipePageHero.propTypes = {
  resipe: PropTypes.object,
};

export default RecipePageHero;
