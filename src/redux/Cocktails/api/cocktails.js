import axios from 'axios';

const cocktailsInstans = axios.create({
    baseURL: "https://drinkmaster-backend.onrender.com/api/recipes",
}
);
export const getMyCocktails = () => {
    return cocktailsInstans.get("/search?limit=6")
};

export const getFavorites = () => {
  return cocktailsInstans.get("/favorite?limit=80")
};