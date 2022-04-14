import React from "react";
import styled from "styled-components";
import { TitleSection} from "../components";
 
const AboutPage = () => {
  return (
    <Wrapper>
     
      <TitleSection title="about" />
      <section className="content-section section section-center">
        <img alt="aboutPage-img" />
        <article className="content-article">
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde autem
            doloremque sed nulla ab, hic delectus itaque reprehenderit ea dicta
            illum possimus dolorum fuga dolore repellendus minus deserunt,
            provident sit.
          </p>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .content-section {
    display: flex;
    flex-direction: column;
    img {
      content: var(--url-aboutPage-img);
      weight: 100%;
      height: 500px;
      display: block;
      object-fit: cover;
    }
    article {
      margin-top: 3rem;
      .title {
        text-align: left;
        .underline {
          margin-left: 0;
          margin-bottom: 1.5rem;
        }
      }
    }
  }
  @media (min-width: 992px) {
    .content-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      img {
        content: var(--url-aboutPage-img);
        weight: 100%;
        height: 500px;
        display: block;
        object-fit: cover;
      }
    }
  }
`;

export default AboutPage;
