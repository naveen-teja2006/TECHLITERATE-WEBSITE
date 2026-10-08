import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignIn.css";
import Loader from "../components/Loader.jsx";
// SignIn Component
function SignIn() {
  let [formData, setFormData] = useState({ email: "", password: "" });
  let { email, password } = formData;
  let [message, setMessage] = useState("");
  let navigate = useNavigate();
  // Run Function On Submit Button
  let handleSubmit = async (e) => {
    e.preventDefault(); // To prevent the page refresh
    if (!email || !password) {
      setMessage("All Fields Are Required!");
      return;
    }
    setMessage("");
    await checkUser(formData);
  }
  // Check The SignIn History
  async function checkUser(formData) {
    try {
      // POST The Form Data To The Backend
      let response = await fetch("http://localhost:3000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      let data = await response.json();
      // Handle backend errors first
      if (!response.ok) {
        setMessage(data.message);
        return;
      }
      // After successful signin
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("username",data.user.username);
      localStorage.setItem("userEmail",data.user.email);
      setMessage(data.message);
      alert(data.message);
      <Loader />
      navigate("/choose-role");
      return;
    } catch (error) { // Display the error 
      setMessage(error.message);
      return;
    }
  }
  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <legend className="legend">Sign In</legend>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input type="email" placeholder="Ex :- abc@gmail.com" value={formData.email} name="email" onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })} />
          </div>
          <div className='form-group'>
            <label htmlFor="password">Password : </label>
            <input type="password" placeholder="Enter Your Password Here..." value={formData.password}
              name="password" id="password"
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
          </div>
          <button type="submit" className='sign-In-Btn'>Sign In</button>
          <span className='register-here-link'>Or Don't Have Account ? <Link to="/register">Register Here</Link></span>
          <h3 className='error-message'>{message}</h3>
        </form>
      </div>
    </>
  )
}

export default SignIn;