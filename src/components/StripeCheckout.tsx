import styled from "styled-components";

const CheckoutForm = () => {
  return <h2>Stripe Checkout</h2>;
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default StripeCheckout;
