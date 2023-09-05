import axios from "axios";

export const instance = axios.create({
  baseURL: "https://drinkmaster-backend.onrender.com",
});

export const fetchRecipeById = async (id) => {
    const response = await instance.get(`/api/recipes/own/${id}`);

    return response.data;
}