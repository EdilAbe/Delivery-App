import { useState, useEffect, React } from "react";
import apiClient from "../services/apiClient.js"
import { Link, useNavigate } from "react-router-dom";
import {Form, Row, Col, Button} from 'react-bootstrap';


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

        {/* <form >
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
        </form> */}
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control   name="username" type="email" placeholder="Enter email"   value={form.email}
              onChange={handleOnInputChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"   name="username"
              value={form.username}
              onChange={handleOnInputChange} placeholder = "Username" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>First Name</Form.Label>
        <Form.Control   name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleOnInputChange}
                placeholder="First" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleOnInputChange}
                placeholder="Last" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control   na  name="password"
              type="password"
              value={form.password}
              onChange={handleOnInputChange}
              placeholder="Enter your password"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control    name="passwordConfirm"
              type="password"
              value={form.passwordConfirm}
              onChange={handleOnInputChange}
              placeholder="Confirm your password" />
        </Form.Group>
      </Row>

    

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Admin" />
      </Form.Group>

      <Button    onClick={handleOnFormSubmit} variant="primary" type="submit">
      Create Account
      </Button>
    </Form>

        

        
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


