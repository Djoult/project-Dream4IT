import PropTypes from 'prop-types';
import { ButtonActive, ButtonDisabled, ButtonHover, ButtonPassive,  } from './Button.styled';

export const ButtonMain = ({ type, buttonName, onClick, disabled, buttonStyle }) => {
  let ButtonComponent;
  
  if (buttonStyle === 'disabled') {
    ButtonComponent = ButtonDisabled;
  } else if (buttonStyle === 'active') {
    ButtonComponent = ButtonActive;
  } else if (buttonStyle === 'hover'){
    ButtonComponent = ButtonHover; 
  } else {
      ButtonComponent = ButtonPassive;
  }

  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </ButtonComponent>
  );
};

ButtonMain.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.string,
};