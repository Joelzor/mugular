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

  img {
    width: 100%;
    display: block;
    border-radius: var(--borderRadius);
    height: 500px;
    object-fit: cover;
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
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
