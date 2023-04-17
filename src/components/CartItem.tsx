import styled from "styled-components";
import { formatPrice } from "../utils/helpers";

interface CartItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
  amount: number;
}

const CartItem = ({ id, image, name, price, amount }: CartItemProps) => {
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

  .price-small {
    color: var(--primary-500);
  }

  .price {
    display: none;
  }

  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;

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
  }
`;

export default CartItem;
