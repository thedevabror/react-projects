import axios from "axios";
import { base_url } from "./baseUrl";
import { config } from "./axiosConfig";

const AuthService = {
  async userRegister(user) {
    const { data } = await axios.post(`${base_url}user/register`, user);
    return data;
  },
  async userLogin(user) {
    const { data } = await axios.post(`${base_url}user/login`, user);
    return data;
  },
  async forgotPassword(user) {
    const { data } = await axios.post(
      `${base_url}user/forgot-password-token`,
      user
    );
    return data;
  },
  async userWishList() {
    const { data } = await axios.get(`${base_url}user/wishlist`, config);
    return data;
  },
  async userCartAdd(product) {
    const { data } = await axios.post(`${base_url}user/cart`, config, product);
    return data;
  },
  async userCart(product) {
    const { data } = await axios.get(`${base_url}user/cart`, config, product);
    return data;
  },
  async applyCoupon(coupon) {
    const { data } = await axios.post(
      `${base_url}user/cart/applycoupon`,
      config,
      coupon
    );
    return data;
  },
  async createOrder(product) {
    const { data } = await axios.post(
      `${base_url}user/cart/cash-order`,
      config,
      product
    );
    return data;
  },
  async getOrders(id) {
    const { data } = await axios.get(`${base_url}user/get-orders`, config, id);
    return data;
  },
  async emptyCart() {
    const {data} = await axios.delete(`${base_url}`)
  },
};

export default AuthService;
