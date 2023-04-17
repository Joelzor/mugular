import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import Amounts from "./Amounts";
import { FaTrash } from "react-icons/fa";
import { toggleAmounts } from "../features/cart/cartSlice";
import { useAppDispatch } from "../hooks";

interface CartItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
  amount: number;
}

const CartItem = ({ id, image, name, price, amount }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const increase = () => {
    dispatch(toggleAmounts({ id, type: "increase" }));
  };

  const decrease = () => {
    dispatch(toggleAmounts({ id, type: "decrease" }));
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <Amounts amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button className="remove-btn" type="button">
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;

  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--borderRadius);
    object-fit: cover;
  }

  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .price-small {
    color: var(--primary-500);
  }

  .price {
    display: none;
  }

  .amount-btns {
    width: 75px;

    button {
      width: 1rem;
      height: 0.8rem;
      font-size: 1rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  .subtotal {
    display: none;
  }

  .remove-btn {
    color: var(--white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--letterSpacing);
    background: var(--red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--borderRadius);
    font-size: 0.75rem;
    cursor: pointer;
  }

  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;

    img {
      height: 100%;
    }

    .title {
      height: 100%;
      grid-template-columns: 100px 200px;
    }

    .price-small {
      display: none;
    }

    .name {
      font-size: 1rem;
    }

    .price {
      display: block;
      font-size: 1.2rem;
      color: var(--primary-500);
      font-weight: 400;
    }

    .amount-btns {
      width: 100px;

      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }

    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--grey-500);
      font-weight: 400;
      font-size: 1.2rem;
    }
  }
`;

export default CartItem;
