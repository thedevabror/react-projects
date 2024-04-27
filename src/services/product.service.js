import axios from "axios";
import { base_url } from "./baseUrl";
import { config } from "./axiosConfig";

const ProductService = {
  async getAllProducts() {
    const { data } = await axios.get(`${base_url}product`);
    return data;
  },

  async getSingleProduct(id){
    const { data } = await axios.get(`${base_url}product/${id}`);
    return data;
  }
};

export default ProductService;
