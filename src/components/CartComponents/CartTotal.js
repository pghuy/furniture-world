import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { useUserContext } from "../../contexts/user-context";
const CartTotal = (props) => {
  const {loginWithRedirect, currentUser} = useUserContext();
  return (
    <Wrapper>
      <div className="content-container">
        <article className="content-article">
          <h5>
            Subtotal: <span>{formatPrice(props.total_amount)}</span>
          </h5>
          <p>
            Shipping fee: <span>{formatPrice(props.shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Order total:{" "}
            <span>{formatPrice(props.total_amount + props.shipping_fee)}</span>
          </h4>
        </article>
        {currentUser ?  <Link to="/checkout" className="checkout btn">
          Proceed To Checkout
        </Link> : <div  className="nullcheckout btn" onClick={loginWithRedirect}>Login here to checkout</div>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  .content-container {
    width: auto;
    .content-article {
      padding: 2rem;
      margin-bottom: 1rem;
      border: 1px solid var(--clr-grey-7);
      border-radius: 0.2rem;
      h5,
      p,
      h4 {
        display: grid;
        grid-template-columns: 200px 1fr;
      }
      h4 {
        margin-top: 1.5rem;
        margin-bottom: 0rem;
        font-size: 1.5rem;
      }
    }
    .checkout {
      width: 100%;
      text-align: center;
    }
    .nullcheckout{
      width: 100%;
      text-align: center;
      disabled
    }
  }  
  @media (max-width: 776px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default CartTotal;
