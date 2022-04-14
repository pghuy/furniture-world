import React, { useContext, useReducer, useEffect } from "react";
import productsReducer from "../reducers/products-reducer";
import {
  products_url as url,
  single_product_url as single_url,
} from "../utils/constants";
const initialState = {
  isSlideBarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const openSlideBar = () => {
    dispatch({ type: "OPEN_SLIDEBAR" });
  };
  const closeSlideBar = () => {
    dispatch({ type: "CLOSE_SLIDEBAR" });
  };
  const fetchAllProducts = async () => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: data });
    } catch (e) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
    }
  };

  const fetchSingleProduct = async (id) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_BEGIN" });
    try {
      const response = await fetch(`${single_url}${id}`);
      const data = await response.json();
      console.log(data);
      dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: data });
    } catch (e) {
      dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <ProductsContext.Provider
      value={{ ...state, openSlideBar, closeSlideBar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
