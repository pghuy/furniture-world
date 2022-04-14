import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const titleSection = (props) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h5>
          <Link to="/">Home</Link>
          {props.product && <Link to="/products">/ Products</Link>}/{" "}
          {props.title}
        </h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  height: 10rem;
  background-color: var(--clr-primary-4);
  align-items: center;
  h5 {
    font-size: 1.5rem;
    margin: 0;
    a {
      color: var(--clr-primary-2);
    }
  }
`;

export default titleSection;
