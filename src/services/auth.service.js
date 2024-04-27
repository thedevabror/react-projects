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
  async updatePassword(password) {
    const { data } = axios.put(`${base_url}user/password`, config, password);
    return data;
  },
  async userWishList(_id) {
    const { data } = await axios.get(`${base_url}user/wishlist`, config, _id);
    return data;
  },
  async userCartAdd(product) {
    const { data } = await axios.post(`${base_url}user/cart`, config, product);
    return data;
  },
  async userCart(_id) {
    const { data } = await axios.get(`${base_url}user/cart`, config, _id);
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
  async emptyCart(product) {
    const { data } = await axios.delete(`${base_url}user/empty-cart`, config, product);
    return data;
  },
  async editUser(user) {
    const { data } = await axios.put(`${base_url}user/edit-user`, config, user);
    return data;
  },
  async saveAddress(address) {
    const { data } = await axios.put(`${base_url}user/save-address`, config, address);
    return data;
  },
  async logOut() {
    const { data } = await axios.get(`${base_url}user/logout`);
    return data;
  },
};

export default AuthService;