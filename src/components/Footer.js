import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy;{new Date().getFullYear()}
        <span>FurnitureWorld</span>
      </h5>
      <h5>All right reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-primary-2);
  h5 {
    color: white;
    margin: 0;
  }
  span {
    margin-left: 0.5rem;
    color: var(--clr-primary-6);
    font-weight: bold;
  }
`;

export default Footer;
