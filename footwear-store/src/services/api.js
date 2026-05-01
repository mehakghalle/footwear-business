import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getProducts = (params) => API.get("/products/", { params });
export const getProduct = (id) => API.get(`/products/${id}/`);

export const getCart = () => API.get("/cart/");
export const addToCartAPI = (data) => API.post("/cart/add/", data);
export const updateCartAPI = (id, action) =>
  API.post(`/cart/update/${id}/`, { action });
export const deleteCartAPI = (id) => API.delete(`/cart/delete/${id}/`);

export const placeOrderAPI = (data) => API.post("/order/place/", data);

export default API;