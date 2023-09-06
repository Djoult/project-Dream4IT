import axios from 'axios';

const cocktailsInstans = axios.create({
    baseURL: "https://drinkmaster-backend.onrender.com/api/recipes",
}
);
export const getMyCocktails = () => {
    return cocktailsInstans.get("/own")
};

export const getFavorites = () => {
  return cocktailsInstans.get("/favorite")
};