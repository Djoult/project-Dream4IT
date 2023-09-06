import { colors } from '../../../../styles/GlobalStyles';
import { breakpoint as bp } from '../../../../shared';

const mediaQuery = {
  tablet: `@media screen and (min-width: ${bp.tablet})`,
};

export const customSelectComponents = {
  IndicatorSeparator: () => null,
};

const fontParams = {
  fontSize: '14px',
  letterSpacing: '-0.28px',
  [mediaQuery.tablet]: {
    fontSize: '16px',
    letterSpacing: '-0.32px',
  },
};

export const customSelectStyles = {
  control: base => {
    return {
      ...base,
      height: '48px',
      [mediaQuery.tablet]: {
        height: '58px',
      },
      // после верхнего mediaQuery, иначе перебьет
      ...fontParams,
      border: 'none',
      color: colors.textMainColor,
      borderRadius: 'none',
      borderBottom: `1px solid ${colors.grayColor}`,
      ':hover': {
        borderBottomColor: colors.textMainColor,
      },
      backgroundColor: 'transparent',
      boxShadow: 'none',
      transitionDuration: 'var(--transition-duration)',
      transitionTimingFunction: 'var(--transition-func)',
      transitionProperty: 'border-color',
    };
  },

  menu: base => {
    return {
      ...base,
      width: '70%',
      [mediaQuery.tablet]: {
        width: '60%',
      },
      right: '0',
      borderRadius: '20px',
      color: colors.textMainColor,
      fontSize: '14px',
      lineHeight: '1.3',
      background: 'rgb(22, 31, 55)',
      overflow: 'hidden',
    };
  },

  input: base => {
    return {
      ...base,
      color: colors.textMainColor,
    };
  },

  valueContainer: base => {
    return {
      ...base,
      color: colors.textMainColor,
      padding: 0,
      margin: 0,
    };
  },

  placeholder: base => {
    return {
      ...base,
      ...fontParams,
      color: colors.grayColor,
    };
  },

  option: (base, state) => {
    return {
      ...base,
      color: state.isFocused ? colors.textMainColor : colors.grayColor,
      backgroundColor: state.isFocused && 'rgb(255 255 255 / 0.2)',
      ':active': {
        backgroundColor: 'rgb(255 255 255 / 0.5)',
      },
      cursor: 'pointer',
    };
  },

  singleValue: base => {
    return {
      ...base,
      color: colors.textMainColor,
    };
  },

  indicatorsContainer: base => {
    return {
      ...base,
      cursor: 'pointer',
    };
  },
};
