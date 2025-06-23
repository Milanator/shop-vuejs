const getFormFieldValue = (input: Element) => {
  if (input.type === "checkbox") {
    return input.checked;
  }
  console.log(input.type, input.files);
  if (input.type === "file") {
    return input.files[0];
  }

  return input.value;
};

export const getFormData = (id: string, isUpdate: any) => {
  const formData = new FormData();

  // laravel - PUT method
  if (isUpdate) {
    formData.append("_method", "PUT");
  }

  document
    .getElementById(id)
    .querySelectorAll(`select,input,textarea`)
    .forEach((input: Element) =>
      formData.append(input.name, getFormFieldValue(input))
    );

  return Object.fromEntries(formData);
};

export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setLocalStorage = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getQueryParam = (url: string, attribute: string) => {
  const params = new URL(url).searchParams;

  return params.get(attribute);
};

export const apiBaseUrl = (path: string = "") =>
  import.meta.env.VITE_API_URL + path;
