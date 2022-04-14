import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { useCartContext } from "../../contexts/cart-context";
const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const { addToCart } = useCartContext();
  const [pickedColor, setPickedColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const increment = () => {
    setAmount((currAmount) => {
      let amount = currAmount + 1;
      if (amount > stock) {
        return currAmount;
      }
      return amount;
    });
  };
  const decrement = () => {
    setAmount((currAmount) => {
      let amount = currAmount - 1;
      if (amount < 0) {
        return currAmount;
      }
      return amount;
    });
  };
  return (
    <Wrapper>
      <div className="color-counter">
        <div className="colors">
          <span>Color: </span>
          <div className="color-options">
            {colors.map((item, index) => {
              return (
                <button
                  key={index}
                  style={{ background: `${item}` }}
                  onClick={() => setPickedColor(item)}
                  className={`${
                    pickedColor === item
                      ? "color-btn color-active"
                      : "color-btn"
                  }`}
                >
                  {pickedColor === item ? (
                    <AiOutlineCheck className="pickedColorTick" size={20} />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="counter">
          <span>Amount: </span>
          <div className="counter-container">
            <button className="clickCounter" onClick={decrement}>
              -
            </button>
            <h3 className="counterMain">{amount}</h3>
            <button className="clickCounter" onClick={increment}>
              +
            </button>
          </div>
        </div>
      </div>

      <button
        className="btn"
        onClick={() => addToCart(id, pickedColor, amount, product)}
      >
        Add To Cart
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-top: 1px solid;
  .color-counter {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  .colors {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      font-weight: bold;
    }
  }
  .color-options {
    display: flex;
  }
  .color-btn {
    border-radius: 50%;
    border: none;
    height: 30px;
    width: 30px;
    margin-right: 1rem;
    opacity: 0.5;
    align-items: center;
    align-items: center;
    justify-content: center;
  }
  .color-active {
    opacity: 1;
  }
  .pickedColorTick {
    color: white;
    font-weight: bold;
  }

  .counter {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    span {
      font-weight: bold;
    }
    .counter-container {
      display: grid;
      width: 10rem;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1rem;
      align-items: center;
      justify-items: center;
      margin-left: 1rem;
    }
    .counterMain {
      font-size: 2rem;
      margin-bottom: 0;
    }
    .clickCounter {
      background-color: transparent;
      font-size: 1rem;
      cursor: pointer;
      background-color: none;
      border-color: transparent;
    }
  }
  .btn:active {
    animation: bump 0.3s ease-out forwards;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: none;
    }
    30% {
      transform: scale(1.1);
    }
    60% {
      transform: scale(0.8);
    }
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
`;

export default AddToCart;
