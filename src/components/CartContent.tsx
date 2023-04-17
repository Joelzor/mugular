import styled from "styled-components";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import { useAppSelector } from "../hooks";

const CartContent = () => {
  const { cart } = useAppSelector((store) => store.cart);

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((cartItem) => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default CartContent;
