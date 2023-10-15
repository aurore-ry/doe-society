import React from "react";
import "./App.css";
import { HomeView } from "./views/HomeView";
import { AppRouter } from "./component/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
