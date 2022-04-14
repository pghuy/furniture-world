import React from "react";
import styled from "styled-components";
import { TitleSection, CartContent, EmptyProduct } from "../components";
import { useCartContext } from "../contexts/cart-context";

const CartPage = () => {
  const {
    addToCart,
    removeItemFromCart,
    toggleAmount,
    cart,
    total_amount,
    total_items,
    shipping_fee,
    clearCart,
  } = useCartContext();
  return (
    <Wrapper>
      <TitleSection title="Cart" />
      <div>
        {cart.length > 0 ? (
          <CartContent
            cart={cart}
            total_amount={total_amount}
            total_items={total_items}
            shipping_fee={shipping_fee}
            addToCart={addToCart}
            removeItemFromCart={removeItemFromCart}
            toggleAmount={toggleAmount}
            clearCart={clearCart}
          />
        ) : (
          <EmptyProduct />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default CartPage;
