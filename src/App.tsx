import React, { useState } from "react";
import "./App.css";
import { AppRouter } from "./component/AppRouter";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyle,
  darkTheme,
  lightTheme,
} from "./component/GlobalStyle.styled";
import { Button } from "./component/Button.styled";

function App() {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <div className="App">
        <Button onClick={switchTheme}>Switch here</Button>
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
