import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    a{
        color: #2F343A;
    }

    li{
        list-style: none;
    }

    @media (min-width: 1000px) {
        /* .container{
            padding: 0px 60px;
        } */
    }
`;

export default GlobalStyle;
