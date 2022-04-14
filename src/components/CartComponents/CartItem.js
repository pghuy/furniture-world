import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../utils/helpers";
import { RiDeleteBin5Fill } from "react-icons/ri";
const CartItem = (props) => {
  const increase = () => {
    props.toggleAmount(props.item.id, "increase");
  };
  const decrease = () => {
    props.toggleAmount(props.item.id, "decrease");
  };
  return (
    <Wrapper key={props.index}>
      <div className="title">
        <img src={props.item.image} />
        <div className="info">
          <h5>{props.item.name}</h5>
          <p className="color">
            Color: <span style={{ background: props.item.color }}> </span>
          </p>
        </div>
      </div>
      <div className="price">{formatPrice(props.item.price)}</div>
      <div className="amount">
        <button onClick={decrease}>-</button>
        <div>{props.item.amount}</div>
        <button onClick={increase}>+</button>
      </div>
      <div className="subtotal">
        {formatPrice(props.item.price * props.item.amount)}
      </div>
      <div className="deleteIcon">
        <RiDeleteBin5Fill
          onClick={() => {
            props.removeItemFromCart(props.item.id);
          }}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr;
  margin-bottom: 1rem;
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  .title {
    height: 100%;
    width: auto;
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-rows: 75px;
    align-items: center;
    text-align: left;
    gap: 1rem;
    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: var(--radius);
      object-fit: cover;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h5{
        font-size: 0.85rem;
        margin-bottom: 0;
      }
      .color{
        margin-bottom:0;
        span{
          display: inline-block;
          width: 1rem;
          height: 1rem;
          margin-left: 0.5rem;
          border-radius: var(--radius);
        }
      }
    }
  }
  @media (min-width: 776px) {
    display: grid;
    grid-template-columns:  auto 1fr 1fr 1fr 0.2fr;
    .title {
    height: 100%;
    width: auto;
    display: grid;
    grid-template-columns: 100px 200px;
    grid-template-rows: 75px;
    align-items: center;
    text-align: left;
    gap: 1rem;
    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: var(--radius);
      object-fit: cover;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h5{
        font-size: 0.85rem;
        margin-bottom: 0;
      }
      .color{
        margin-bottom:0;
        span{
          display: inline-block;
          width: 1rem;
          height: 1rem;
          margin-left: 0.5rem;
          border-radius: var(--radius);
        }
      }
    }
  }
    .price{
      display: flex;
      color: var(--clr-primary-5);
      font-weight: 600;
      align-self:center;
    }
    .subtotal{
      display: flex;
        color: var(--clr-grey-1);
        font-weight: 600;
        align-self: center;
      }
  }
  .amount{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 0rem;
      font-weight: bold;
      font-size: 1.1rem;        
      width: 70%; 
      div,button{
        justify-self: left;
        align-self: center;
        }
      button{
        border-color: transparent;
        background-color: transparent;
        cursor: pointer;
      }
    }
  .deleteIcon{
    display: inline-block;
    color: #b63333;
    align-self: center;
    text-align: right;
    width: fit-content;
    height: fit-content;
    cursor: pointer;
  }
`;

export default CartItem;
