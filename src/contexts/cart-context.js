import React, { useReducer, useContext, useEffect } from "react";
import cart_reducer from "../reducers/cart-reducer";

const getCartFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getCartFromLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, value } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "RECOUNT_CART_TOTAL" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItemFromCart,
        toggleAmount,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
