import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border:0;
    box-sizing: border-box;
    font-family: "Montserrat";
}

#root {
    background-color: ${({ theme }) => theme.colors.black};
    height: 100vh;
    padding: ${({ theme }) => theme.gridUnit * 4}px;
}
`;
export default GlobalStyles;
