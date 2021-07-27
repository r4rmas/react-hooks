import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        border: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: ${props => (props.theme === "dark" ? "#243447" : "whitesmoke")};
	color: ${props => (props.theme === "dark" ? "whitesmoke" : "black")};
    }
    button {
	background-color: rgba(255, 255, 255, 0);
        cursor: pointer;
    }
`;

export default GlobalStyle;
