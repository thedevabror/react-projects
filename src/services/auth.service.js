import api from "./baseUrl";

const AuthService = {
  async userRegister(user) {
    const { data } = await api.post(`users/register`, user);
    return data;
  },
  async userLogin(user) {
    const { data } = await api.post(`users/login`, user);
    return data;
  },
  async forgotPassword(email) {
    const { data } = await api.post(`users/forgot-password`, { email });
    return data;
  },
  async updatePassword(password) {
    const { data } = api.put(`user/password`, password);
    return data;
  },
  async getUser(id) {
    const data = api.get(`users/${id}`);
    return data;
  },
  async addAddress(address, id) {
    const data = api.put(`users/${id}/address`, address);
    return data;
  },
  async userWishList(_id) {
    const { data } = await api.get(`user/wishlist`, _id);
    return data;
  },
  async userCartAdd(product, idUser) {
    const { data } = await api.post(`users/${idUser}/cart`, product);
    return data;
  },
  async userCart(id) {
    const { data } = await api.get(`users/${id}/cart`);
    return data;
  },
  async applyCoupon(coupon) {
    const { data } = await api.post(`user/cart/applycoupon`, coupon);
    return data;
  },
  async createOrder(product) {
    const { data } = await api.post(`user/cart/cash-order`, product);
    return data;
  },
  async getOrders(id) {
    const { data } = await api.get(`user/get-orders`, id);
    return data;
  },
  async deleteProductCart(id, product) {
    const { data } = await api.delete(`users/${id}/cart/${product}`);
    return data;
  },
  async editUser(user) {
    const { data } = await api.put(`user/edit-user`, user);
    return data;
  },
  async saveAddress(address) {
    const { data } = await api.put(`user/save-address`, address);
    return data;
  },
  async logOut() {
    const { data } = await api.get(`user/logout`);
    return data;
  },
  async chaeckOut(id) {
    const { data } = await api.post(`orders/${id}`);
    return data;
  },
};

export default AuthService;
