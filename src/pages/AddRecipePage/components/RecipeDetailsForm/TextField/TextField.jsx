import { forwardRef } from 'react';
import { func, string, number, oneOfType, object } from 'prop-types';
import { IconClose } from '../../../../../styles/icons';
import { ClearBtn, InputWrapper, Input, Field } from './TextField.styled';

// eslint-disable-next-line react/display-name
export const TextField = forwardRef(
  (
    // eslint-disable-next-line react/prop-types
    {
      value,
      type,
      onChange,
      disabled,
      inputOverride: InputStyled,
      ...restProps
    },
    ref /* after props */
  ) => {
    // eslint-disable-next-line no-unused-vars
    const InputComp = InputStyled || Input;
    return (
      <Field disabled={disabled}>
        <InputWrapper>
          <InputComp
            ref={ref}
            type={type || 'text'}
            onChange={onChange}
            value={value}
            {...restProps}
          />

          {value && (
            <ClearBtn type="button" onClick={() => onChange(null)}>
              <IconClose size="80%" />
            </ClearBtn>
          )}
        </InputWrapper>
      </Field>
    );
  }
);

TextField.propTypes = {
  value: string,
  type: string,
  onChange: func,
  fieldStyle: object,
  inputStyle: object,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
};
