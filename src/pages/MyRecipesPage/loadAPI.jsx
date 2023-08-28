import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'dbfd52a630db0a4b391a78e271099a07';

 const getAllCocktails = async () => {
  const { data } = await axios.get(
    `${baseURL}/trending/movie/day?api_key=${KEY}`
  );
  return data.results;
};

export default getAllCocktails;