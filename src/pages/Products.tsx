import styled from "styled-components";
import { Filters, ProductList, Sort } from "../components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { sortItems, filterProducts } from "../features/filters/filterSlice";
import { useEffect } from "react";

const Products = () => {
  const { sort, filters, allProducts } = useAppSelector(
    (store) => store.filters
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterProducts());
    dispatch(sortItems());
  }, [sort, filters, allProducts]);

  return (
    <main>
      <Wrapper className="page">
        <div className="section-center products">
          <div className="main">
            <Sort />
            <ProductList />
          </div>
          <Filters />
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  .main {
    order: 1;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 1fr 200px;
    }

    .main {
      order: revert;
    }
  }
`;

export default Products;
