import styled from "styled-components";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            marvelous mugs <br />
            for every occasion
          </h3>
          <div className="title-underline"></div>
        </article>
        <div className="services-center">
          <article className="service">
            <span>
              <GiCompass />
            </span>
            <h4>our mission</h4>
            <p>
              We aim to deliver the highest quality mugs that have ever graced
              the tips of your lips, all at affordable prices with the
              friendliest customer service.
            </p>
          </article>
          <article className="service">
            <span>
              <GiDiamondHard />
            </span>
            <h4>our vision</h4>
            <p>
              We want to become the premier mug company- when you think mugs,
              you'll think Mugular. Soon, you'll be able to fully customise your
              mug-shaped desires.
            </p>
          </article>
          <article className="service">
            <span>
              <GiStabbedNote />
            </span>
            <h4>our history</h4>
            <p>
              Founded in the ancient year of 2023, we have a long history of
              delivering top beverage holders to hold anything from mead to
              coffee.
            </p>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--white);
  padding: 5rem 0;

  .header h3 {
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    margin-bottom: 0;
    line-height: 1.8;
  }

  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;

    h4 {
      font-weight: 600;
    }
  }

  .service {
    background: var(--grey-100);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--borderRadius);
    p {
      color: var(--grey-600);
    }
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--primary-500);
    color: var(--primary-100);
    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Services;
