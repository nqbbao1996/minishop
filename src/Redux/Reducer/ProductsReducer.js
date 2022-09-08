import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_PRODUCTS_BY_CATEGORY,
} from "../types";

const ProductsReducerInitialState = {
  products: [],
  Product: [],
};
const ProductsReducer = (state = ProductsReducerInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };

    case GET_PRODUCT_BY_NAME:
      return { ...state, product: payload };

    case GET_PRODUCTS_BY_CATEGORY:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default ProductsReducer;
