import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Error from "../UI/Error";
import Loading from "../UI/Loading";
import { useProductsContext } from "../../contexts/products-context";
const FeaturedProducts = () => {
  const {
    featured_products: featuredProducts,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  console.log(featuredProducts);
  return (
    <Wrapper>
      <h2>Featured Products</h2>
      <div className="underline"></div>
      <div className="section-center">
        <Slider featuredProducts={featuredProducts} />
      </div>
      <Link to="/products" className="btn">
        All products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--clr-grey-10);
  padding: 4rem 0;
  align-items: center;
  .section-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    text-align: center;
  }
  .underline {
    display: relative;
    background-color: var(--clr-primary-5);
    color: var(--clr-primary-5);
    height: 0.25rem;
    width: 6rem;
  }
`;
export default FeaturedProducts;
