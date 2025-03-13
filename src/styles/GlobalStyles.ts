import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border:0;
    box-sizing: border-box;
    font-family: "Montserrat";
}

#root {
    background-color: ${({ theme }) => theme.colors.neutral_10};
    height: 100vh;
    color: ${({ theme }) => theme.colors.neutral_100} ;
}
`
export default GlobalStyles
