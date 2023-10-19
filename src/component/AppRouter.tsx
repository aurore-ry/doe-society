import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomeView } from "../views/HomeView";
import { RegisterView } from "../views/RegisterView";
import { DashboardView } from "../views/DashboardView";
import { SignInView } from "../views/SignInView";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomeView commonProps={{ isLogged: false, title: "Home" }} />
          }
        />
        <Route path="/signup" element={<RegisterView isLogged={false} />} />
        <Route path="/signin" element={<SignInView />} />
        <Route path="/dashboard" element={<DashboardView isLogged={false} />} />
      </Routes>
    </Router>
  );
};
