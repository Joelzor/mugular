import { useEffect } from "react";
import styled from "styled-components";
import { getProducts } from "../features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const Featured = () => {
  const { featuredProducts } = useAppSelector((store) => store.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="title-underline"></div>
      </div>
      <div className="section-center featured">
        {featuredProducts.map((product) => "product")}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--primary-100);

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
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
