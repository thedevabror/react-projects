import api from "./baseUrl";

const ProductService = {
  async getCategories() {
    const { data } = await api.get(`categories`);
    return data;
  },
  async getAllProducts() {
    const { data } = await api.get(`products`);
    return data;
  },

  async getSingleProduct(id) {
    const { data } = await api.get(`products/${id}`);
    return data;
  },
  async getSingleCategory(id) {
    const { data } = await api.get(`category/${id}`);
    return data;
  },

  async addToWishlist() {
    const { data } = await api.put(`product/wishlist`);
    return data;
  },
  async addRating() {
    const { data } = await api.put(`product/rating`);
    return data;
  },
  // async getColor() {
  //   const { data } = await api.get(`color`);
  //   return data
  // },
};

export default ProductService;
