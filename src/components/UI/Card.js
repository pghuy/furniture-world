import styled from "styled-components";
const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0 0;
  width: 80vw;
  height: 35vw;
  max-width: 800px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
`;
export default Card;
