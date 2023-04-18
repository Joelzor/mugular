import heroBcg from "../assets/hero.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Go for <br />
          the Mugular
        </h1>
        <p>
          Bespoke and handcrafted mugs for those who take pride in what they
          drink from.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="mug art" className="main-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  h1 {
    font-weight: 700;
    animation: slidein 0.6s ease-in;
  }

  @keyframes slidein {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }

    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--grey-500);
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
    }
    .main-img {
      width: 100%;
      height: 550px;
      border-radius: var(--borderRadius);
      display: block;
      object-fit: cover;
    }
  }
`;

export default Hero;
