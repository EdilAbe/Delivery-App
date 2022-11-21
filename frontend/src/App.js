import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import apiClient from "./services/apiClient.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import ListingPage from "./pages/ListingPage.js";
import LandingPage from "./pages/LandingPage.js";
import ConfirmationPage from "./pages/ConfirmationPage.js"
import CheckoutPage from "./pages/CheckoutPage.js"
import ViewPage from "./pages/ViewPage.js"
import CreatePage from "./pages/CreatePage.js"
import EditPage from "./pages/EditPage.js"

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false)
 // const navigate = useNavigate();
  

  useEffect(() => {
    const fetchUser = async () => {
      const { resData, error } = await apiClient.fetchUserFromToken();

      console.log("user data from: ", resData)


      if (resData?.data) {
        setUser(resData.user);
        console.log("user data: ",resData.data)
      }
      if (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    const token = localStorage.getItem("weDeliver_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    } else {
      setIsLoading(false);
      setIsAuthorized(true);
    }
 }, []);




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <ListingPage user={user} setUser={setUser} />
              ) : (
                <LandingPage user={user} setUser={setUser} />
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
          <Route
            path="/addToMenu/:id"
            element={<CreatePage user={user} setUser={setUser} />}
          />
           <Route
            path="/menu/:id/edit"
            element={<EditPage user={user} setUser={setUser} />}
          />
          <Route
          path="/menu/:id"
          element={<ViewPage user={user} setUser={setUser} />}
        />
          <Route
          path="/checkout/:id"
          element={<CheckoutPage user={user} setUser={setUser} />}
        /><Route
        path="/confirm/:id/:orderId"
        element={<ConfirmationPage user={user} setUser={setUser} />}
      />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
