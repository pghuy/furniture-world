import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { formatPrice } from "../../../utils/helpers";

const GridSingleProductThumbnail = ({ product }) => {
  return (
    <Wrapper key={product.id}>
      <div className={`imgOverlayContainer`}>
        <img className={`img`} src={product.image} alt="thumbnail" />
        <div className="overlay">
          <div className="container1InsideOverlay">
            <Link to={`/products/${product.id}`}>
              <AiOutlineSearch className="iconOverlay" />
            </Link>
          </div>
        </div>
      </div>
      <div div className="info">
        <h5 className={`name`}>{product.name}</h5>
        <p className={`title`}>{formatPrice(product.price)}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    gap: 2vw;
    font-size: 1.2vw;
    .name {
      color: var(--clr-font);
      margin: 0;
      font-size: 1.2vw;
    }
    .title {
      margin: 0;
    }
  }

  .imgOverlayContainer {
    position: relative;
  }
  .img {
    opacity: 1;
    width: 23vw;
    height: 23vw;
    object-fit: cover;
    border: 1px solid var(--clr-grey-8);
    border-radius: 5%;
    box-shadow: 0px 5px 15px gray;
  }
  .overlay {
    width: 23vw;
    height: 23vw;
    display: flex;
    object-fit: cover;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(48, 43, 43, 0.5);
    color: black;
    border-radius: 5%;
  }
  .imgOverlayContainer:hover .overlay {
    opacity: 1;
  }
  .container1InsideOverlay {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40%;
    width: 100%;
    height: auto;
  }
  .iconOverlay {
    font-size: 3vw;
    padding: 0.4vw;
    background-color: #ffffffc3;
    border-radius: 30%;
    color: black;
    cursor: pointer;
  }
  .iconOverlay:hover {
    color: rgb(94, 92, 92);
  }
  .iconOverlay:active {
    color: rgb(182, 174, 174);
  }
  .container2InsideOverlay {
    align-self: flex-start;
    display: flex;
    width: 100%;
    height: auto;
  }
  .tool {
    background-color: rgb(105, 104, 105);
    border-radius: 3px;
    padding: 0.2vw;
    margin-left: 0.1vw;
    color: white;
  }
  .icon {
    color: #678983;
    margin-top: 1em;
    font-size: 3em;
  }
`;

export default GridSingleProductThumbnail;
