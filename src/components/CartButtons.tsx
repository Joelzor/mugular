import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector } from "../hooks";

const CartButtons = () => {
  const { user, loginWithRedirect, logout } = useAuth0();
  const { totalItems } = useAppSelector((store) => store.cart);

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{totalItems}</span>
        </span>
      </Link>
      {user ? (
        <button
          className="auth-btn"
          type="button"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button
          className="auth-btn"
          type="button"
          onClick={() => loginWithRedirect()}
        >
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--grey-600);
    font-size: 1.5rem;
    letter-spacing: var(--letterSpacing);
    color: var(--grey-600);
    display: flex;

    align-items: center;

    &:hover {
      opacity: 0.75;
    }
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--primary-500);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--grey-600);
    letter-spacing: var(--letterSpacing);
    svg {
      margin-left: 5px;
    }
    &:hover {
      opacity: 0.75;
    }
  }
`;

export default CartButtons;
