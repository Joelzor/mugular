import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";
import { useAppDispatch } from "../hooks.tsx";
import { openSidebar } from "../features/sidebar/sidebarSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth0();

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <h3>Mugular</h3>
          <button
            className="nav-toggle"
            onClick={() => dispatch(openSidebar())}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          {user && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
    h3 {
      margin-top: 24px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--grey-600);
        font-size: 1.1rem;
        text-transform: capitalize;
        letter-spacing: var(--letterSpacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--primary-500);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
