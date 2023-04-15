import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { updateFilters } from "../features/filters/filterSlice";
import { getUniqueValues } from "../utils/helpers";

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
            <h5>Category</h5>
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

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
