import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/Drinks/selectors.js';
import { setFilter } from "../../redux/Drinks/filterSlice.js";
import { InputElem } from "./Drinks.styled";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter)
  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };
  return (

      <InputElem
        type="text"
        name="text"
        placeholder='Enter the text'
        value={filter}
        onChange={handleChange}
      />
  );
};
export default Filter;