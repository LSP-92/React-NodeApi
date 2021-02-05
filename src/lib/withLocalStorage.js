export const setDataLocal = (data) => {
  localStorage.setItem("token", JSON.stringify(data));
};

export const clearLocal = () => {
  localStorage.clear();
};

export const getLocalData = (item) => {
  return localStorage.getItem(item);
};
