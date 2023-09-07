import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import defaultInngregientImg from '../../images/inngredients/defaultInngregientImg.png';
import {
  StyledTitle,
  StyledItem,
  StyledImg,
  StyledPreparationWrapper,
  StyledDeskWrapper,
} from './RecipePreparation';

const RecipePreparation = ({ recipe }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  const { drinkThumb, instructions, drink } = recipe;
  let imgPath = '';

  if (drinkThumb !== undefined || drinkThumb !== null) {
    imgPath = drinkThumb;
  } else {
    imgPath = defaultInngregientImg;
  }

  const instrArray = instructions
    .split('.')
    .filter(sentence => sentence.trim() !== '');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1440) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledPreparationWrapper>
      <StyledTitle>Recipe Preparation</StyledTitle>
      {isDesktop ? (
        <StyledDeskWrapper>
          <StyledImg src={drinkThumb} alt={drink} />
          <ul>
            {instrArray.map(item => {
              return <StyledItem>{item}</StyledItem>;
            })}
          </ul>
        </StyledDeskWrapper>
      ) : (
        <>
          <ul>
            {instrArray.map(item => {
              return <StyledItem>{item}</StyledItem>;
            })}
          </ul>
          <StyledImg src={imgPath} alt={drink} />
        </>
      )}
    </StyledPreparationWrapper>
  );
};

export default RecipePreparation;

RecipePreparation.propTypes = {
  recipe: PropTypes.object,
};
