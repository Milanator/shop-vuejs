const getFormFieldValue = (input) => {
  if (input.type === "checkbox") {
    return input.checked;
  }

  return input.value;
};

export const getFormData = (id, isUpdate) => {
  const formData = new FormData();

  // laravel - PUT method
  if (isUpdate) {
    formData.append("_method", "PUT");
  }

  document
    .getElementById(id)
    .querySelectorAll(`select,input,textarea`)
    .forEach((input) => formData.append(input.name, getFormFieldValue(input)));

  return Object.fromEntries(formData);
};
