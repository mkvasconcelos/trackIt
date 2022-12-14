import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        max-width: 375px;
        height: 100%;
        font-weight: 400;
        font-family: 'Lexend Deca', Arial, Helvetica, sans-serif;
    }
`;
export default GlobalStyle;
