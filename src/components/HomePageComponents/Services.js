import React from "react";
import styled from "styled-components";
import { services } from "../../utils/constants";
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="service-message">
          <h3>
            Taylor your furniture <br /> Your Home We Build
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            provident molestias eius, dicta mollitia quo velit reprehenderit
            assumenda fugiat eos voluptatum dolorem excepturi illum. Perferendis
            ex eaque quae aliquam quidem?
          </p>
        </div>
        <div className="services">
          {services.map((item) => {
            return (
              <div className="service-item">
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: var(--clr-primary-4);
  .service-message {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .services {
    display: grid;
    gap: 1rem;
    margin-top: 5rem;
  }
  .service-item {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    background-color: var(--clr-primary-3);
    p {
      margin: 0;
    }
    span {
      height: 4rem;
      width: 4rem;
      display: grid;
      margin: 0 auto 1rem;
      place-items: center;
      border-radius: 50%;
      background-color: white;
      svg {
        font-size: 2rem;
      }
    }
  }
  @media (min-width: 992px) {
    .service-message {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .services {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      margin-top: 5rem;
    }
  }
  @media (min-width: 576px) {
    .services {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
    .services {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      margin-top: 5rem;
    }
  }
`;
export default Services;
