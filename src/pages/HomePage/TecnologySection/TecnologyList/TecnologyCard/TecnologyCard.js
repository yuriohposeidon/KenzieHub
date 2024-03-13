import styled from "styled-components";

export const StyledTecnologyCard = styled.div`

    .card__container{
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    padding: 2rem;

    background-color: var(--color-gray-5);

    border-radius: 0.4rem;
    }

    .card__container:hover{
        background-color: var(--color-gray-3);
        cursor: pointer;
    }

    .tecnology__title{
        font-size: 1.4rem;
        font-weight: 700;
    }

    .tecnology__status{
        font-size: 1.2rem;
        font-weight: 400;
    }
`