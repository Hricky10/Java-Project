import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getProducts = () => axios.get(BASE_URL + "/products");

export const addProduct = (data) =>
  axios.post(BASE_URL + "/products", data);

export const login = (data) =>
  axios.post(BASE_URL + "/users/login", data);
