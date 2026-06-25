export const validateLogin = (form) => {
  const errors = {};

  if (!form.email) {
    errors.email = "Email is required";
  }

  if (!form.password) {
    errors.password = "Password is required";
  }

  if (
    form.password &&
    form.password.length < 6
  ) {
    errors.password =
      "Password must be at least 6 characters";
  }

  return errors;
};