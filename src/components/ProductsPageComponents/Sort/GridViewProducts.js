import styled from "styled-components";
import GridSingleProductThumbnail from "./GridSingleProductThumbnail";

const GridViewProducts = (props) => {
  return (
    <Wrapper>
      {props.products.map((product) => (
        <GridSingleProductThumbnail product={product} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
export default GridViewProducts;
