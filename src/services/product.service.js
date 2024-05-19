import axios from "axios";
import { base_url } from "./baseUrl";
import { config } from "./axiosConfig";

const ProductService = {
  async getCategories() {
    const { data } = await axios.get(`${base_url}categories`);
    return data;
  },
  async getAllProducts() {
    const { data } = await axios.get(`${base_url}products`);
    return data;
  },

  async getSingleProduct(id) {
    const { data } = await axios.get(`${base_url}products/${id}`);
    return data;
  },
  async getSingleCategory(id) {
    const { data } = await axios.get(`${base_url}category/${id}`);
    return data;
  },

  async addToWishlist() {
    const { data } = await axios.put(`${base_url}product/wishlist`, config);
    return data;
  },
  async addRating() {
    const { data } = await axios.put(`${base_url}product/rating`, config);
    return data;
  },
  // async getColor() {
  //   const { data } = await axios.get(`${base_url}color`);
  //   return data
  // },
};

export default ProductService;
