import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import apiClient from "./services/apiClient.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import LoginPage from "./pages/LoginPage.js";
//import Login from "./pages/Login.js";
import RegisterPage from "./pages/RegisterPage.js";
import ListingPage from "./pages/ListingPage.js";
import LandingPage from "./pages/LandingPage.js";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();

      if (data) {
        setUser(data.user);
      }
      if (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    const token = localStorage.getItem("weDeliver_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !user ? (
                <ListingPage user={user} setUser={setUser} />
              ) : (
                <LandingPage />
              )
            }
          />

          <Route
            path="/listing"
            element={<ListingPage user={user} setUser={setUser} />}
          />

          <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<RegisterPage user={user} setUser={setUser} />}
          />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
