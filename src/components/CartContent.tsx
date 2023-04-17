import styled from "styled-components";
import CartColumns from "./CartColumns";

const CartContent = () => {
  return (
    <Wrapper className="section section-center">
      <CartColumns />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default CartContent;
