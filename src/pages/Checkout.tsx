import styled from "styled-components";
import { StripeCheckout } from "../components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";

const Checkout = () => {
  const { cart } = useAppSelector((store) => store.cart);

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            Shop
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="page-100">
      <StripeCheckout />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .empty {
    text-align: center;

    h2 {
      margin-bottom: 2rem;
      text-transform: none;
    }
  }
`;

export default Checkout;
