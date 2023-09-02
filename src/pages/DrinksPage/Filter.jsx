import { InputElem } from "./Drinks.styled";
import PropTypes from "prop-types"; 

const Filter = ({ filter, onFilterChange }) => {
  return (
    <InputElem
      type="text"
      name="text"
      placeholder="Enter the text"
      value={filter}
      onChange={onFilterChange}
    />
  );
};

export default Filter;
Filter.propTypes = {
  filter: PropTypes.string.isRequired, 
  onFilterChange: PropTypes.func.isRequired, 
};