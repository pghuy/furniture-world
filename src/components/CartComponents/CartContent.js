import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";
const CartContent = (props) => {
  return (
    <Wrapper className="section-center section">
      <div className="content-container">
        <div className="content">
          <h5>item</h5>
          <h5>price</h5>
          <h5>quantity</h5>
          <h5>subtotal</h5>
          <span></span>
        </div>
        <hr />
      </div>
      <div className="cart-products">
        {props.cart.map((item, index) => {
          return (
            <CartItem
              item={item}
              index={index}
              addToCart={props.addToCart}
              removeItemFromCart={props.removeItemFromCart}
              toggleAmount={props.toggleAmount}
            />
          );
        })}
      </div>
      <hr className="hr" />
      <div className="link-container">
        <Link to={"/products"} className="btn">
          Countinue Shopping
        </Link>
        <button
          className="btn clear-btn"
          onClick={() => {
            props.clearCart();
          }}
        >
          Clear Shopping Cart
        </button>
      </div>
      <CartTotal
        total_amount={props.total_amount}
        total_items={props.total_items}
        shipping_fee={props.shipping_fee}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content-container {
    margin-bottom: 3rem;
  } 
  .content{
    display: none;
  }
  .hr {
    margin-top: 3rem;
  }
  .link-container {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .clear-btn {
    color: white;
    background-color: #a82d2d;
  }
  @media (min-width: 776px) {
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr 0.2fr;
    h5 {
      color: var(--clr-grey-6);
      font-weight: 400;
    }
  }
`;

export default CartContent;
