import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Overview = () => {
  return (
    <Wrapper className="section-center">
      <article className="overview-content">
        <h1>Your home, your choice</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          necessitatibus mollitia est, odio voluptates ducimus quibusdam at
          placeat velit, ipsum a? Possimus voluptatem ad ab amet rem,
          perspiciatis corrupti nisi!
        </p>
        <Link to="/products" className="btn">
          Shop now
        </Link>
      </article>
      <article className="img-content">
        <img
          src="https://i.imgur.com/vBGe1ui.jpg"
          alt="main-img"
          className="main-img"
        />
        {/* <img
          src="https://i.imgur.com/I7RG3mC.jpg"
          alt="sub-img"
          className="sub-img"
        /> */}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  min-height: 60vh;
  place-items: center;
  .overview-content {
    p {
      max-width: 70vw;
    }
  }

  .img-content {
    display: none;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 0rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    .img-content {
      display: block;
      position: relative;
      .main-img {
        height: 450px;
        weight: 400px;
        position: relative;
        display: block;
        object-fit: cover;
        border-radius: 2rem;
      }
      /* .sub-img {
        position: absolute;
        height: 200px;
        weight: 400px;
        transform: translateX(-50%);
        bottom: 0;
        left: 0;
      } */
    }
    .img-content::before {
      content: "";
      position: absolute;
      width: 90%;
      height: 80%;
      background: var(--clr-primary-4);
      bottom: -5%;
      left: -8%;
      border-radius: 2rem;
    }
  }
`;
export default Overview;
