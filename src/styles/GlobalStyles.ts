import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: Cartograph CF;
        src: url(./assets/fonts/CartographCF-Regular.ttf) ;
    }

    body {
        margin: 0px;
        padding: 0px;
        font-family: Cartograph CF;
    }
`;
