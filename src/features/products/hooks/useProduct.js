
import { productService } from "../services/productService";

export const useProduct = () => {
  const createProduct = async (product) => {
    try {
        debugger;
      const result = await productService.createProduct(product);
      debugger;
      if (!result.success) {
        return false;
      }
      return true;
    } catch (error) {
      return false; 
    }
  };

  const updateProduct = async (product) => {
    try {
      const result = await productService.updateProduct(product);
      if (!result.success) {
        return false;
      }
      return true;
    } catch (error) {
      return false; 
    }
  };

  const getProduct = async (id) => {
    try {
      const result = await productService.getProduct(id);
      if (!result.success) {
        return false;
      }
      return result.data;
    } catch (error) {
      return false; 
    }
  };

  const getProducts = async (product) => {
    try {
      const result = await productService.getProducts(product);
      if (!result.success) {
        return [];
      }
      return result.data;
    } catch (error) {
      return false; 
    }
  };

  const deleteProduct = async (product) => {
    try {
      const result = await productService.deleteProduct(product);
      if (!result.success) {
        return false;
      }
      return true;
    } catch (error) {
      return false; 
    }
  };
  //debugger;
  return {
    createProduct,
    updateProduct,
    getProduct,
    getProducts,
    deleteProduct
  };
};