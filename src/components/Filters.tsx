import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { updateFilters } from "../features/filters/filterSlice";
import { formatPrice, getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const {
    filters: { text, category, color, min_price, max_price, price, shipping },
    allProducts,
  } = useAppSelector((store) => store.filters);
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "category") {
      value = e.target.textContent;
    }

    if (name === "price") {
      value = Number(value);
    }

    dispatch(updateFilters({ name, value }));
  };

  const categories = getUniqueValues(allProducts, "category");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <h5>category</h5>
            {categories.map((cat, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  className={`${
                    category === cat.toLowerCase() ? "active" : null
                  }`}
                  onClick={handleChange}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }

  .search-input {
    padding: 0.5rem;
    background: var(--grey-100);
    border-radius: var(--borderRadius);
    border-color: transparent;
    letter-spacing: var(--letterSpacing);
  }

  .search-input::placeholder {
    text-transform: capitalize;
    color: var(--grey-800);
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--letterSpacing);
    color: var(--grey-500);
    cursor: pointer;
  }

  .active {
    border-color: var(--grey-500);
  }

  .price {
    margin-bottom: 0.25rem;
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }

  .clear-btn {
    background: var(--red-dark);
    color: var(--white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
