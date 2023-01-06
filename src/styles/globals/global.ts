import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        transition: all 1s;
        background: ${(props) => props.theme.colors.background};
    }
`
