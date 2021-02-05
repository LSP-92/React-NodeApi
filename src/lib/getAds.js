import client from "./axiosGlobal";

const filtersFactory = (filters) => {
  if (!filters) {
    return {};
  }
  const [min, max] = filters.price;
  if (filters.tags === "none") {
    delete filters.tags;
  }
  return {
    ...filters,
    price: `${min}-${max}`,
  };
};

export const getAds = (filters) => {
  const url = "http://127.0.0.1:5000/apiv1/adverts";
  return client.get(url, { params: filtersFactory(filters) });
};

export const getAdByID = (id) => {
  const url = `http://127.0.0.1:5000/apiv1${id}`;
  return client.get(url);
};

export const deleteAds = (id) => {
  const url = `http://127.0.0.1:5000/apiv1${id}`;
  return client.delete(url);
};

export const createAds = (ad) => {
  return client.post("/adverts", ad);
};
