import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useCartContext } from "../../contexts/cart-context";
import { useProductsContext } from "../../contexts/products-context";
import { useUserContext } from "../../contexts/user-context";
const CartAndLogInOutButton = (props) => {
  const { cart, total_items, clearCart } = useCartContext();
  const { closeSlideBar } = useProductsContext();
  const { loginWithRedirect, currentUser, logout } = useUserContext();
  return (
    <Wrapper className="CartAndLogInOutButtonWrapper cartAndLogInOutButton">
      <Link to="/cart" className="cart-btn" onClick={closeSlideBar}>
        <span className="cart-container">
          Cart <AiOutlineShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {currentUser ? (
        <button
          className="auth-btn"
          onClick={() => {
            clearCart();
            localStorage.removeItem("user");
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout <BiLogOut />
        </button>
      ) : (
        <button className="auth-btn" onClick={loginWithRedirect}>
          Login <BiLogIn />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 225px;
  .cart-btn {
    display: flex;
    color: var(--clr-grey-3);
    flex-direction: row;
    align-items: center;
    font-size: 1.2rem;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    .cart-value {
      position: absolute;
      top: -10px;
      right: -16px;
      background: var(--clr-primary-5);
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.75rem;
      color: var(--clr-white);
      padding: 12px;
    }
  }
  .auth-btn {
    display: flex;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    color: var(--clr-grey-3);
    flex-direction: row;
    align-items: center;
    font-size: 1.2rem;
  }
`;

export default CartAndLogInOutButton;
