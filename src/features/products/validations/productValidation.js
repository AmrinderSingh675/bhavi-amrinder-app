export const validateProduct = (form) => {
  const errors = {};
  if (!form.name) {
    errors.name = "Name is required";
  }
  if (!form.price) {
    errors.price = "Price is required";
  }
  return errors;
};