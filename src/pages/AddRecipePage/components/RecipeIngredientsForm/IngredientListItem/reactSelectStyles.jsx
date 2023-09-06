import { colors } from '../../../../../styles/GlobalStyles';
import { breakpoint as bp } from '../../../../../shared';
import { customSelectStyles as selectStyles } from '../../RecipeDetailsForm/reactSelectBaseStyles';

const mediaQuery = {
  tablet: `@media screen and (min-width: ${bp.tablet})`,
};

export const customSelectComponents = {
  IndicatorSeparator: () => null,
};

// переопределяем нужные стили
export const customSelectStyles = {
  ...selectStyles,

  control: base => {
    return {
      ...base,
      height: '50px',
      [mediaQuery.tablet]: {
        height: '56px',
      },
      fontSize: '16px',
      letterSpacing: '-0.32px',
      color: colors.textMainColor,
      borderRadius: '200px',
      border: `1px solid ${colors.grayColor}`,
      ':hover': {
        borderColor: colors.textMainColor,
      },
      backgroundColor: 'transparent',
      boxShadow: 'none',
      transitionDuration: 'var(--transition-duration)',
      transitionTimingFunction: 'var(--transition-func)',
      transitionProperty: 'border-color',
    };
  },

  valueContainer: base => {
    return {
      ...base,
      color: colors.textMainColor,
      paddingLeft: '18px',
      paddingRight: '18px',
      margin: 0,
    };
  },

  indicatorsContainer: base => {
    return {
      ...base,
      marginRight: '10px',
    };
  },
};
