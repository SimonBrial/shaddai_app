import { ThemeProvider } from "@material-tailwind/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./app/login/LoginPage";
import CreateAccountPage from "./app/login/createAccount/CreateAccountPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/stock" element={<h1>stock</h1>} />
          <Route path="/recipes" element={<h1>recipes</h1>} />
          <Route path="/settings" element={<h1>settings</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
