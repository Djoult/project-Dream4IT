export const isStr = v => typeof v === 'string';
export const isFunc = v => typeof v === 'function';
export const isNum = v => !isNaN(v - parseFloat(v));
export const isInt = v => Number.isInteger(+v);
export const isPositiveInt = v => isInt(v) && v > 0;
export const isEmptyObj = v => v && !Object.keys(v).length;
export const isArray = v => Array.isArray(v);
export const isNonEmptyArray = v => isArray(v) && v.length;

export const fitIntoRange = (value, min, max, defValue) => {
  value = isNum(value) ? value : defValue;
  min = isNum(min) ? min : -Infinity;
  max = isNum(max) ? max : Infinity;
  return Math.max(min, Math.min(max, value));
};
