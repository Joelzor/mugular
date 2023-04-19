import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { formatPrice } from "../utils/helpers";
import { useAppSelector } from "../hooks";

const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  return <h2>Stripe Checkout</h2>;
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise} />
      <CheckoutForm />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default StripeCheckout;
