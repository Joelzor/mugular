import styled from "styled-components";
// import { PageHero } from "../components";
import aboutImg from "../assets/about2.jpg";

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="woman drinking from a nice mug" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="title-underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis laudantium magnam nesciunt neque, minima commodi impedit
              dolore vitae quas pariatur necessitatibus accusantium alias
              tempora! Fugit sequi minus quod delectus perspiciatis!
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slidefromright {
    from {
      transform: translateX(300%);
      opacity: 0;
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  img {
    width: 100%;
    display: block;
    border-radius: var(--borderRadius);
    height: 500px;
    object-fit: cover;
  }

  h2 {
    animation: fadein 0.6s linear;
  }

  p {
    line-height: 2;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--grey-700);
  }

  .title {
    text-align: left;
  }

  .title-underline {
    margin-left: 0;
    animation: slidefromright 0.4s linear;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
