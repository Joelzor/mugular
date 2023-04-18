import styled from "styled-components";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { cart } = useAppSelector((store) => store.cart);

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((cartItem) => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button className="link-btn clear-btn">clear shopping cart</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--primary-500);
    color: var(--white);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    font-weight: 400;
    cursor: pointer;
  }

  .clear-btn {
    background: var(--black);
  }
`;

export default CartContent;
