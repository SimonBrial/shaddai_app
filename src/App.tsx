import { ThemeProvider } from "@material-tailwind/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./app/login/LoginPage";
import CreateAccountPage from "./app/login/createAccount/CreateAccountPage";
import HomePage from "./app/home/HomePage";
import StockPage from "./app/stock/StockPage";
import RecipesPage from "./app/recipes/RecipesPage";
import SettingsPage from "./app/settings/SettingsPage";
import HomePageContainer from "./app/home/HomePageContainer";
import NewRecipePage from "./app/new-recipe/NewRecipePage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/user" element={<HomePage />}>
            <Route index path="home" element={<HomePageContainer />} />
            <Route path="stock" element={<StockPage />} />
            <Route path="recipes" element={<RecipesPage />} />
            <Route path="new-recipe" element={<NewRecipePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
