import React, { useState } from "react";
import styled from "styled-components";
const ProductImages = ({ imagesCollection = [{ url: "" }] }) => {
  // trường hợp nếu chưa có image[0] ban đầu thì sẽ bị lỗi undefined
  // --> phải cho giá trị ban đầu là { imagesCollection = [{ url: "" }] }
  const [main, setMain] = useState(imagesCollection[0]);
  return (
    <Wrapper className="content">
      <img src={main.url} alt="main" className="main" />
      <div className="gallery">
        {imagesCollection.map((image, index) => (
          <img
            src={image.url}
            key={index}
            alt={image.filename}
            onClick={() => setMain(imagesCollection[index])}
            className={main.filename === image.filename ? "active" : ""}
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 400px;
  }
  img {
    width: 100%;
    display: inline-block;
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    img {
      height: 100px;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .active {
    border: 3px solid var(--clr-primary-5);
  }
  @media (min-width: 992px) {
    .main {
    }
  }
`;

export default ProductImages;
