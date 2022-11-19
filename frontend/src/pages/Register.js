import { useState, useEffect, React } from "react";
import apiClient from "../services/apiClient.js"
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState()
  const [user, setUser] = useState()

  const [form, setForm] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    if (event.target.name === "lastName") {
      if (event.target.value.length === 0) {
        setErrors((e) => ({ ...e, lastName: "Please enter your last name." }));
      } else {
        setErrors((e) => ({ ...e, lastName: null }));
      }
    }

    if (event.target.name === "username") {
      if (event.target.value.length === 0) {
        setErrors((e) => ({ ...e, username: "Please enter your username." }));
      } else {
        setErrors((e) => ({ ...e, username: null }));
      }
    }

    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnFormSubmit = async () => {
    setErrors((e) => ({ ...e, form: null }));

    const { data, error } = await apiClient.signup(form);
    if (error) {
      setErrors((e) => ({ ...e, form: error }));
    }
    if (data?.user) {
      setUser(data.user);
      apiClient.setToken(data.token);
      console.log("user info",data)
    }
    navigate("/listing");
  };

  return (
    <div >
      <div>
        <h2>Register</h2>

        <form >
          <div>
            <label >Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleOnInputChange}
              placeholder="Enter a valid email"
            />
          </div>

          <div >
            <label >Username</label>
            <input
              name="username"
              type="text"
              value={form.username}
              onChange={handleOnInputChange}
              placeholder="Username"
            />
          </div>

          <div >
            <div >
              <input
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleOnInputChange}
                placeholder="First Name"
              />
              
            </div>

            <div >
              <input
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleOnInputChange}
                placeholder="Last Name"
              />
             
            </div>
          </div>

          <div >
            <label >Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleOnInputChange}
              placeholder="Enter your password"
            />
          </div>

          <div >
            <label>Confirm Password</label>
            <input
              name="passwordConfirm"
              type="password"
              value={form.passwordConfirm}
              onChange={handleOnInputChange}
              placeholder="Confirm your password"
            />
            
          </div>
        </form>

        <button
          className="submit-registration main-button"
          onClick={handleOnFormSubmit}
        >
          Create Account
        </button>
        <div className="footer">
          <p>
            Already have an account? Log in{" "}
            <Link to="/login" >
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}