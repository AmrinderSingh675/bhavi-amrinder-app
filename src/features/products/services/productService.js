import { baseApiService } from "../../../app/api/baseApiService";
import { API_ENDPOINTS } from "../../../app/constants/apiEndpoints";

export const productService = {
  createProduct(data) {
    //debugger;
    //console.log(API_ENDPOINTS.PRODUCTS.CREATE);
    //console.log(data);
    return baseApiService.post(
      API_ENDPOINTS.PRODUCTS.CREATE,
      data
    );
  },

  updateProduct(data) {
    return baseApiService.put(
      API_ENDPOINTS.PRODUCTS.UPDATE,
      data
    );
  },

  
  getProduct(id) {
    return baseApiService.get(
      API_ENDPOINTS.PRODUCTS.GET_BY_ID(id)
    );
  },

  getProducts(data) {
    return baseApiService.get(
      API_ENDPOINTS.PRODUCTS.GET_ALL,
      data
    );
  },

  deleteProduct(data) {
    return baseApiService.delete(
      API_ENDPOINTS.PRODUCTS.DELETE,
      data
    );
  },
};