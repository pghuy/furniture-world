import React from "react";
import styled from "styled-components";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  console.log(stars, reviews);
  const starArr = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <h4 className="stars">{starArr}</h4>
      <h5>({reviews} customer reviews)</h5>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  .stars {
    color: rgb(255, 185, 0);
    margin-right: 1rem;
  }
`;

export default Stars;
