import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { CartContent } from "../components";

const Cart = () => {
  const { cart } = useAppSelector((store) => store.cart);

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            shop
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;

    h2 {
      margin-bottom: 2rem;
      text-transform: none;
    }
  }
`;

export default Cart;
