import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper className="page-broadWide">
      <section>
        <h5>404</h5>
        <div>Page can not be found</div>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--clr-primary-4);
  h5 {
    font-size: 10rem;
  }
  div {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
