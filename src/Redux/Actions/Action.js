import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_PRODUCTS_BY_CATEGORY,
} from "../types";

const productsApi = "https://fakestoreapi.com";

export const getProducts = () => async (dispatch) => {
  await axios
    .get(productsApi + "/products")
    .then((res) => {
      const products = res.data.map((product) => ({
        id: product.id,
        name: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      }));
      dispatch({ type: GET_PRODUCTS, payload: products });
    })
    .catch((err) => {
      console.log("get products api error: ", err);
    });
};
//GET_PRODUCT_BY_NAME
export const getProductByName = (id) => async (dispatch) => {
  await axios
    .get(`${productsApi}/products/${id}`)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_BY_NAME, payload: res.data[0] });
    })
    .catch((error) => console.log("get products name api error: ", error));
};
////GET_PRODUCTS_BY_CATEGORY
export const getProductsByCategory = (categoryName) => async (dispatch) => {
  await axios
    .get(`${productsApi}/products/category/${categoryName}`)
    .then((res) => {
      const products = res.data.map((product) => ({
        id: product.id,
        name: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      }));
      dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: products });
    })
    .catch((err) => {
      console.log("get products by category api error: ", err);
    });
};
