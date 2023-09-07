export const TITLE_MAX = 150;
export const ABOUT_MAX = 350;
export const INSTRUCTIONS_MAX = 2500;
export const MEASURE_MIN = 3;

export const formValidation = {
  drink: {
    pattern: '^[A-Za-z0-9][A-Za-z0-9-\\s\\.]{2,}$',
    message: [
      `Must be at least 3 characters long`,
      `start with a letter or number,`,
      `contain spaces, dashes, numbers, dots and latin letters`,
      `(e.g. "Irish Coffee" or "7-Up")`,
    ].join(' '),
    max: TITLE_MAX,
  },

  about: {
    pattern: `^[A-Za-z0-9][\\s\\w\\.,"']{24,}$`,
    message: [
      `Must be at least 25 characters long,`,
      `start with a letter or number,`,
      `contain spaces, numbers, latin letters,`,
      `and the following characters: .,"`,
    ].join(' '),
    max: ABOUT_MAX,
  },

  measure: {
    pattern: '^\\d+\\s*[a-z]+$',
    message: [
      `Must be at least 3 characters,`,
      `start with a number followed by a unit of measure`,
      `(e.g. 2 oz)`,
    ].join(' '),
    min: MEASURE_MIN,
  },

  instructions: {
    pattern: `^[A-Za-z0-9][\\s\\w-\\.,:;!'"()\\/\\n\\r]{49,}$`,
    message: [
      `Must be at least 50 characters long,`,
      `start with a letter or number,`,
      `contain spaces, dashes, numbers, latin letters,`,
      `and the following characters: .,:;!"()\\/`,
    ].join(' '),
    max: INSTRUCTIONS_MAX,
  },
};
