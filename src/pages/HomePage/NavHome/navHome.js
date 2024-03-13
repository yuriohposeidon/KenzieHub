import styled from "styled-components";

export const StyledNavHome = styled.nav`
  .nav__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    max-width: 140rem;
    width: 75%;

    margin: 0 auto;
    padding: 3rem 0rem;
  }

  img {
    height: 100%;
  }

  button {
    font-size: 1.2rem;
    font-weight: 600;

    background-color: var(--color-gray-4);
    color: var(--color-gray-1);

    border-radius: 0.4rem;

    padding: 1rem 2rem;
  }

  @media (min-width: 400px) {
    .header__container {
      padding: 3rem 0rem;
    }
  }
`;
