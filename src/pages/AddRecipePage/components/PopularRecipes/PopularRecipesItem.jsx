/* eslint-disable react/prop-types */
// import { MdNoDrinks as IocnNoDrinkImage } from 'react-icons/md';
import noDrink from '../../../../images/nodrink3.png';
import {
  Item,
  Image,
  Drink,
  About,
  Desc,
  Link,
  Thumb,
} from './PopularRecipes.styled';

export const PopularRecipesItem = ({
  drink,
  drinkThumb,
  about,
  instructions,
  _id,
}) => {
  const aboutDesc = (about || instructions).slice(0, 100).trim();

  return (
    <Item>
      <Link to={`/recipes/${_id}`}>
        <Thumb>
          <Image src={drinkThumb || noDrink} alt={`${drink} picture`} />
        </Thumb>
        <Desc>
          <Drink>{drink}</Drink>
          <About>{`${aboutDesc}...`}</About>
        </Desc>
      </Link>
    </Item>
  );
};
