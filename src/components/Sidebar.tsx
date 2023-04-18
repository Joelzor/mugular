import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import CartButtons from "./CartButtons";
import { useAppSelector, useAppDispatch } from "../hooks";
import { closeSidebar } from "../features/sidebar/sidebarSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.sidebar);
  const dispatch = useAppDispatch();
  const { user } = useAuth0();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <h3>
            <span className="logo-span">mug</span>ular
          </h3>
          <button
            className="close-btn"
            type="button"
            onClick={() => dispatch(closeSidebar())}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li>
            <Link to="/" onClick={() => dispatch(closeSidebar())}>
              home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => dispatch(closeSidebar())}>
              about
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => dispatch(closeSidebar())}>
              products
            </Link>
          </li>
          {user && (
            <Link to="/checkout" onClick={() => dispatch(closeSidebar())}>
              checkout
            </Link>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;

  .logo-span {
    color: var(--primary-500);
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;

    h3 {
      margin-top: 20px;
      font-weight: 600;
      text-transform: none;
    }
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    transition: var(--transition);
    cursor: pointer;
    color: var(--red-dark);
    margin-top: 0.2rem;
  }

  .close-btn:hover {
    color: var(--red-light);
  }

  .logo {
    justify-self: center;
    height: 45px;
  }

  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--grey-600);
    transition: var(--transition);
    letter-spacing: var(--letterSpacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2.5rem;
    background: var(--grey-200);
    color: var(--grey-700);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 100;
  }

  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
