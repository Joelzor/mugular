import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../hooks";

const Filters = () => {
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
