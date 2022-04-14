import { Link } from "react-router-dom";
import styled from "styled-components";
const EmptyProduct = () => {
  return (
    <Wrapper className="content">
      <h2>Your cart is empty</h2>
      <Link to="/products" className="btn">
        Fill it
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;
export default EmptyProduct;
