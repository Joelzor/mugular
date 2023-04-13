import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Amounts from "./Amounts";

interface AddToCartProps {
  product: {
    id: string;
    stock: number;
  };
}

const AddToCart = (props: AddToCartProps) => {
  const [amount, setAmount] = useState(1);

  const { id, stock } = props.product;

  return (
    <Wrapper>
      <div className="btn-container">
        <Amounts amount={amount} />
        <Link to="/cart" className="btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;

  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default AddToCart;
