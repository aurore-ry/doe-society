import React, { useState } from "react";
import "./App.css";
import { AppRouter } from "./component/AppRouter";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyle,
  darkTheme,
  lightTheme,
} from "./component/GlobalStyle.styled";
import SwitchMode from "./component/Switch";
import { AppBar } from "./component/AppBar";
import { StyledRow } from "./component/Layout.styled";

function App() {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <AppBar />
        <SwitchMode theme={theme} switchTheme={switchTheme} />
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
