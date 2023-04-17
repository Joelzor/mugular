import styled from "styled-components";
import { useAppSelector } from "../hooks";
import Product from "./Product";
import Loading from "./Loading";

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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-400);

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  .title-underline {
    background-color: var(--primary-200);
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Featured;
