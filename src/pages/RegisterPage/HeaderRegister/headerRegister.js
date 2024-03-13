import styled from "styled-components";

export const StyledHeaderRegister = styled.header`
  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-width: 29rem;
    max-width: 37rem;
    width: 100%;

    margin: 0 auto;
    padding: 3rem 2rem;
  }

  img {
    height: 100%;
  }

  .button__return {
    font-size: 1.2rem;
    font-weight: 600;

    background-color: var(--color-gray-3);
    color: var(--color-gray-1);

    border-radius: 0.4rem;

    padding: 1rem;
  }

  @media (min-width: 400px){
    .header__container{
        padding: 3rem 0rem;
    }
  }
`;