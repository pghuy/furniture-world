import React from "react";
import styled from "styled-components";
import {
  TitleSection,
  ProductsList,
  SortMenu,
  FilterContent,
  MobileCart,
} from "../components";
const ProductsPage = () => {
  return (
    <Wrapper>
      <TitleSection title="Products" />
      <div className="section-center products">
        <FilterContent />
        <div>
          <SortMenu />
          <ProductsList />
        </div>
      </div>
      <MobileCart />
    </Wrapper>
  );
};

const Wrapper = styled.section`
margin-bottom: 2rem;
  .products {
    display: grid;
    grid-template-columns: 20% 80%;
    margin-top: 4rem;
  }  

  @media (max-width: 980px) {
    .products {
      grid-template-columns: 1fr;
    }
`;

export default ProductsPage;
