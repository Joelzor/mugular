import styled from "styled-components";
import { SlEnvolopeLetter } from "react-icons/sl";

const ContactForm = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          Join our newsletter!
          <span className="icon">
            <SlEnvolopeLetter size={24} />
          </span>
        </h3>

        <div className="content">
          <p>
            Keep up to date with the latest Mugular news, including new
            products, offers and site competitions! Easily unsubscribe at any
            time.
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/mvonwdnj"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="_replyto"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: var(--primary-500);

  h3 {
    text-transform: none;
  }

  .icon {
    margin-left: 1rem;
  }

  p {
    line-height: 2;
    max-width: 45em;
    color: var(--grey-800);
  }

  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--black);
  }

  .form-input {
    border-right: none;
    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
  }

  .submit-btn {
    border-top-right-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }

  .form-input::placeholder {
    color: var(--black);
    text-transform: capitalize;
  }

  .submit-btn {
    background: var(--primary-300);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--black);
  }

  .submit-btn:hover {
    color: var(--white);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }

    p {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1280px) {
    padding: 10rem 0;
  }
`;

export default ContactForm;
