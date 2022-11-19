import { useState, useEffect, React } from "react";
import apiClient from "../services/apiClient.js"
import { Link, useNavigate } from "react-router-dom";


export default function Login(){
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState()
    const [user, setUser] = useState()
    useEffect(() => {
        if (user?.email) {
          navigate("/listing");
        }
      }, [user, navigate]);
    
      const handleOnInputChange = (evt) => {
        // check if email is valid
        if (evt.target.name === "email") {
          if (evt.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email" }));
          } else {
            setErrors((e) => ({ ...e, email: null }));
          }
        }
    
        if (evt.target.name === "email") {
          if (evt.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
          } else {
            setErrors((e) => ({ ...e, email: null }));
          }
        }
        setForm((f) => ({ ...f, [evt.target.name]: evt.target.value }));
      };
    
      const handleOnFormSubmit = async (evt) => {
        evt.preventDefault();
        // setIsAuthorized(false);
        //setErrors((e) => ({ ...e, form: null }));
    
        const { data, error } = await apiClient.login(form);
        console.log("Data", data);
        console.log("Error", error);
        if (error) {
          setErrors((e) => ({ ...e, form: error }));
        }
        if (data?.user) apiClient.setToken(data.token);
        setUser(data.user);
        // setIsAuthorized(true);
        navigate("/listing")
      };
    




    return(
        <div>
      <div >
        <h2>Login</h2>

        {/* verify if the user is logged in before accessing this page */}

        <form>
          <div>
            <label >Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleOnInputChange}
            />
          </div>

          <div >
            <label >Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleOnInputChange}
            />
           
          </div>

          <button
            onClick={handleOnFormSubmit}
          >
            Log in
          </button>
        </form>

        <div >
          <p>
            Don't have an account? Sign up{" "}
            <Link to="/register" >
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
    )
}