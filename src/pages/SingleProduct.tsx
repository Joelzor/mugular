import { useEffect } from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../features/products/singleProductSlice";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { singleProduct: product } = useAppSelector(
    (store) => store.singleProduct
  );

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, [id]);

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    images,
  } = product;

  console.log(product);

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <div></div>
          <section className="content">
            <h2>{name} Mug</h2>
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available:</span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>SKU:</span>
              {sku}
            </p>
            <hr />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--primary-500);
    font-weight: 600;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
