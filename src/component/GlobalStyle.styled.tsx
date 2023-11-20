import { createGlobalStyle } from "styled-components";
//style
import Colors from "../utiles/Colors";

export const lightTheme = {
  body: `${Colors.WHITE_01}`,
  textColor: `${Colors.SOFT_BLACK}`,
};

export const darkTheme = {
  body: `${Colors.BLACK_01}`,
  textColor: `${Colors.GOLD}`,
};

export const GlobalStyle = createGlobalStyle`
  body {

    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor}
  }
  a {
    color: ${(props) => props.theme.textColor};
  }

  button {
    color: ${(props) => props.theme.textColor};
  }
  `;
