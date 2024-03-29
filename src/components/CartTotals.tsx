import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { useAuth0 } from "@auth0/auth0-react";

const CartTotals = () => {
  const { totalAmount, shippingFee } = useAppSelector((store) => store.cart);
  const { user, loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div>
        <article>
          <p>
            subtotal: <span>{formatPrice(totalAmount)}</span>
          </p>
          <p>
            shipping fee: <span>{formatPrice(shippingFee)}</span>
          </p>
          <hr />
          <h4>
            order total: <span>{formatPrice(totalAmount + shippingFee)}</span>
          </h4>
        </article>
        {user ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <button
            type="button"
            onClick={() => loginWithRedirect()}
            className="btn"
          >
            log in
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  article {
    border: 1px solid var(--grey-800);
    border-radius: var(--borderRadius);
    padding: 1.5rem 3rem;
  }

  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }

  p {
    text-transform: capitalize;
  }

  h4 {
    margin-top: 2rem;
  }

  @media (min-width: 776px) {
    justify-content: flex-end;
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
