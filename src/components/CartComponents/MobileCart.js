import { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useCartContext } from "../../contexts/cart-context";
import { Link } from "react-router-dom";
const MobileCart = () => {
  const { total_items } = useCartContext();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  useEffect(() => {
    if (total_items === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [total_items]);
  const btnClasses = `${btnIsHighlighted ? "bump" : ""}`;
  return (
    <Wrapper>
      <Link to="/cart" className={`${btnClasses} cart-container`}>
        <AiOutlineShoppingCart size={40} className="mobile-cart-icon" />
        <span className="cart-value">{total_items}</span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  bottom: 30px;
  color: black;
  .cart-container {
    display: flex;
    position: relative;
    align-items: center;
    left: 88vw;
    bottom: 0vh;
    width: fit-content;
    border-radius: 50%;
    background-color: #dee8e0;
    padding: 0.5rem;
    .mobile-cart-icon {
      color: #5e5c5c;
      border-radius: 2px;
      padding: 5px;
    }
    .cart-value {
      position: absolute;
      background: var(--clr-primary-5);
      top: -10px;
      right: -10px;
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
  .bump {
    animation: bump 300ms ease-out;
  }
  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default MobileCart;
