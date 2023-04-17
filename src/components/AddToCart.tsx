import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Amounts from "./Amounts";
import { addToCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../hooks";

interface AddToCartProps {
  product: {
    id: string;
    stock: number;
  };
}

const AddToCart = (props: AddToCartProps) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useAppDispatch();

  const { id, stock } = props.product;

  const product = props.product;

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }

      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <Amounts amount={amount} increase={increase} decrease={decrease} />
        <Link
          to="/cart"
          className="btn"
          onClick={() => dispatch(addToCart({ id, amount, product }))}
        >
          add to cart
        </Link>
        <button className="btn reset-btn" onClick={() => setAmount(1)}>
          Reset quantity
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
  }

  .reset-btn {
    font-size: 0.9rem;
    background-color: #fff;
    color: var(--primary-500);
    padding: 0.7rem 1.2rem;
    margin-left: 0.5rem;
  }
`;

export default AddToCart;
