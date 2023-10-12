import React from "react";
import "./App.css";
import { HomeView } from "./views/HomeView/HomeView";

function App() {
  return (
    <div className="App">
      <HomeView commonProps={{ isLogged: false, title: "Home" }} />
    </div>
  );
}

export default App;
