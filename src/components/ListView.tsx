import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { ProductListI, ProductI } from "../interfaces/Product";

interface ListViewProps {
  products: ProductListI[];
}

const ListView = ({ products = [] }: ListViewProps) => {
  return (
    <Wrapper>
      {products.map((product: ProductListI) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  article {
    padding: 0.5rem;
  }

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--borderRadius);
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  .price {
    color: var(--primary-600);
    margin-bottom: 0.75rem;
  }

  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }

  .btn {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
      background-color: var(--grey-100);
      border-radius: var(--borderRadius);
    }

    img {
      margin-bottom: 0;
    }
  }
`;

export default ListView;
