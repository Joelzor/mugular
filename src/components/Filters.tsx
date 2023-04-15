import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";
import { updateFilters } from "../features/filters/filterSlice";

const Filters = () => {
  const {
    filters: { text, category, color, min_price, max_price, price, shipping },
  } = useAppSelector((store) => store.filters);
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(updateFilters({ name, value }));
  };

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
          <div className="form-control"></div>
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

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
