import axios from "axios";

// Base URL of your backend
const BASE_URL = "http://localhost:8080";

// Create axios instance (better practice)
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});




// Get all products
export const getProducts = () => {
  return api.get("/products");
};

// Add new product
export const addProduct = (product) => {
  return api.post("/products", product);
};




// Register user
export const registerUser = (user) => {
  return api.post("/users/register", user);
};

// Login user
export const login = (user) => {
  return api.post("/users/login", user);
};



export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};

// Example: update product
export const updateProduct = (id, product) => {
  return api.put(`/products/${id}`, product);
};
