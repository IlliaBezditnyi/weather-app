const requiredField = '* This field is required';

export const emailValidation = {
  required: requiredField,
  validate: (value: string) => {
    if (
      !value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      )
    ) {
      return 'Not valid email';
    }

    return true;
  },
};

export const passwordValidation = {
  required: requiredField,
  validate: (value: string) => {
    if (value.length < 8) {
      return 'Password length must be 8 or more characters';
    }

    return true;
  },
};
