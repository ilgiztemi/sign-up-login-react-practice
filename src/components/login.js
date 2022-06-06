import React from "react";
import { useState } from "react";
import { useContext } from "react";
import "../App.css";
import { UserContext } from "../context/userContext";

const Login = () => {
    const[match, setMatch] = useState('')
  const { email, setEmail, password, setPassword, list } = useContext(UserContext);

  const handleLogin = () => {
      const newList = [...list];
      const copy = newList.find(el => (el.email === email));
    if(copy) {
        if(copy.email === email && copy.password === password) {
            setMatch(`Hello ${copy.name} ${copy.lastName} !`);
        }
    }
    else{
        setMatch('Wrong credentials! ')
    }
    setEmail('');
    setPassword('');
  }
  return (
    <div className="login" id="login">
      <div className="content">
        <h2>LOGIN TO YOUR ACCOUNT</h2>
        <p>{match}</p>
        <div className="login-inputs">
          <input value={email} type="email" placeholder="Email*" required onChange={(e) => setEmail(e.target.value)} />
          <i class="fa-solid fa-envelope"></i>
        </div>
        <div className="login-inputs">
          <input type="text" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <i class="fa-solid fa-eye-slash"></i>
        </div>
        <button onClick={handleLogin} className="login-btn">log in</button>
        <h4>Don't have an account?</h4>
        <a href="#main">Create an account</a>
      </div>
    </div>
  );
};

export default Login;
