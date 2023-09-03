import axios from 'axios';

const baseURL = 'https://drinkmaster-backend.onrender.com';

export const getCocktails = async () => {
  const { data } = await axios.get(
    `${baseURL}/api/recipes/search?limit=80`
    // recipes/search&favorite
    // recipes/search&own
  );
  console.log(data)
  return data.hits;
};