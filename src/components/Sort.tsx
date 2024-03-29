import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
  setSort,
  setGridView,
  setListView,
} from "../features/filters/filterSlice";

const Sort = () => {
  const {
    filteredProducts: products,
    grid,
    sort,
  } = useAppSelector((store) => store.filters);
  const dispatch = useAppDispatch();

  const updateSort = (e: any): void => {
    const value = e.target.value;

    dispatch(setSort(value));
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          className={`${grid ? "active" : null}`}
          onClick={() => dispatch(setGridView())}
        >
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!grid ? "active" : null}`}
          onClick={() => dispatch(setListView())}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;

    .btn-container {
      width: 50px;
    }

    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    column-gap: 2rem;
  }

  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;

    button {
      background: transparent;
      border: 1px solid var(--black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--borderRadius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }

    .active {
      background: var(--black);
      color: var(--white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }

  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
