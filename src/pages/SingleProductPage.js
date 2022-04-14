import React, { useEffect } from "react";
import styled from "styled-components";
import {
  TitleSection,
  ProductImages,
  Stars,
  AddToCart,
  Loading,
  Error,
  MobileCart,
} from "../components";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../contexts/products-context";
import { useCartContext } from "../contexts/cart-context";
import { formatPrice } from "../utils/helpers";
const SingleProductPage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleProduct,
    single_product_loading: loading,
    single_product_error: error,
    single_product,
  } = useProductsContext();
  const { total_items } = useCartContext();
  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
      console.log(error);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  console.log(single_product);
  const {
    images,
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
  } = single_product;
  const onTotalItemsChangeHandler = (e) => {};
  return (
    <Wrapper>
      <TitleSection product title={name} />
      <div className="section-center">
        <Link className="btn" to="/products">
          Back to Products
        </Link>
        <div className="product-center">
          <ProductImages imagesCollection={images} className="image" />
          <section className="content">
            <h1>{name}</h1>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p>{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            {stock > 0 && <AddToCart product={single_product} />}
          </section>
        </div>
        <MobileCart
          className={total_items > 0 ? "mobile-cart" : "mobile-cart-hide"}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    padding: 4rem 0;
    padding-bottom: 2rem;
  }
  .product-center {
    padding-top: 2rem;
    display: grid;
  }
  .content {
    margin-top: 2rem;
  }
  .price {
    font-size: 2rem;
    color: var(--clr-primary-1);
  }
  .info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    span {
      font-weight: bold;
    }
  }
  .mobile-cart {
    opacity: 1;
  }
  .mobile-cart-hide {
    opacity: 0;
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
    }
  }
`;

export default SingleProductPage;
