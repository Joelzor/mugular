import styled from "styled-components";
import { useAppSelector } from "../hooks";
import Product from "./Product";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Featured = () => {
  const { featuredProducts, productsLoading: loading } = useAppSelector(
    (store) => store.products
  );

  if (loading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h3>featured products</h3>
        <div className="title-underline"></div>
      </div>
      <div className="section-center featured">
        {featuredProducts.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-500);

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  h3 {
    font-weight: 600;
  }

  .title-underline {
    background-color: var(--white);
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    background-color: var(--grey-100);
    color: var(--primary-500);
    font-weight: bold;
  }

  .btn:hover {
    background-color: var(--white);
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Featured;
