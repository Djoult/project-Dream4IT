import axios from "axios";

export const instance = axios.create({
  baseURL: "https://drinkmaster-backend.onrender.com/",
});

export const setToken = (token) => {
  instance.defaults.headers.common["Authorization"] = token;
};

export const callGetApi = async (url) => {
  const { data } = await instance.get(url);
  if ("token" in data) setToken(data.token);
  return data;
};

export const callApi = async (url, payload, method = "POST") => {
  const { data } = await instance({
    url,
    method,
    data: payload,
  });
  if ("token" in data) setToken(data.token);
  return data;
};
