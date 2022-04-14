import styled from "styled-components";
import ListSingleProductThumbnail from "./ListSingleProductThumbnail";

const ListViewProducts = (props) => {
  return (
    <Wrapper>
      {props.products.map((product) => (
        <ListSingleProductThumbnail product={product} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
export default ListViewProducts;
