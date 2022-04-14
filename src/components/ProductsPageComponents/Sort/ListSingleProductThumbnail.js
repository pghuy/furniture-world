import styled from "styled-components";
import { formatPrice } from "../../../utils/helpers";
import { Link } from "react-router-dom";
const ListSingleProductThumbnail = ({ product }) => {
  return (
    <Wrapper>
      <img className={`img`} src={product.image} alt="thumbnail" />
      <div className="content">
        <h4>{product.name}</h4>
        <div className="price">{formatPrice(product.price)}</div>
        <p>{product.description.slice(0, 200)}</p>
        <Link to={`/products/${product.id}`} className="btn">
          Detail
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  .img {
    opacity: 1;
    max-height: 20vw;
    min-height: 20vw;
    max-width: 20vw;
    min-width: 20vw;
    /* overflow: hidden; */
    object-fit: cover;
    border: 1px solid var(--clr-grey-8);
    border-radius: 5%;
    box-shadow: 0px 5px 15px gray;
  }
  .content {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    .price {
      margin-bottom: 1rem;
      color: var(--clr-primary-5);
      font-weight: bold;
    }
  }
  .btn {
    width: 5rem;
    text-align: center;
  }
`;
export default ListSingleProductThumbnail;
