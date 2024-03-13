import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-gray-0: #FFFFFF;
        --color-gray-1: #F8F9FA;
        --color-gray-2: #868E96;
        --color-gray-3: #343B41;
        --color-gray-4: #212529;
        --color-gray-5: #121214;
        font-family: 'Inter', sans-serif;
        font-size: 62.5%;
    }

    main{
        max-width: 140rem;
        width: 90%;
        margin: 0 auto;
    }

    button,select, input{
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }
`;