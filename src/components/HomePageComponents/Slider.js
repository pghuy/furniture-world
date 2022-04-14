import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import { formatPrice } from "../../utils/helpers";
import {
  AiOutlineSearch,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";

const Slider = (props) => {
  console.log(props.featuredProducts);
  const [featuredProducts, setFeaturedProducts] = useState(
    props.featuredProducts
  );
  const [index, setIndex] = useState(1);
  console.log(featuredProducts);
  useEffect(() => {
    let lastIndex = featuredProducts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, featuredProducts]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Wrapper className="slider">
      <Card>
        {featuredProducts.map((featuredProduct, featuredProductIndex) => {
          let identifier;
          if (featuredProductIndex === index) {
            identifier = "activeSlide";
          }
          if (
            featuredProductIndex === index - 1 ||
            (index === 0 && featuredProductIndex === featuredProduct.length - 1)
          ) {
            identifier = "lastSlide";
          }
          if (
            featuredProductIndex === index + 1 ||
            (index === featuredProduct.length - 1 && featuredProductIndex === 0)
          ) {
            identifier = "nextSlide";
          }
          const clickItemHandler = () => {
            if (identifier === "nextSlide") {
              setIndex(index + 1);
            }
            if (identifier === "lastSlide") {
              setIndex(index - 1);
            }
          };
          return (
            <article className={identifier} key={featuredProduct.id}>
              <div className={`imgOverlayContainer ${identifier}`}>
                <img
                  className={`img ${identifier}`}
                  src={featuredProduct.image}
                  alt="thumbnail"
                />
                <div className="overlay">
                  <div className="container1InsideOverlay">
                    <Link to={`/products/${featuredProduct.id}`}>
                      <AiOutlineSearch className="iconOverlay" />
                    </Link>
                  </div>
                </div>
              </div>
              <div div className="info">
                <h5 className={`name ${identifier}`}>{featuredProduct.name}</h5>
                <p className={`title ${identifier}`}>
                  {formatPrice(featuredProduct.price)}
                </p>
              </div>
            </article>
          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <AiFillCaretLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <AiFillCaretRight />
        </button>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 80vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  .info {
    display: flex;
    justify-content: space-between;
  }
  .name {
    color: var(--clr-font);
    font-size: 1rem;
    margin: 0;
  }

  .title {
    margin: 0;
  }

  .text {
    max-width: 34em;
    margin: auto;
    margin-top: 2em;
    text-align: justify;
  }
  .imgOverlayContainer {
    position: relative;
  }

  .img {
    opacity: 1;
    width: 20vw;
    height: 20vw;
    object-fit: cover;
    border: 1px solid var(--clr-grey-8);
    border-radius: 5%;
    box-shadow: 0px 5px 15px gray;
  }

  .overlay {
    width: 100%;
    height: 100%;
    display: flex;
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

  .container1InsideOverlay {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40%;
    width: 100%;
    height: auto;
  }
  .iconOverlay {
    font-size: 35px;
    padding: 5px;
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
  .prev,
  .next {
    position: absolute;
    background: white;
    color: var(--clr-font);
    width: 1.25rem;
    height: 1.25rem;
    padding: 1rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: 1.4rem;
    cursor: pointer;
    transition: all 0.3s linear;
    text-align: center;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
  .prev {
    left: -12vw;
    /* margin-left: 2rem; */
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: 0.3s;
    transform-box: fill-box;
  }
  .prev:hover {
    transform: scale(2);
    transform-origin: 65% 50%;
    transition: 0.3s;
  }
  .next {
    right: -12vw;
    /* margin-right: 2rem; */
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: 0.3s;
    transform-box: fill-box;
  }

  .next:hover {
    transform: scale(2);
    transform-origin: 65% 50%;
    transition: 0.3s;
  }
  .next:selected {
    color: #f0e9d2;
  }

  article {
    position: absolute;
    width: 100%;
    opacity: 0;
    transition: all 0.2s linear;
    width: 20vw;
    height: fit-content;
    align-items: center;
    text-align: center;
    color: var(--clr-font);
  }

  article.activeSlide {
    opacity: 1;
    z-index: 1;
  }

  article.lastSlide {
    opacity: 1;
    transform: translateX(-30vw);
  }

  article.nextSlide {
    opacity: 1;
    transform: translateX(30vw);
  }

  .imgOverlayContainer.activeSlide:hover .overlay,
  .imgOverlayContainer.lastSlide:hover .overlay,
  .imgOverlayContainer.nextSlide:hover .overlay {
    opacity: 1;
  }
  @media (max-width: 768px){
    .name{
      display: none;
    }
    .title{
      display: none;
    }
    .iconOverlay{
      font-size: 20px;
      padding: 5px;
    }
  }
`;
export default Slider;
