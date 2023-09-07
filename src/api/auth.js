import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://drinkmaster-backend.onrender.com',
  //baseUrl: 'http://localhost:3000',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
// export const setHeaders = (file) => {
//   instance.defaults.headers.common["content-type"] = file.type;
//   instance.defaults.headers.common["content-length"] = `${file.size}`;
// };

export const callGetApi = async url => {
  const { data } = await instance.get(url);
  if ('token' in data) setToken(data.token);
  return data;
};

export const callApi = async (url, payload, method = 'POST', headers = {}) => {
  const { data } = await instance({
    url,
    method,
    data: payload,
    headers,
  });
  if ('token' in data) setToken(data.token);
  return data;
};

// export const getCurrent = async (url) => {
//   const response = await instance.get(url);
//   return response.data;
// };
