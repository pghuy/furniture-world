import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TitleSection, EmptyProduct, StripeCheckout } from "../components";
import { useCartContext } from "../contexts/cart-context";
const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <TitleSection title="Checkout" />
      <Wrapper className='page'>
        {cart.length > 0 ? <StripeCheckout /> : <EmptyProduct />}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;
