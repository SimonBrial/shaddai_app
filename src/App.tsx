import { ThemeProvider } from "@material-tailwind/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./app/login/LoginPage";
import CreateAccountPage from "./app/login/createAccount/CreateAccountPage";
import HomePage from "./app/home/HomePage";
import StockPage from "./app/stock/StockPage";
import RecipesPage from "./app/recipes/RecipesPage";
import SettingsPage from "./app/settings/SettingsPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/home" element={<HomePage />}>
            <Route index path="stock" element={<StockPage />} />
            <Route path="recipes" element={<RecipesPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
