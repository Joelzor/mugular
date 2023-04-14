import styled from "styled-components";
import { Filters, ProductList, Sort } from "../components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { sortItems } from "../features/filters/filterSlice";
import { useEffect } from "react";

const Products = () => {
  const { sort } = useAppSelector((store) => store.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(sortItems());
  }, [sort]);

  return (
    <main>
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
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

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Products;
